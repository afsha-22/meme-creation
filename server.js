require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./clients/db");
const exphbs = require("express-handlebars");
const app = express();
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const models = require("./models");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("homepage");
});

db.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
