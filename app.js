const express = require("express");
const app = express();
const path = require("node:path");
/* const dotenv = require("dotenv").config(); */
/* const PORT = process.env.SERVERPORT; */
const PORT = 3000;
const assetsPath = path.join(__dirname, "public");

//enable public assets and EJS engine
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index");
  console.log('index render working');
});

app.get("/new", (req, res) => {
  res.render("new");
  console.log('new render working');
});

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`Mini Messaging Board - listening on port ${PORT}!`);
});