const allPets = [
  {
    "type": "dog",
    "gender": "female",
    "age": 10,
    "weight": 3,
    "name": "Vanilla"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 9,
    "weight": 1,
    "name": "Cherry"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 5,
    "name": "Flurry"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 1,
    "name": "Elsa"
  },
  {
    "type": "micropig",
    "gender": "female",
    "age": 4,
    "weight": 5,
    "name": "Xena"
  },
  {
    "type": "micropig",
    "gender": "female",
    "age": 2,
    "weight": 6,
    "name": "Shy"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 1,
    "weight": 2,
    "name": "Twinkie"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 2,
    "weight": 2,
    "name": "Butter"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 6,
    "name": "Silent"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 1,
    "weight": 3,
    "name": "Yoshie"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 8,
    "weight": 1,
    "name": "Sprout"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 5,
    "weight": 2,
    "name": "Boogie"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 2,
    "weight": 6,
    "name": "Ham"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 4,
    "name": "Brook"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 3,
    "weight": 1,
    "name": "Strike"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 4,
    "name": "Oatmeal"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 1,
    "name": "Elsa"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 9,
    "weight": 4,
    "name": "Boogie"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 3,
    "name": "Zelda"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 1,
    "weight": 5,
    "name": "Babs"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 2,
    "weight": 6,
    "name": "Miles"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 3,
    "name": "Vanilla"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 5,
    "weight": 2,
    "name": "Brook"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 3,
    "weight": 3,
    "name": "Boogie"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 4,
    "name": "Cuddles"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 9,
    "weight": 6,
    "name": "Cherry"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 6,
    "name": "Zelda"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 2,
    "name": "Vanilla"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 7,
    "weight": 2,
    "name": "Ivy"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 10,
    "weight": 2,
    "name": "Shy"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 8,
    "weight": 6,
    "name": "Trident"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 4,
    "weight": 2,
    "name": "Sprout"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 8,
    "weight": 4,
    "name": "Rocket"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 4,
    "weight": 3,
    "name": "Sprinkle"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 7,
    "weight": 2,
    "name": "Sprinkle"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 6,
    "weight": 4,
    "name": "Strike"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 8,
    "weight": 4,
    "name": "Teddy"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 10,
    "weight": 1,
    "name": "Strike"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 2,
    "weight": 3,
    "name": "Mickey"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 2,
    "weight": 5,
    "name": "Butter"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 9,
    "weight": 6,
    "name": "Brook"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 3,
    "weight": 4,
    "name": "Squirt"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 3,
    "weight": 6,
    "name": "Sequoia"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 3,
    "weight": 4,
    "name": "Hennessy"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 9,
    "weight": 5,
    "name": "Yoshie"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 7,
    "weight": 1,
    "name": "Yoshie"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 5,
    "weight": 3,
    "name": "Max"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 8,
    "weight": 3,
    "name": "Maia"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 10,
    "weight": 6,
    "name": "Kennedy"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 3,
    "weight": 2,
    "name": "Oatmeal"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 8,
    "weight": 5,
    "name": "Miles"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 5,
    "weight": 3,
    "name": "Teasle"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 3,
    "weight": 6,
    "name": "Mega"
  },
  {
    "type": "micropig",
    "gender": "female",
    "age": 1,
    "weight": 2,
    "name": "Oatmeal"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 10,
    "weight": 4,
    "name": "Elsa"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 1,
    "weight": 2,
    "name": "Oatmeal"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 8,
    "weight": 6,
    "name": "Mega"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 3,
    "weight": 2,
    "name": "Sprout"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 9,
    "weight": 1,
    "name": "Grim"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 4,
    "weight": 5,
    "name": "Rocket"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 5,
    "weight": 2,
    "name": "Strike"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 6,
    "weight": 2,
    "name": "Wrinkle"
  },
  {
    "type": "micropig",
    "gender": "female",
    "age": 10,
    "weight": 6,
    "name": "Esmeralda"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 4,
    "name": "Max"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 3,
    "weight": 6,
    "name": "Trident"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 6,
    "weight": 3,
    "name": "Yoshie"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 9,
    "weight": 6,
    "name": "Xena"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 2,
    "weight": 5,
    "name": "Cupid"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 7,
    "weight": 2,
    "name": "Spiral"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 8,
    "weight": 1,
    "name": "Shy"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 3,
    "name": "Butter"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 10,
    "weight": 4,
    "name": "Yoshie"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 9,
    "weight": 6,
    "name": "Rocket"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 4,
    "weight": 3,
    "name": "Sequoia"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 1,
    "name": "Electron"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 7,
    "weight": 3,
    "name": "Cupid"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 2,
    "weight": 1,
    "name": "Teddy"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 5,
    "weight": 4,
    "name": "Silent"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 6,
    "name": "Teasle"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 1,
    "weight": 2,
    "name": "Strike"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 4,
    "weight": 1,
    "name": "Ivy"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 6,
    "weight": 2,
    "name": "Hennessy"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 3,
    "name": "Yoshie"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 1,
    "weight": 1,
    "name": "Grim"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 10,
    "weight": 4,
    "name": "Dori"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 2,
    "name": "Cherry"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 9,
    "weight": 4,
    "name": "Spiral"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 1,
    "name": "Brook"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 5,
    "weight": 5,
    "name": "Silent"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 4,
    "weight": 1,
    "name": "Zelda"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 9,
    "weight": 2,
    "name": "Twinkie"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 3,
    "weight": 6,
    "name": "Radar"
  },
  {
    "type": "micropig",
    "gender": "female",
    "age": 6,
    "weight": 6,
    "name": "Oatmeal"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 5,
    "weight": 6,
    "name": "Xena"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 6,
    "weight": 3,
    "name": "Rocket"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 3,
    "weight": 2,
    "name": "Zelda"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 1,
    "weight": 1,
    "name": "Feta"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 6,
    "name": "Kennedy"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 10,
    "weight": 3,
    "name": "Sequoia"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 4,
    "weight": 3,
    "name": "Hennessy"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 10,
    "weight": 3,
    "name": "Squirt"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 6,
    "weight": 4,
    "name": "Hemingway"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 5,
    "weight": 5,
    "name": "Clue"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 5,
    "weight": 3,
    "name": "Miles"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 9,
    "weight": 6,
    "name": "Sprinkle"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 9,
    "weight": 1,
    "name": "Sprout"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 7,
    "weight": 2,
    "name": "Cuddles"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 2,
    "name": "Cupid"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 5,
    "name": "Radar"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 2,
    "name": "Trident"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 4,
    "name": "Teddy"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 10,
    "weight": 4,
    "name": "Radar"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 4,
    "weight": 3,
    "name": "Vanilla"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 3,
    "name": "Mega"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 6,
    "weight": 2,
    "name": "Lola"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 1,
    "weight": 3,
    "name": "Electron"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 5,
    "weight": 1,
    "name": "Cubby"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 7,
    "weight": 1,
    "name": "Oatmeal"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 8,
    "weight": 4,
    "name": "Mega"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 7,
    "weight": 4,
    "name": "Strike"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 3,
    "weight": 5,
    "name": "Max"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 8,
    "weight": 4,
    "name": "Cubby"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 9,
    "weight": 5,
    "name": "Trident"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 10,
    "weight": 5,
    "name": "Cubby"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 6,
    "weight": 1,
    "name": "Sprout"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 9,
    "weight": 2,
    "name": "Electron"
  },
  {
    "type": "micropig",
    "gender": "female",
    "age": 2,
    "weight": 3,
    "name": "Vanilla"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 6,
    "weight": 4,
    "name": "Napoleon"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 8,
    "weight": 5,
    "name": "Radar"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 2,
    "weight": 4,
    "name": "Fisher"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 6,
    "weight": 2,
    "name": "Zelda"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 1,
    "weight": 3,
    "name": "Spiral"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 9,
    "weight": 2,
    "name": "Kennedy"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 2,
    "weight": 2,
    "name": "Ham"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 2,
    "weight": 1,
    "name": "Radar"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 5,
    "name": "Spiral"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 2,
    "weight": 1,
    "name": "Boogie"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 6,
    "weight": 6,
    "name": "Shy"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 4,
    "weight": 6,
    "name": "Butter"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 6,
    "weight": 6,
    "name": "Lola"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 5,
    "weight": 5,
    "name": "Flurry"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 1,
    "name": "Rocket"
  },
  {
    "type": "dog",
    "gender": "male",
    "age": 3,
    "weight": 3,
    "name": "Sprinkle"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 3,
    "weight": 3,
    "name": "Wrinkle"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 7,
    "weight": 3,
    "name": "Flurry"
  },
  {
    "type": "cat",
    "gender": "male",
    "age": 2,
    "weight": 3,
    "name": "Mega"
  },
  {
    "type": "dog",
    "gender": "female",
    "age": 10,
    "weight": 5,
    "name": "Squirt"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 6,
    "weight": 6,
    "name": "Lola"
  },
  {
    "type": "cat",
    "gender": "female",
    "age": 5,
    "weight": 5,
    "name": "Squirt"
  },
  {
    "type": "micropig",
    "gender": "male",
    "age": 4,
    "weight": 6,
    "name": "Trident"
  }
];

module.exports = {
  getAll: () => allPets,
  getByType: (type) => allPets.filter(p => p.type === type),
  getBetweenAge: (from, to) => allPets.filter(p => p.age >= from && p.age <= to),
};
