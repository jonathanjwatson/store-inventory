const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: {
    type: String
  },
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
