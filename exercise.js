//ES5
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

//ES2015
const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName
  });

//ES5
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

//ES2015
const instructor = {
  firstName: "Jerry",
  sayHi() {
    return "Hi!"
  },
  sayBye() {
    return this.firstName + " says bye!"
  }
}

//ES5 Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//ES2015
let favoriteNumber = 42;

const teacher = {
  firstName: "Jerry",
  [favoriteNumber]: "That is my favorite!"
};

const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
      return noise;
    }
  });
