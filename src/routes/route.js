const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController");

router.post("/createBook", BookController.createBook);
router.post("/createAuthor", BookController.createAuthor);
router.get("/bookList", BookController.bookList);
router.get("/priceUpdate", BookController.priceUpdate);
router.get("/bookFind", BookController.bookFind);
router.get("/books/:authorId" ,BookController.bookByAuthorId);
router.get("/oldAuthor" ,BookController.oldAuthor);

module.exports = router;
