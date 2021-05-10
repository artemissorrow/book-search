// models/Book.js

const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
})

module.exports = Book = mongoose.model('book', BookSchema)
