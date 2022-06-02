import "dotenv/config";

const {
  SESSION_SECRET,
  SESSION_NAME,
  DB_MAIL,
  DB_PASS,
  DB_NAME,
  ADMIN_MAIL,
  ADMIN_PASS,
  TWILIO_SID,
  TWILIO_TOKEN,
  TWILIO_PHONE,
  MODE_CLUSTER,
  PORT
} = process.env;

export default {
  SESSION_SECRET,
  SESSION_NAME,
  DB_MAIL,
  DB_PASS,
  DB_NAME,
  ADMIN_MAIL,
  ADMIN_PASS,
  ACCOUNT_SID: TWILIO_SID,
  AUTH_TOKEN: TWILIO_TOKEN,
  TWILIO_PHONE,
  MODE_CLUSTER: MODE_CLUSTER || undefined,
  PORT: PORT || 8080
};