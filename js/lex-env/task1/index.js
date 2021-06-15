/* eslint-disable */

/*
    globalLexEnv = {
        environmentRecord: {
            messege: 'Test',
            weigth: 50,
            ...        }
        }
        outerLexEnv: ...
    }

    createMessengerLexEnv = {
        environmentRecord: {
            messege: 'Just learn it',
            sender = 'Gromcode',
            ...
            setMessage: func(),

            ...        }
        },
        outerLexEnv: globalLexEnv
    }

    runLexEnv = {
         environmentRecord:{
             ...
         }
         outerLexEnv: globalLexEnv
    }

     forLexEnv = {
         environmentRecord:{
            index = 0;
            message: 'hello'
         }
         outerLexEnv: globalLexEnv
    }
*/

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

for(let index = 0; index < 5; index += 1) {
    let message = 'hello';
    console.log(message);
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();

messanger.sendMessage('Nazik');

run();
