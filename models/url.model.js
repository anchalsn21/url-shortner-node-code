const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const urlSchema = new Schema(
  {
    shortUrl: String,
    completeUrl: String,
    key: { type: String, trim: true },
  },
  { timestamps: true }
);

const Urls = mongoose.model("urls", urlSchema);
module.exports = Urls;
