// export const createLogger = () => {
//   const arrWarn = [];
//   function warn(stringWarn) {
//     arrWarn.push({
//         message: stringWarn,
//         dateTime: new Date(),
//         type: 'warn' });
//     return arrWarn;
//   }
//   const arrError = [];
//   function error(stringError) {
//     arrError.push({
//       message: stringError,
//       dateTime: new Date(),
//       type: 'error',
//     });
//     return arrError;
//   }
//   const arrLog = [];
//   function log(stringLog) {
//     arrLog.push({
//       message: stringLog,
//       dateTime: new Date(),
//       type: 'log',
//     });
//     return arrLog;
//   }
//   function getRecords(text) {
//     if (text === 'warn') {
//       const resWarn = [...arrWarn].sort((a, b) => b.dateTime - a.dateTime);
//       return resWarn;
//     }
//     if (text === 'error') {
//       const resError = [...arrError].sort((a, b) => b.dateTime - a.dateTime);
//       return resError;
//     }
//     if (text === 'log') {
//       const resLog = [...arrLog].sort((a, b) => b.dateTime - a.dateTime);
//       return resLog;
//     }
//     if (text === null) {
//       const arr = arrWarn.concat(arrError, arrLog);
//       const res = [...arr].sort((a, b) => b.dateTime - a.dateTime);
//       return res;
//     }
//     if (text !== 'warn' && text !== 'error' && text !== 'log') {
//       return [];
//     }
//   }
//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

// REFACTOR

const createLogger = () => {
  const messages = [];

  // i: string
  // o: undefined
  function warn(stringWarn) {
    messages.push({
      message: stringWarn,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function error(stringError) {
    messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(stringLog) {
    messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // i: string
  // o: array
  function getRecords(text) {

    return (text ? messages.filter((message) => message.type === text) : [...messages]).sort((a, b) => b.dateTime - a.dateTime);

  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();

logger1.error('Unexpected error on the site');
logger1.error('User logged in');
logger1.log('User logged out');

console.log(logger1.getRecords('error'));

