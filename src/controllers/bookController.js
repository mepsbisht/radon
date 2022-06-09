const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async function (req, res) {
  let book = req.body;

  if (book.author) {
    let authorCount = await authorModel.find({ _id: book.author }).count();

    if (authorCount <= 0) {
      res.send("author is not present");
    }

    if (book.publisher) {
      let publisherCount = await publisherModel
        .find({ _id: book.publisher })
        .count();

      if (publisherCount <= 0) {
        res.send("publisher is not present");
      } else {
        let bookCreated = await bookModel.create(book);
        let bookPop = await bookCreated.populate(["author", "publisher"]);
        res.send(bookPop);
      }
    } else {
      res.send("publisherId is required.");
    }
  } else {
    res.send("author is required");
  }
};

const getBooksData = async function (req, res) {
  // let book=req.body
  let bookPop = await bookModel.find().populate(["author", "publisher"]);
  res.send({ data: bookPop });
};

const updateHardCover = async function (req, res) {
  let savedData = await bookModel.updateMany(
    {
      $or: [
        { publisher: "62a1e76b22ab5727061779d0" },
        { publisher: "62a1e78322ab5727061779d2" },
      ],
    },
    { $set: { isHardCover: true } }
  );

  res.send({ data: savedData });
};

const updatePrice = async function (req, res) {
  let updatePrice = await bookModel.updateMany(
    {
      "author.rating": { $gt: 3.5 },
    },
    { $set: { $inc: { price: 10 } } }
  );

  res.send({ data: updatePrice });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.updateHardCover = updateHardCover;
module.exports.updatePrice = updatePrice;
