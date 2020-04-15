var mcuModel = require("../models/mcu-model");

module.exports = {
  index: (req, res) => {
    mcuModel.find({}).then((character) => {
      res.json(character);
    });
  },

  showName: (req, res) => {
    mcuModel.find({ real_name: req.params.real_name }).then((character) => {
      res.json(character);
    });
  },

  showCategory: (req, res) => {
    mcuModel.find({ category: req.params.category }).then((character) => {
      res.json(character);
    });
  },

  showSpecies: (req, res) => {
    mcuModel.find({ species: req.params.species }).then((character) => {
      res.json(character);
    });
  },

  showAffiliation: (req, res) => {
    mcuModel.find({ affiliation: req.params.affiliation }).then((character) => {
      res.json(character);
    });
  },

  create: (req, res) => {
    mcuModel
      .create(req.body)
      .then((reqBody) => {
        res.json(reqBody);
      })
      .catch((reqBody) => {
        res.json(reqBody);
      });
  },

  edit: (req, res) => {
    mcuModel
      .findOneAndUpdate({ name: req.params.real_name }, req.body)
      .then((character) => {
        res.json(character);
      });
  },

  delete: (req, res) => {
    mcuModel
      .findOneAndDelete({ name: req.params.real_name })
      .then((character) => {
        res.json(character);
      });
  },
};
