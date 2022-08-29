const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oneSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: String,
  area: { type: String, default: true },
});

const one = mongoose.model("one", oneSchema);

module.exports = one;
