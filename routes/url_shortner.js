const express = require("express");
const router = express.Router();
const urlController = require("../controller/url.controller");

router.get("/", (req, res) => res.send("OK WORKING"));

/**
 *
 */
router.post("/create-short-url", urlController.createUrl);

/**
 *
 */
router.get("/:id", urlController.getUrl);

module.exports = router;
