const express = require("express");
const router = express.Router();
const checkoutScripts = require("../content/checkoutScripts")

require('dotenv').config()

const BigCommerce = require("node-bigcommerce");
const bigCommerce = new BigCommerce({
  secret: process.env.SECRET,
  responseType: "json",
});

router.get("/", (req, res, next) => {
  try {
    const data = bigCommerce.verify(req.query["signed_payload"]);
    checkoutScripts.checkScripts(data.store_hash);
    res.send({message: "welcome", data:data});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
