// Code Challenges: Intermediate JavaScript - dogFactory()

// TODO: Write a function, dogFactory(). It should: have three parameters: name, breed, and weight; expect name and breed to be strings, expect weight to be a number; return an object. Have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in.

// Using a factory function with getters and setters to return an object. 


const dogFactory = (name, breed, weight) => {
    return {
    _name: name,
    _breed: breed, 
    _weight: weight,
    // Adding getters for each of the three properties
    get name () {
      return this._name;
    },
    get breed () {
      return this._breed;
    },
    get weight () {
    return this._weight;
    },
    // Adding setters for each of the three properties
    set name (newName) {
      this._name = newName;
    },
    set breed (newBreed) {
      this._breed = newBreed;
    },
    set weight (newWeight) {
      this._weight = newWeight;
    },
    // Adding a method to the oject: .bark() which returns ‘ruff! ruff!’ 
    bark() {
    return 'ruff! ruff!'
    }, 
    // Adding a method to the oject: .eatTooManyTreats() which should increment the weight property by 1.
    eatTooManyTreats() {
      this._weight ++;
    }
    } 
  };

// Passing in name, breed, weight arguments to the dogFactory function
console.log(dogFactory('Caesar', 'Bulldog', 73));