const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController");

router.post("/createBook", BookController.createBook);
router.post("/createAuthor", BookController.createAuthor);
router.get("/books/:authorId" ,BookController.bookByAuthorId);
router.get("/oldAuthor" ,BookController.oldAuthor);

module.exports = router;
