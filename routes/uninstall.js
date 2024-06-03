const express = require("express");
const checkoutScripts = require("../content/checkoutScripts");

const router = express.Router();
const BigCommerce = require("node-bigcommerce");

require('dotenv').config()

const bigCommerce = new BigCommerce({
  secret: process.env.SECRET,
  responseType: "json",
});

router.get("/", (req, res) => {
  try {
    const data = bigCommerce.verify(req.query["signed_payload"]);
    console.log("App Uninstalled");
    checkoutScripts.deleteScript()
    res.send({message: "uninstall successfull"});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
