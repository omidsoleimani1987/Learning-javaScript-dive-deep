// it used for readonly properties which need extra validations

// the difference in these methods is the way of naming the property

// first way : define the property first and important to assign something to it

const person1 = {
  myProperty: '',
  set setter(myValue) {
    if (myValue !== '') {
      this.myProperty = myValue;
    } else {
      this.myProperty = 'default';
    }
  },

  get getter() {
    return this.myProperty.toUpperCase();
  }
};

// define - activate setter :
person1.setter = 'omid';

// access - activate getter :
console.log(person1.getter); // OMID

person1.setter = '';
console.log(person1.getter); // DEFAULT

// when we define getter, we have to define setter too

/*********************************************************************************************/

// second way : without define the property - we have to use underscore for naming the property

const person2 = {
  set setter(myValue) {
    if (myValue !== '') {
      this._myProperty = myValue;
    } else {
      this._myProperty = 'default';
    }
  },

  get getter() {
    return this._myProperty.toUpperCase();
  }
};

// define - activate setter :
person2.setter = 'omid';

// access - activate getter :
console.log(person2.getter); // OMID

person2.setter = '';
console.log(person2.getter); // DEFAULT

/*********************************************************************************************/

// good practice : naming all the same

const person3 = {
  set name(myValue) {
    if (myValue !== '') {
      this._name = myValue;
    } else {
      this._name = 'default';
    }
  },

  get name() {
    return this._name.toUpperCase();
  }
};

// define - activate setter :
person3.name = 'omid';

// access - activate getter :
console.log(person3.name); // OMID

person3.name = '';
console.log(person3.name); // DEFAULT
