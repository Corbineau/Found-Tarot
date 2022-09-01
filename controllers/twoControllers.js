const db = require("../models");


module.exports = {
  findAll: function (req, res) {
    console.log("searching... ");
    db.Two
      .find({})
      .sort({ date: -1 }) //find only the first 10
      .then(dbRev => {
        res.json(dbRev)
      })
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    console.log(`searching for Two... ${req.params.name}`);
    db.Two
      .find(
        { name: req.params.name}
      )
      .sort({ date: -1 }) //this one should find all the Two associated with a particular one
      .then(dbOne => {
        res.json(dbOne)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(`adding... ${req.body}`);
    db.Two
      .create(req.body)
      .then(dbTwo => {res.json(dbTwo)})
      .catch(err => res.status(422).json(err));
  }
};