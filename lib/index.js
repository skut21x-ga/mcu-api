const bodyParser = require("body-parser");
const app = require("express")();

app.use(bodyParser.json());
app.use(require("./routes/mcu.js"));

app.listen(3000, () => console.log("listening on port 3000 for requests"));
