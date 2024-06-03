const express = require("express"),
  router = express.Router(),
  BigCommerce = require("node-bigcommerce");

const context = require("../context");
const checkScripts = require("../content/checkoutScripts");

require("dotenv").config();

const bigCommerce = new BigCommerce({
  clientId: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  callback: process.env.CALLBACK,
  responseType: "json",
});


router.get("/", (req, res) => {
  bigCommerce
    .authorize(req.query)
    .then((data) => {
        console.log(data);
        res.send({ message: "authorised", data: data });

        //add properties to data object
        let firebaseData = {};
        firebaseData.accessToken = data.access_token;
        firebaseData.storeHash = data.context.split('/')[1];
        context.set('token',data.access_token);
        context.set('store_hash',data.context.split('/')[1]);
        context.set('channel_id',1440319)
        checkScripts.createScript(firebaseData);
        console.log("App Installed")
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = router;
