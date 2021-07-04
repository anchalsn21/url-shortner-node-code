const urlServices = require("../services/url.services");
const createUrl = async (req, res) => {
  try {
    let urlDto = req.body;
    let url = await urlServices.createUrl(urlDto);
    return res.status(200).json({ url });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

const getUrl = async (req, res) => {
  try {
    let { id } = req.params;
    console.log({ id, params: req.param });
    let url = await urlServices.getUrl(id);
    res.redirect(url.completeUrl);
  } catch (error) {
    console.log(error);
    return res.render("not_found");
  }
};

module.exports = { createUrl, getUrl };
