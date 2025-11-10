import { LoggingProxy } from '../types/logging';
import { appLogger, errorLogger } from '../../otel';
import { SeverityNumber } from '@opentelemetry/api-logs';

// Default OpenTelemetry implementation
export const defaultLogger: LoggingProxy = {
  debug: ({ message, context, attributes }): void => {
    appLogger.emit({
      severityNumber: SeverityNumber.DEBUG,
      severityText: 'DEBUG',
      body: message,
      attributes: { context, ...attributes },
    });
  },
  info: ({ message, context, attributes }): void => {
    appLogger.emit({
      severityNumber: SeverityNumber.INFO,
      severityText: 'INFO',
      body: message,
      attributes: { context, ...attributes },
    });
  },
  warn: ({ message, context, attributes }): void => {
    appLogger.emit({
      severityNumber: SeverityNumber.WARN,
      severityText: 'WARN',
      body: message,
      attributes: { context, ...attributes },
    });
  },
  error: ({ message, error, context, attributes }): void => {
    errorLogger.emit({
      severityNumber: SeverityNumber.ERROR,
      severityText: 'ERROR',
      body: message,
      attributes: {
        context,
        error: error.message,
        stack: error.stack,
        ...attributes,
      },
    });
  },
};

// Current active logger
let activeLogger: LoggingProxy = defaultLogger;

// Function to set custom logger
export const setLogger = (customLogger: Partial<LoggingProxy>): void => {
  activeLogger = { ...defaultLogger, ...customLogger };
};

// Export the logger instance
export const logger = activeLogger;
