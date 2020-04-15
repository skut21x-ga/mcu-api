const Character = require("../models/mcu-model");
const CharacterData = require("./mcudata");

Character.deleteMany({}).then(() => {
  Character.collection
    .insert(CharacterData)
    .then((characters) => {
      console.log(characters);
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(0);
    });
});
