require("dotenv").config();

const config = {
  port: process.env.PORT,
  dbString: process.env.DB_STRING,
  baseUrl: process.env.BASE_URL,
};

module.exports = config;
