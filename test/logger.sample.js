const pkg = require('../src/logger.js');
const { Logger } = pkg;
// Create logger instance
const logger = new Logger({
  level: 'debug',
  showTimestamp: false,
  showIcon: false
});

// Basic logging with automatic type coloring
logger.log('Hello %s, you have %d messages', 'John', 5);
logger.info('Mixed types:', 'text', 42, true, [1,2,3], {name: 'John'});

// Use as console replacement
// console = logger;
logger.table([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
]);

logger.group('Test Group');
logger.log('Inside group');
logger.log('more');
logger.group('Nested');
logger.log('deeper');
logger.groupEnd();
logger.groupEnd();