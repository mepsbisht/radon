const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    authorName: String,
    category: String,
    year: Number,
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model('BookDetail',bookSchema)
