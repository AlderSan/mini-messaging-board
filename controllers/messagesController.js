const db = require("../db/queries");

// messagesController.getMessages
async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { messages: messages });
    console.log('index render working');
};

//messagesController.newMessageGet
async function newMessageGet(req, res){
    res.render("new");
    console.log('new render working');    
};

//messagesController.newMessagePost
async function newMessagePost(req, res){
  const formData = req.body; // The parsed JSON data is in req.body
  console.log('Received form data:', formData);
  await db.insertMessage(formData);
  res.status(200).json({ message: 'Form data received successfully!', data: formData });
};

//messagesController.openMessage
async function openMessage(req, res){
    const { messageId } = req.params;
    console.log(messageId);
    await db.getQueryMessage(messageId);
};

module.exports = {
    getMessages,
    newMessageGet,
    newMessagePost,
    openMessage
};