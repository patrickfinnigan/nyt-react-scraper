const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchEntry = new Schema({
  search: [
    {
      topic: String,
      startDate: String,
      endDate: String
    }
  ]
}, {
    collection: 'search'
});

// Define your schemas here!
