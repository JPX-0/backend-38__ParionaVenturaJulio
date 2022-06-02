import { infoLogger } from "../utils/config/logger.config.js";

const readAllRoutes = async (req, res, next) => {
  infoLogger.info({ route: req.url, method: `[${req.method}]` });
  next();
};

export default readAllRoutes;