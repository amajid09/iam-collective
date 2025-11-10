/*eslint-disable */
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../src/services/Api', async () => {
  return {
    default: vi.fn(),
  };
});

import { setLogger } from '../src/config/logging-config';
import postMethod from '../src/services/Api';

const mockedPostMethod = postMethod as unknown as ReturnType<typeof vi.fn>;

describe('custom-logger implementation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should send a debug log', async () => {
    const logger = {
      debug: ({ message, context, attributes }) => {
        void (async () => {
          await postMethod({
            level: 'debug',
            message,
            context,
            attributes,
            timestamp: 'mock-timestamp',
          });
        })();
      },
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };

    setLogger(logger);

    logger.debug({ message: 'debug msg', context: 'test', attributes: { foo: 'bar' } });

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockedPostMethod).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'debug',
        message: 'debug msg',
        context: 'test',
        attributes: { foo: 'bar' },
      })
    );
  });

  it('should send an info log', async () => {
    const logger = {
      debug: vi.fn(),
      info: ({ message, context, attributes }) => {
        void (async () => {
          await postMethod({
            level: 'info',
            message,
            context,
            attributes,
            timestamp: 'mock-timestamp',
          });
        })();
      },
      warn: vi.fn(),
      error: vi.fn(),
    };

    setLogger(logger);

    logger.info({ message: 'info msg', context: 'test', attributes: {} });

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockedPostMethod).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'info',
        message: 'info msg',
      })
    );
  });

  it('should send a warn log', async () => {
    const logger = {
      debug: vi.fn(),
      info: vi.fn(),
      warn: ({ message, context, attributes }) => {
        void (async () => {
          await postMethod({
            level: 'warn',
            message,
            context,
            attributes,
            timestamp: 'mock-timestamp',
          });
        })();
      },
      error: vi.fn(),
    };

    setLogger(logger);

    logger.warn({ message: 'warn msg', context: 'test', attributes: {} });

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockedPostMethod).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'warn',
        message: 'warn msg',
      })
    );
  });

  it('should send an error log', async () => {
    const logger = {
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: ({ message, error, context, attributes }) => {
        void (async () => {
          await postMethod({
            level: 'error',
            message,
            error: error.message,
            stack: error.stack,
            context,
            attributes,
            timestamp: 'mock-timestamp',
          });
        })();
      },
    };

    setLogger(logger);

    logger.error({
      message: 'err msg',
      error: new Error('something went wrong'),
      context: 'test',
      attributes: {},
    });

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockedPostMethod).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'error',
        message: 'err msg',
        error: 'something went wrong',
      })
    );
  });
});
