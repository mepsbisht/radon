const { count } = require("console");
// const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let allBook = req.body;
  let savedBook = await bookModel.create(allBook);
  res.send({ msg: savedBook });
};

const createAuthor = async function (req, res) {
  let allAuthor = req.body;
  let savedAuthor = await AuthorModel.create(allAuthor);
  res.send({ msg: savedAuthor });
};

const bookByAuthorId = async function (req, res) {
  let result1 = await AuthorModel.find({ author_id: req.params.authorId });
  let arr = [];
  for (i = 0; i < result1.length; i++) {
    let bookName = await bookModel
      .find({
        author_id: result1[i].author_id,
      })
      .select({ name: 1, _id: 0 });
    arr.push(bookName);
  }
  res.send({ msg: arr });
};

const oldAuthor = async function (req, res) {
  let result1 = await AuthorModel.find({ age: { $gt: 50 } });
  // res.send(result1);
  let arr = [];
  for (i = 0; i < result1.length; i++) {
    let bookName = await bookModel
      .find({
        author_id: result1[i].author_id,
        ratings: { $gt: 4 },
      })
      // .select({ author_id: 1, _id: 0 });

    // console.log(bookName);
    if (bookName.length > 0) {
      for (k = 0; k < bookName.length; k++) {
        let authorData = await AuthorModel.find({
          author_id: bookName[i].author_id,
        }).select({ author_name: 1, age: 1, _id: 0 });

        arr.push(authorData);
      }
    }
  }
  res.send({ msg: arr });
};
module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;

module.exports.bookByAuthorId = bookByAuthorId;
module.exports.oldAuthor = oldAuthor;
