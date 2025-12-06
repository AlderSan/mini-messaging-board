const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const assetsPath = path.join(__dirname, "public");

//starting messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2
  },
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac blandit dolor. Maecenas sollicitudin malesuada leo. Nulla vel tellus enim. Maecenas pellentesque ante sem, eget.",
    user: "Alex",
    added: new Date(),
    id: 3
  }
];

//enable public assets and EJS engine
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index", { messages: messages });
  console.log('index render working');
});

app.get("/new", (req, res) => {
  res.render("new");
  console.log('new render working');
});

app.get("/open/:messageId", (req, res) => {
  const { messageId } = req.params;
  console.log(messageId);
  res.render('openmessage', {message: messages[messageId - 1]});
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