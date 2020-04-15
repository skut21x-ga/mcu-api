const Character = require("../models/mcu-models");
const CharacterData = require("./mcudata");

Character.deleteMany({}).then(() => {
  Character.collection
    .insert(CharacterData)
    .then((characters) => {
      console.log(characters);
    })
    .catch((err) => {
      console.log(err);
    });
});
