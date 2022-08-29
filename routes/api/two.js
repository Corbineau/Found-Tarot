const router = require("express").Router();
const Controller = require("../../../thisapp/controllers");

router
  .route("/")
  .get(Controller.Two.findAll)
  .post(Controller.Two.create);

router
  .route("/:id")
  .get(Controller.Two.findById);
  

module.exports = router;