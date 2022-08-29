const path = require("path");
const router = require("express").Router();
const oneRoutes = require("./one");
const twoRoutes = require("./two");

// Routes
router.use("/one", oneRoutes);
router.use("/two", twoRoutes);


module.exports = router;
