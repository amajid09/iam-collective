import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { errorLogger } from '../../../../otel';
import { SeverityNumber } from '@opentelemetry/api-logs';
import React, { ReactElement } from 'react';

const logError = (error: Error, info: { componentStack: string }): void => {
  errorLogger.emit({
    severityNumber: SeverityNumber.ERROR,
    severityText: 'ERROR',
    body: 'React Component Error',
    attributes: {
      error: error.message,
      stack: error.stack,
      componentStack: info.componentStack,
      type: 'react-component-error',
    },
  });
};

const handleError = (error: Error, info: React.ErrorInfo): void => {
  logError(error, { componentStack: info.componentStack ?? '' });
};

const Fallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}): React.ReactElement => {
  return (
    <div
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Error</h1>
      <p>{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        style={{
          backgroundColor: '#FFCB05',
          color: 'black',
          padding: '10px 20px',
          borderRadius: '5px',
        }}
      >
        Try again
      </button>
    </div>
  );
};

export const ErrorBoundary = ({ children }: { children: React.ReactNode }): ReactElement => (
  <ReactErrorBoundary FallbackComponent={Fallback} onError={handleError}>
    {children}
  </ReactErrorBoundary>
);
