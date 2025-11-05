import { logger } from '../../config/logging-config';

type LoggerFn = (message: string, attributes?: Record<string, unknown>) => void;
type ErrorLoggerFn = (message: string, error: Error, attributes?: Record<string, unknown>) => void;

type UseLoggerReturn = {
  debug: LoggerFn;
  info: LoggerFn;
  warn: LoggerFn;
  error: ErrorLoggerFn;
};

export const useLogger = (context: string): UseLoggerReturn => {
  return {
    debug: (message: string, attributes?: Record<string, unknown>): void => {
      logger.debug({ message, context, attributes });
    },
    info: (message: string, attributes?: Record<string, unknown>): void => {
      logger.info({ message, context, attributes });
    },
    warn: (message: string, attributes?: Record<string, unknown>): void => {
      logger.warn({ message, context, attributes });
    },
    error: (message: string, error: Error, attributes?: Record<string, unknown>): void => {
      logger.error({ message, error, context, attributes });
    },
  };
};
