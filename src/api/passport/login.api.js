import bcrypt from "bcrypt";
import UsersDao from "../../models/daos/Users.dao.js";

const userDao = new UsersDao();

const isValidPassowrd = async (user, password) => await bcrypt.compare(password, user.password);

const loginApi = async (userEmail, password, done) => {
  try {
    console.log({ userEmail, password });
    const user = await userDao.getByUserEmail(userEmail);
    console.log("user: ", user);
    if(!await isValidPassowrd(user, password)) return done(null, false);
    return done(null, user);
  }
  catch(error) { done(null, false); }
}

export default loginApi;