const router = require("express").Router();
const Controller = require("../../../Found-Tarot/controllers");

router
  .route("/")
  .get(Controller.Two.findAll)
  .post(Controller.Two.create);

router
  .route("/:id")
  .get(Controller.Two.findByName);
  

module.exports = router;