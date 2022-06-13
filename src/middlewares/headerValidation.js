const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const mid1 = function (req, res, next) {
  if (req.headers.isfreeappuser) {
    req.body.isfreeappuser = req.headers.isfreeappuser;
    next();
  } else {
    res.send({ msg: "Request is missing a mandatory header" });
  }
};

module.exports.mid1 = mid1;
