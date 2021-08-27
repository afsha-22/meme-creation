// require("dotenv").config();
// const models = require("./models");

const express = require("express");
const app = express();
const path = require("path");
const db = require("./clients/db");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("home");
});

db.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
