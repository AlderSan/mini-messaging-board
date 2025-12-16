const pool = require("./pool");

//getAllMessages
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

//insertMessage
async function insertMessage(message) {
  await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)", [message.text, message.user, new Date()]);
}

//getQueryMessage
async function getQueryMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [messageId]);
  return rows;
}

module.exports = {
  getAllMessages,
  getQueryMessage,
  insertMessage
};