import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { 
  loginApi, 
  registerApi, 
  serializeApi, 
  deserializeApi 
} from "../api/passport.api.js";

// Passport Local Strategy
passport.use("login", new LocalStrategy(loginApi));
passport.use("register", new LocalStrategy({ passReqToCallback: true }, registerApi));

// Serializacion:
passport.serializeUser(serializeApi)

// Deserializacion:
passport.deserializeUser(deserializeApi)

export default passport;