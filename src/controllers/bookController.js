const { count } = require("console");
const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  let allBooks = await BookModel.find({
    authorName: "pratham",
    bookName: "superman",
  });
  res.send({ msg: allBooks });
};

const getBookByYear = async function (req, res) {
  let allBooks = await BookModel.find({ year: 1000 });
  res.send({ msg: allBooks });
};

const particularBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.find(data);
  res.send({ msg: savedData });
};

const bookByPrice = async function (req, res) {
  let allBooks = await BookModel.find({
    $or: [{ "prices.indianPrice": { $in: [100, 200, 500] } }],
  });
  res.send({ msg: allBooks });
};

const randomBook = async function (req, res) {
  let allBooks = await BookModel.find({ totalPages: { $gt: 500 } });
  res.send({ msg: allBooks });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBookByYear = getBookByYear;
module.exports.particularBook = particularBook;
module.exports.bookByPrice = bookByPrice;
module.exports.randomBook = randomBook;
