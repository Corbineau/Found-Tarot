const db = require("../models")

module.exports = {
    findAll: function(req, res) {
      console.log("searching...");
      db.Collection
        .find({})
        .sort({ name: -1 })
        .then(dbColl => {res.json(dbColl)
        })
        .catch(err => res.status(422).json(err));
    },
    findByName: function(req, res) {
      db.Collection
        .find({
          name: req.params.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Collection
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Collection
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Collection
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };