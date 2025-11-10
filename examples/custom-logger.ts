import { setLogger } from '../src/config/logging-config';
import postMethod from '../src/services';

// Example 1: Full logger implementation
setLogger({
  debug: ({ message, context, attributes }): void => {
    // eslint-disable-next-line no-void
    void (async (): Promise<void> => {
      try {
        await postMethod({
          level: 'debug',
          message,
          context,
          attributes,
          timestamp: new Date().toISOString(),
        });
      } catch (e) {
        console.error('Failed to send debug log:', e);
      }
    })();
  },

  info: ({ message, context, attributes }): void => {
    // eslint-disable-next-line no-void
    void (async (): Promise<void> => {
      try {
        await postMethod({
          level: 'info',
          message,
          context,
          attributes,
          timestamp: new Date().toISOString(),
        });
      } catch (e) {
        console.error('Failed to send info log:', e);
      }
    })();
  },

  warn: ({ message, context, attributes }): void => {
    // eslint-disable-next-line no-void
    void (async (): Promise<void> => {
      try {
        await postMethod({
          level: 'warn',
          message,
          context,
          attributes,
          timestamp: new Date().toISOString(),
        });
      } catch (e) {
        console.error('Failed to send warning log:', e);
      }
    })();
  },

  error: ({ message, error, context, attributes }): void => {
    // eslint-disable-next-line no-void
    void (async (): Promise<void> => {
      try {
        await postMethod({
          level: 'error',
          message,
          error: error.message,
          stack: error.stack,
          context,
          attributes,
          timestamp: new Date().toISOString(),
        });
      } catch (e) {
        console.error('Failed to send error log:', e);
      }
    })();
  },
});
