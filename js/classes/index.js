/* eslint-disable max-classes-per-file, no-console */

// put your code here

class Sportsman {
  constructor(firstName) {
    console.log('before', this);

    this.firstName = firstName;

    console.log('after', this);
  }

  run() {
    setTimeout(() => {
      console.log(`${this.firstName} is running`);
    }, 3000);
  }

  swim() {
    console.log(`Hello`);
  }
}

class Swimmer extends Sportsman {
  constructor(firstName, swimStyle) {
    super(firstName);
    this.swimStyle = swimStyle;
    console.log(this);
  }

  swim() {
    console.log(`${this.firstName} is swimming`);
  }

}

// test data

const sportsman1 = new Sportsman('Bodya');
console.log(sportsman1);
sportsman1.run();

const sportsman2 = new Sportsman('Olya');
console.log(sportsman2);
sportsman2.run();

const swimmer1 = new Swimmer('Zhenya', 'bras');
const swimmer2 = new Swimmer('Orest', 'batterfly');
swimmer1.run();
swimmer2.run();
swimmer1.swim();
swimmer2.swim();

console.log(swimmer1);
console.log(swimmer2);