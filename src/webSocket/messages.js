import MessagesDao from "../models/daos/Messages.dao.js";
import UsersDao from "../models/daos/Users.dao.js";
import { normalizedMessages } from "../models/normalizer/messages.js";
import { createFormat } from "../utils/formatter/time.format.js";

const messagesDao = new MessagesDao();
const usersDao = new UsersDao();

export default async function addMenssagesHandlers(socket, sockets) {
  sockets.emit("messages", normalizedMessages(await messagesDao.getAllMessages()));

  socket.on("newMessage", async message => {
    const user = await usersDao.getByUserEmail(message.email);
    const newMessage = {
      author: user._id,
      text: message.text
    };
    await messagesDao.createMessage(createFormat(newMessage));
    sockets.emit("messages", normalizedMessages(await messagesDao.getAllMessages()));
  });
};