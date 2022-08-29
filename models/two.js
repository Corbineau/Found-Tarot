const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const twoSchema = new Schema({
  id: { type: Schema.Types.ObjectId, required: false },
  name: {type: String, required: true},
  date: { type: Date, default: Date.now, required: true }
});

const two = mongoose.model("two", twoSchema);

module.exports = two;
