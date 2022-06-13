const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const placeOrder = async function (req, res) {
  let data = req.body;
  let id = data.userId;
  let pid = data.productId;

  let userExist = await userModel.findOne({ _id: id });

  if (!userExist) {
    res.send({ msg: "userId is not valid" });
    return;
  }

  let productExist = await productModel.findOne({ _id: pid });

  if (!productExist) {
    res.send({ msg: "productId is not valid" });
    return;
  }

  if (req.body.isfreeappuser == "true") {
    req.body.amount = 0;
    req.body.isFreeAppUser = true;
  } else {
    req.body.amount = productExist.price;
    req.body.isFreeAppUser = false;

    let test = await userModel.updateOne({_id: data.userId}, {$inc: {balance: productExist.price * -1}});
  }

  let savedData = await orderModel.create(req.body);
  res.send({ data: savedData });
};

module.exports.placeOrder = placeOrder;
