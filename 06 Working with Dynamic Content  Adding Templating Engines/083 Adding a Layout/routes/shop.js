const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin.js");

const router = express.Router();


router.get("/", (req, res, next) => {
  const products = adminData.products;  
  res.render('shop',{prods: products, docTitle : 'Shop',path:'/shop',docTitle:'Shop Now'});
});

module.exports = router;
