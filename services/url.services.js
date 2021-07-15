const Urls = require("../models/url.model");
const { nanoid } = require("nanoid");
const { baseUrl } = require("../utility/config");
var validUrl = require("valid-url");

/**
 *
 * @param {*} urlDto
 * @returns
 */
const createUrl = async (urlDto) => {
  try {
    let condition = { actualUrl: urlDto.url };
    if (!validUrl.isUri(urlDTo.url)) {
      throw new Error("Not a valid url");
    }
    const exist = await Urls.findOne(condition);
    if (exist) return exist;
    let urlKey = nanoid(12);
    let shortUrl = `${baseUrl}${urlKey}`;
    let saveObject = {
      shortUrl: shortUrl,
      completeUrl: urlDto.url,
      key: urlKey,
    };

    let url = await new Urls(saveObject);
    await url.save();
    return url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

/**
 *
 * @param {*} urlKey
 * @returns
 */

const getUrl = async (urlKey) => {
  try {
    console.log({ urlKey });
    let url = await Urls.findOne({ key: urlKey });
    if (!url) throw new Error("No url found");
    return url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = { createUrl, getUrl };
