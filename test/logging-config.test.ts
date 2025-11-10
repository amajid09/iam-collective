import { defaultLogger, setLogger, logger } from '../src/config/logging-config';
import type { Logger } from '@opentelemetry/api-logs';
import { appLogger as _appLogger, errorLogger as _errorLogger } from '../otel';
import { beforeEach, describe, expect, test, vi, afterEach, SpyInstance } from 'vitest';

const appLogger: Logger = _appLogger;
const errorLogger: Logger = _errorLogger;

describe('Logging Configuration', () => {
  let appLoggerSpy: SpyInstance<[Record<string, unknown>], void>;
  let errorLoggerSpy: SpyInstance<[Record<string, unknown>], void>;

  beforeEach(() => {
    appLoggerSpy = vi.spyOn(appLogger, 'emit');
    errorLoggerSpy = vi.spyOn(errorLogger, 'emit');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should log debug messages', () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation((): void => {});
    defaultLogger.debug({ message: 'Debug message', context: 'test', attributes: {} });

    expect(appLoggerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        severityNumber: expect.any(Number) as number,
        severityText: 'DEBUG',
        body: 'Debug message',
        attributes: expect.any(Object) as Record<string, unknown>,
      })
    );

    consoleLogSpy.mockRestore();
  });

  test('should log info messages', () => {
    defaultLogger.info({ message: 'Info message', context: 'test', attributes: {} });

    expect(appLoggerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        severityNumber: expect.any(Number) as number,
        severityText: 'INFO',
        body: 'Info message',
        attributes: expect.any(Object) as Record<string, unknown>,
      })
    );
  });

  test('should log warn messages', () => {
    defaultLogger.warn({ message: 'Warn message', context: 'test', attributes: {} });

    expect(appLoggerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        severityNumber: expect.any(Number) as number,
        severityText: 'WARN',
        body: 'Warn message',
        attributes: expect.any(Object) as Record<string, unknown>,
      })
    );
  });

  test('should log error messages', () => {
    const error = new Error('Test error');
    defaultLogger.error({ message: 'Error message', error, context: 'test', attributes: {} });

    expect(errorLoggerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        severityNumber: expect.any(Number) as number,
        severityText: 'ERROR',
        body: 'Error message',
        attributes: expect.objectContaining({
          error: error.message,
          stack: error.stack,
        }) as Record<string, unknown>,
      })
    );
  });

  test('should set a custom logger', () => {
    const customLogger: typeof logger = {
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };

    setLogger(customLogger);
    expect(Object.keys(logger)).toEqual(Object.keys(customLogger));
  });
});
