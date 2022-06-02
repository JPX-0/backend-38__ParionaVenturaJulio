import UsersDao from "../../models/daos/Users.dao.js";

const userDao = new UsersDao();

const serializeApi = (user, done) => {
  console.log("Inside serializer");
  done(null, user._id);
}

const deserializeApi = async (id, done) => {
  console.log("Inside deserializer");
  done(null, await userDao.getById(id));
}

export { serializeApi, deserializeApi }