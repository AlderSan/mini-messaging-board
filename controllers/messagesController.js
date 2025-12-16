const db = require("../db/queries");

// messagesController.getMessages
async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { messages: messages });
};

//messagesController.newMessageGet
async function newMessageGet(req, res){
    res.render("new");   
};

//messagesController.newMessagePost
async function newMessagePost(req, res){
  const formData = req.body; // The parsed JSON data is in req.body
  await db.insertMessage(formData);
  res.status(200).json({ message: 'Form data received successfully!', data: formData });
};

//messagesController.openMessage
async function openMessage(req, res){
    const { messageId } = req.params;
    const message = await db.getQueryMessage(messageId);
    if (message === undefined) {
        res.redirect("/");
    } else {
    res.render("openmessage", {message: message});
    }
};

async function deleteMessage(req, res){
    const { messageId } = req.params;
    await db.dropMessage(messageId);
    res.redirect("/");
}

module.exports = {
    getMessages,
    newMessageGet,
    newMessagePost,
    openMessage,
    deleteMessage
};