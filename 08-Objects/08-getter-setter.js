// it used for readonly properties which need extra validations

const person = {
  set name(myValue) {
    if (myValue !== '') {
      this._name = myValue;
      // under score it's necessary because this is a private property
    } else {
      this._name = 'default';
    }
  },

  get name() {
    return this._name.toUpperCase();
  }
};

// define - activate setter :
person.name = 'omid';

// access - activate getter :
console.log(person.name); // OMID

person.name = '';
console.log(person.name); // DEFAULT

// when we define getter, we have to define setter too
