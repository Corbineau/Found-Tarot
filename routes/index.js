const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const RateLimit = require('express-rate-limit');

// API Routes
router.use("/api", apiRoutes);

// set up rate limiter: maximum of five requests per minute
const limiter = RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 20
});

// apply rate limiter to all requests
router.use(limiter);

// If no API routes are hit, send the React app
router.get('/:path', function(req, res) {
  let path = req.params.path;
  if (isValidPath(path))
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});



module.exports = router;
