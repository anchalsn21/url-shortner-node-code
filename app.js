const express = require("express");
const app = express();
const appRoutes = require("./routes/url_shortner");
const cors = require("cors");
require("./database/db");
const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after a minute",
});

//  apply to all requests
app.use(limiter);

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use("/", appRoutes);

app.all("*", (err, req, res, next) => {
  if (err) {
    return res.send("Something went wrong");
  }
});
module.exports = app;
