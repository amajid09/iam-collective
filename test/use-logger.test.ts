import { describe, test, expect, vi, beforeEach } from 'vitest';
import { useLogger } from '../src/app/hooks/use-logger';
import { appLogger, errorLogger } from '../otel';
import type { SpyInstance } from 'vitest';

describe('useLogger', () => {
  const context = 'TestComponent';
  let logger: ReturnType<typeof useLogger>;
  let appLoggerSpy: SpyInstance;
  let errorLoggerSpy: SpyInstance;

  beforeEach(() => {
    appLoggerSpy = vi.spyOn(appLogger, 'emit').mockImplementation(() => {});
    errorLoggerSpy = vi.spyOn(errorLogger, 'emit').mockImplementation(() => {});
    logger = useLogger(context);
  });

  test('debug should emit log with correct severity', () => {
    const message = 'Debug message';
    const attributes = { key: 'value' };

    logger.debug(message, attributes);

    expect(appLoggerSpy).toHaveBeenCalledWith({
      severityNumber: expect.any(Number) as number,
      severityText: 'DEBUG',
      body: message,
      attributes: { context, ...attributes },
    });
  });

  test('info should emit log with correct severity', () => {
    const message = 'Info message';
    const attributes = { key: 'value' };

    logger.info(message, attributes);

    expect(appLoggerSpy).toHaveBeenCalledWith({
      severityNumber: expect.any(Number) as number,
      severityText: 'INFO',
      body: message,
      attributes: { context, ...attributes },
    });
  });

  test('warn should emit log with correct severity', () => {
    const message = 'Warning message';
    const attributes = { key: 'value' };

    logger.warn(message, attributes);

    expect(appLoggerSpy).toHaveBeenCalledWith({
      severityNumber: expect.any(Number) as number,
      severityText: 'WARN',
      body: message,
      attributes: { context, ...attributes },
    });
  });

  test('error should emit log with error details', () => {
    const message = 'Error message';
    const error = new Error('Test error');
    const attributes = { key: 'value' };

    logger.error(message, error, attributes);

    expect(errorLoggerSpy).toHaveBeenCalledWith({
      severityNumber: expect.any(Number) as number,
      severityText: 'ERROR',
      body: message,
      attributes: {
        context,
        error: error.message,
        stack: error.stack,
        ...attributes,
      },
    });
  });

  test('should handle undefined attributes', () => {
    const message = 'Test message';

    logger.info(message);

    expect(appLoggerSpy).toHaveBeenCalledWith({
      severityNumber: expect.any(Number) as number,
      severityText: 'INFO',
      body: message,
      attributes: { context },
    });
  });
});
