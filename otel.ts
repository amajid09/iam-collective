import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { ConsoleSpanExporter, BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { diag, DiagConsoleLogger, DiagLogLevel, trace } from '@opentelemetry/api';
import { LoggerProvider, SimpleLogRecordProcessor } from '@opentelemetry/sdk-logs';
import { ConsoleLogRecordExporter } from '@opentelemetry/sdk-logs';
import { SeverityNumber } from '@opentelemetry/api-logs';

// Enable debugging logs for OpenTelemetry
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Setup tracer provider
const tracerProvider = new WebTracerProvider();
tracerProvider.addSpanProcessor(new BatchSpanProcessor(new ConsoleSpanExporter()));
tracerProvider.register();

// Setup logger provider
const loggerProvider = new LoggerProvider();
const consoleExporter = new ConsoleLogRecordExporter();

// Add console logging for development
loggerProvider.addLogRecordProcessor(new SimpleLogRecordProcessor(consoleExporter));

// Create logger instances for different purposes
const appLogger = loggerProvider.getLogger('app-logger');
const errorLogger = loggerProvider.getLogger('error-logger');
const tracer = trace.getTracer('default-tracer');

// Global error handling
window.onerror = (
  message: string | Event,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error
): void => {
  errorLogger.emit({
    severityNumber: SeverityNumber.ERROR,
    severityText: 'ERROR',
    body: 'Uncaught Exception',
    attributes: {
      message: String(message),
      source: String(source),
      lineno: Number(lineno),
      colno: Number(colno),
      stack: error?.stack,
      type: 'uncaught-exception',
    },
  });
};

// Unhandled promise rejection handling
window.onunhandledrejection = (event: PromiseRejectionEvent): void => {
  const reason: unknown = event.reason;

  errorLogger.emit({
    severityNumber: SeverityNumber.ERROR,
    severityText: 'ERROR',
    body: 'Unhandled Promise Rejection',
    attributes: {
      reason: typeof reason === 'string' ? reason : JSON.stringify(reason),
      stack:
        typeof reason === 'object' && reason !== null && 'stack' in reason
          ? String((reason as Error).stack)
          : undefined,
      type: 'unhandled-rejection',
    },
  });
};

const originalConsole = { ...console };

console.error = (...args): void => {
  errorLogger.emit({
    severityNumber: SeverityNumber.ERROR,
    severityText: 'ERROR',
    body: args.join(' '),
    attributes: { type: 'console-error' },
  });
  originalConsole.error(...args);
};

// Export for use in other files
export { appLogger, errorLogger, tracer };
