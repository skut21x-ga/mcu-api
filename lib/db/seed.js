const Character = require("../models/mcu-models");
const CharacterData = require("./mcudata");

const MCUDataSet = CharacterData.map((person) => {
  const character = {
    category: person.category,
    real_name: person.real_name,
    alias: person.alias,
    title: person.title,
    affiliation: person.affiliation,
    citizenship: person.citizenship,
    date_of_birth: person.date_of_birth,
    date_of_death: person.date_of_death,
    species: person.species,
    gender: person.gender,
    status: person.status,
    clearance: person.clearance,
    comic: person.comic,
    game: person.game,
    movie: person.movie,
    one_shot: person.one_shot,
    portrayed_by: person.portrayed_by,
    ser_no: person.ser_no,
    tv_series: person.tv_series,
    voiced_by: person.voiced_by,
    web_series: person.web_series,
  };
  return character;
});

Character.deleteMany({}).then(() => {
  Character.collection
    .insert(MCUDataSet)
    .then((characters) => {
      console.log(characters);
    })
    .catch((err) => {
      console.log(err);
    });
});
