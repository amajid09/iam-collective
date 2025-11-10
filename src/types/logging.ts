export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: string;
  error?: Error;
  attributes?: Record<string, unknown>;
  timestamp?: string;
}

export interface LoggingProxy {
  debug: (entry: Omit<LogEntry, 'level'>) => void;
  info: (entry: Omit<LogEntry, 'level'>) => void;
  warn: (entry: Omit<LogEntry, 'level'>) => void;
  error: (entry: Omit<LogEntry, 'level'> & { error: Error }) => void;
}
