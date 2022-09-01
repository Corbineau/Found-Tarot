const router = require("express").Router();
const Controller = require("../../../Found-Tarot/controllers");

router.route("/").get(Controller.One.findAll);

router
  .route("/:name")
  .get(Controller.One.findByName)
  .delete(Controller.One.remove);

module.exports = router;
