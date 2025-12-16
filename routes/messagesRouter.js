const { Router } = require("express");
const messagesController = require("../controllers/messagesController.js");
const messagesRouter = Router();


messagesRouter.get("/", messagesController.getMessages);
messagesRouter.get("/new", messagesController.newMessageGet);
messagesRouter.post("/new", messagesController.newMessagePost);
messagesRouter.get("/open/:messageId", messagesController.openMessage);
messagesRouter.get("/delete/:messageId", messagesController.deleteMessage);
messagesRouter.get("/{*splat}", (req, res) => res.redirect("/"));

module.exports = messagesRouter;