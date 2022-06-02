import MongoDBContainer from '../containers/Mongodb.container.js';
import UserSchema from '../schemas/User.schema.js';
import STATUS from '../../utils/constants/api.constants.js';
import formatResponse from '../../../../Clase 36 - tercera entrega 2.0/utils/formatter/send.format.js';

class UsersDao extends MongoDBContainer {
  static instance;
  constructor() {
    if (!UsersDao.instance) {
      super("User", UserSchema);
      UsersDao.instance = this;
      return this;
    }
    else return UsersDao.instance;
  }

  async createUser(userItem) {
    try {
      const user = new this.model(userItem);
      await user.save();
      return user;
    }
    catch(error) {
      throw new Error(error);
    }
  };

  async getByUserEmail(email) {
    try {
      const document = await this.model.findOne({ email }, { __v: 0 });
      if (!document) {
        const message = `Wrong username or password`;
        throw new Error(JSON.stringify(formatResponse(true, STATUS.NOT_FOUND, message)));
      } else return document;
    }
    catch(error) {
      throw new Error(JSON.stringify(formatResponse(true, STATUS.INTERNAL_ERROR, error.message)));
    }
  }
};

export default UsersDao;