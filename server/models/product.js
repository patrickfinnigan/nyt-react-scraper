const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchEntry = new Schema(
  {
    _id: Schema.Types.ObjectId,
    web_url: String,
    title: String,
    snippet: String
  },
  {
    collection: "search"
  }
);


const search = mongoose.model("Search", searchEntry);

module.exports = search;