/**
 * One of the most common tasks as a software developer is to "transform" data
 * from one form to another.
 *
 * In this exercise, you're asked to transform data from the given shape to
 * a new shape.
 */

let inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

/*

We want a function that can transform it from that shape to this shape:

{
  "name": "Will Byers",
  "age": 9,
  "status": "upside down",
  "address": {
    "streetAddress": "123 Whatever street",
    "city": "Hawkins",
    "state": "Indiana",
    "country": "United States"
  },
  "superpowers": [
    "can-blink-lights"
  ],
  "relationships": [
    {
      "type": "mother",
      "name": "Joyce Byers",
      "age": 35,
      "status": "worried",
      "superpowers": []
    },
    {
      "type": "girlfriend",
      "name": "Eleven",
      "age": 9,
      "status": "angry",
      "superpowers": [
        "telepathy",
        "multiverse portal sealing"
      ]
    }
  ]
}

Specifically:

- Address becomes nested in an object
- Instead of `superpower1` and `superpower2`, an array is used
- Instead of having a "flat" structure for relationships, a new `relationships`
  array is added, which holds objects for each relationship.
- Each relationship has a `type`, like mother/best-friend/girlfriend
- Each relationship also has an array of super powers, same logic as the main
  `superpowers` array

NOTE: For superpowers, you should only have as many items as are available.
For example, the main superpowers array should be:
✅ ['can-blink-lights']
⛔️ ['can-blink-lights', null]
*/

function transformData(data) {
  let {
    name,
    age,
    status,
    address1,
    addressCity,
    addressState,
    addressCountry,
    superpower1,
    superpower2,
    motherName,
    motherAge,
    motherStatus,
    motherSuperpower1,
    motherSuperpower2,
    girlfriendName,
    girlfriendAge,
    girlfriendStatus,
    girlfriendSuperpower1,
    girlfriendSuperpower2,
  } = data;

  let outputData = {};

  outputData.name = name;
  outputData.age = age;
  outputData.status = status;

  outputData.address = {
    streetAddress: address1,
    city: addressCity,
    state: addressState,
    country: addressCountry,
  };

  outputData.superpowers = [];
  maybeAddSuperpowers(superpower1, superpower2, outputData.superpowers);

  outputData.relationships = [];

  outputData.relationships.push({
    type: "mother",
    name: motherName,
    age: motherAge,
    status: motherStatus,
    superpowers: [],
  });

  maybeAddSuperpowers(
    motherSuperpower1,
    motherSuperpower2,
    outputData.relationships[0].superpowers
  );

  outputData.relationships.push({
    type: "girlfriend",
    name: girlfriendName,
    age: girlfriendAge,
    status: girlfriendStatus,
    superpowers: [],
  });

  maybeAddSuperpowers(
    girlfriendSuperpower1,
    girlfriendSuperpower2,
    outputData.relationships[1].superpowers
  );

  return outputData;
}

function maybeAddSuperpowers(power1, power2, array) {
  if (power1) {
    array.push(power1);
  }
  if (power2) {
    array.push(power2);
  }
}

/*
  `JSON.stringify` is used to "pretty-print" the output, so that it's easy
  to see what it looks like, and debug any problems.
*/
console.log(JSON.stringify(transformData(inputData), null, 2));
