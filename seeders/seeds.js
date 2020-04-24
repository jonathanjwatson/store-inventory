let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/inventory", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const productSeed = [
  {
    name: "iPad",
    price: 299.99,
    category: "Computers",
    quantity: 10,
  },
  {
    name: "iPhone",
    price: 399.99,
    category: "Computers",
    quantity: 100,
  },
  {
    name: "MacBook Pro",
    price: 1299.99,
    category: "Computers",
    quantity: 5,
  },
];

db.Product.deleteMany({}).then(() => {
  db.Product.collection
    .insertMany(productSeed)
    .then((data) => {
      console.log(data);
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
});
