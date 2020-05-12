// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

// A) console.log() your object.
// B) console.log() a few of the values in the object.

let myObject = {
  name: {
    first: "Paul",
    last: "Bergeron",
  },
  age: "22",
  city: "Chateaubriand",
  siblings: 4,
  petName: "Gretchen",
  monthOfBirth: "July",
};

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

myObject.petType = "turtoiseshell";
myObject.shoeSize = 11;
myObject.isRude = false;

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  title: "Hot Fuzz",
  director: "Edgar Wright",
  year: 2007,
  rating: 100,
  actors: [
    "Simon Pegg",
    "Nick Frost",
    "Olivia Colman",
    "Timothy Dalton",
    "Rafe Spall",
    "Paddy Considine",
  ],
};

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
  name: "Alyssa P. Hacker",
  age: 26,
  hometown: "somewhere",
};

person.age; // => 26
person[key]; // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker",
  },
  age: 26,
};

function fullName({ name }) {
  let { first, middle, last } = name;

  return `${first} ${middle} ${last}`;
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"
console.log(fullName(myObject));

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: "Rick",
    last: "Sanchez",
  },
  age: 66,
};

function betterFullName({ name }) {
  let nameArray = Object.values(name);

  return nameArray.join(" ");
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
console.log(betterFullName(myObject));
