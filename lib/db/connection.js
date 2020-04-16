const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/book-e";
}

mongoose.connect("mongodb://localhost/mcu", { useNewUrlParser: true });

module.exports = mongoose;
