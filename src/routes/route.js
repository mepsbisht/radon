const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const headerMiddleware = require("../middlewares/headerValidation");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createProduct", productController.createProduct);

router.post("/createUser", headerMiddleware.mid1, UserController.createUser);

router.post(
  "/placedOrder",
  headerMiddleware.mid1,
  orderController.placeOrder
);


module.exports = router;
