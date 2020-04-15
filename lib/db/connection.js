const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mcu", { useNewUrlParser: true });

module.exports = mongoose;
