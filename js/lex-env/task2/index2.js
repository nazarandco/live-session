//put your code here
const createLogger = () => {
    let memo = [];
  
    function warn(strWarn) {
      return memo.unshift({
        message: strWarn,
        dateTime: new Date(),
        type: 'warn',
      });
    }
  
    function error(strError) {
      return memo.unshift({
        message: strError,
        dateTime: new Date(),
        type: 'error',
      });
    }
  
    function log(strLog) {
      return memo.unshift({
        message: strLog,
        dateTime: new Date(),
        type: 'log',
      });
    }
  
    function getRecords(type) {
      if (type) {
        return memo.filter((el) => el.type === type);
      } else {
        return memo;
      }
    }
  
    return {
      warn,
      error,
      log,
      getRecords,
    };
  };
  
  const logger = createLogger();
  
  logger.log('User logged in');
  logger.warn('User try to restricted page');
  logger.error('Unexpected error on the site');
  logger.log('User logged out');
  
  console.log(logger.getRecords());
//   logger.getRecords('log');
//   logger.getRecords('error');
//   logger.getRecords('warn');
 
  