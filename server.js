const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/inventory", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
  console.log("Mongoose default connection error: ", err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/products", (req, res) => {
  db.Product.find({})
    .then((allStores) => {
      res.json(allStores);
    })
    .catch((err) => {
      res.json(err);
    });
});

// app.post("/api/ingredients", (req, res) => {
//   Ingredient.create(req.body)
//     .then((createdIngredient) => {
//       res.json(createdIngredient);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500);
//       res.json(err);
//     });
// });

// app.post("/api/recipes", (req, res) => {
//   Recipe.create(req.body)
//     .then((createdRecipe) => {
//       res.json(createdRecipe);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500);
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
