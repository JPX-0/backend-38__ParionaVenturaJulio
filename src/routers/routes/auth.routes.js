import express from 'express';
import passport from "../../middlewares/passport.middleware.js";

const router = express.Router();

router.post('/login', passport.authenticate("login", { 
  failureRedirect: "/login-error",
  successRedirect: "/home"
}));
router.post('/register', passport.authenticate("register", { 
  failureRedirect: "/register-error",
  successRedirect: "/home"
}));

export default router;