require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  MONGODB_SECRET: process.env.MONGODB_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
};
