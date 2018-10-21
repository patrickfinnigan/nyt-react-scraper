// const mongoose = require('mongoose');
// const Product = require('../models/product');
const db = require("../models");

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {
  save: function(req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      web_url: req.body.web_url,
      snippet: req.body.snippet
    };
    console.log("article", article);
    db.search
      .create(article)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
