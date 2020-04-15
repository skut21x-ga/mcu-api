const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const mcuSchema = new Schema({
  category: String,
  real_name: String,
  alias: String,
  title: String,
  affiliation: String,
  citizenship: String,
  date_of_birth: String,
  date_of_death: String,
  species: String,
  gender: String,
  status: String,
  clearance: String,
  comic: String,
  game: String,
  movie: String,
  one_shot: String,
  portrayed_by: String,
  ser_no: String,
  tv_series: String,
  voiced_by: String,
  web_series: String,
});

const mcudb = mongoose.model("mcuModel", mcuSchema);

module.exports = mcudb;
