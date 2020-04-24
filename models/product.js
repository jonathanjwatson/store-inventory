const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
