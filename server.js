require("dotenv").config();

const express = require("express");
const db = require("./clients/db");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const models = require("./models");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

db.sequelize.sync().then(() => {
  app.listen(PORT);
});
