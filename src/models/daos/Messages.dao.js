import { errorLogger } from '../../utils/config/logger.config.js';
import MongoDBContainer from '../containers/Mongodb.container.js';
import MessageSchema from '../schemas/Message.schema.js';

const collection = 'Message';

class MessagesDao extends MongoDBContainer {
  static instance;
  constructor() {
    super(collection, MessageSchema);
    if (!MessagesDao.instance) {
      MessagesDao.instance = this;
      return this;
    }
    else {
      return MessagesDao.instance; 
    }
  }

  async getAllMessages(filter = {}) {
    try{
      const documents = await this.model.find(filter, { __v: 0 }).populate("author");
      return documents;
    }
    catch(error) {
      const newError = formatErrorObject(INTERNAL_ERROR.tag, error.message);
      errorLogger.Error(JSON.stringify(newError));
      throw new Error(JSON.stringify(newError));
    }
  }

  async addMessage(id) {
    try {
      const document = await this.model.updateOne(id, { __v: 0 }).lean();
      if (!document) {
        const errorMessage = `Resource with id ${id} does not exist in our records`;
        const newError = formatErrorObject(NOT_FOUND.tag, errorMessage);
        errorLogger.Error(JSON.stringify(newError));
        throw new Error(JSON.stringify(newError));
      } else return document;
    }
    catch(error) {
      const newError = formatErrorObject(INTERNAL_ERROR.tag, error.message);
      errorLogger.Error(JSON.stringify(newError));
      throw new Error(JSON.stringify(newError));
    }
  }

  async createMessage(resourceItem) {
    try {
      const newItem = new this.model(resourceItem);
      await newItem.save();
      return newItem._id;
    }
    catch (err) {
      const newError = formatErrorObject(INTERNAL_ERROR.tag, err.message);
      errorLogger.Error(JSON.stringify(newError));
      throw new Error(JSON.stringify(newError));
    }
  }
};

export default MessagesDao;