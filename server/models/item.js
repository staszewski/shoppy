const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String
});

module.exports = mongoose.model('Item', itemSchema);