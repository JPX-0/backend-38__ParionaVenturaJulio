import bcrypt from "bcrypt";
import UsersDao from "../../models/daos/Users.dao.js";
import { createFormat } from "../../utils/formatter/time.format.js";

const userDao = new UsersDao();

const salt = async () => await bcrypt.genSalt(10);
const createHash = async (password) => await bcrypt.hash(password, await salt());

const registerApi = async (req, userEmail, password, done) => {
  try {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: userEmail,
      password: await createHash(password)
    }
    const user = await userDao.createUser(createFormat(newUser));
    return done(null, user);
  }
  catch (error) { done(null, false); }
}

export default registerApi;