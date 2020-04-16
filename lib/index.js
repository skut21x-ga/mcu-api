const bodyParser = require("body-parser");
const app = require("express")();

app.use(bodyParser.json());
app.use(require("./routes/mcu.js"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
