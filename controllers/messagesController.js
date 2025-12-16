//logic needed to create:

/* app.get("/", (req, res) => {
  res.render("index", { messages: messages });
  console.log('index render working');
});

app.get("/new", (req, res) => {
  res.render("new");
  console.log('new render working');
});
app.post("/new", (req, res) => {
  const formData = req.body; // The parsed JSON data is in req.body
  console.log('Received form data:', formData);
  messages.push({ text: formData.text, user: formData.user, added: new Date(), id: (messages.length + 1) });
  res.status(200).json({ message: 'Form data received successfully!', data: formData });
});

app.get("/open/:messageId", (req, res) => {
  const { messageId } = req.params;
  console.log(messageId);
  res.render('openmessage', {message: messages[messageId - 1]});
});

app.get("/{*splat}", (req, res) => {
  res.redirect("/");
}); */