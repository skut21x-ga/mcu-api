const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const mcuSchema = new Schema({
  firstName: String,
  lastName: String,
});

const mcudb = mongoose.model("MCU-DB", mcuSchema);

module.exports = mcudb;
