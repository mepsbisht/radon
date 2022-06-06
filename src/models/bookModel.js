const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    authorName:String,
    totalPages:Number,
    available:Boolean,
    prices: {
      indianPrice: String,
      europePrice: String,
    },
    year: {
      type: Number,
      default: 2021,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //users


