const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const mcuSchema = new Schema({
  firstName: String,
  lastName: String,
});

const mcudb = mongoose.model("mcuModel", mcuSchema);

module.exports = mcudb;
