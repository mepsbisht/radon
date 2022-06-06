const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/getBooksInYear", BookController.getBookByYear  )

router.get("/getParticularBooks", BookController.particularBook)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getXINRBooks", BookController.bookByPrice)

router.get("/getRandomBooks", BookController.randomBook)


module.exports = router;