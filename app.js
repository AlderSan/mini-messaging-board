const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT;


//enable public assets and EJS engine
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());

app.use("/", messagesRouter);


app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`Mini Messaging Board - listening on port ${PORT}!`);
});