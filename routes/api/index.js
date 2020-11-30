const router = require("express").Router();
const stockRoutes = require("./stocks");

// stock routes
router.use("/stock", stockRoutes);

module.exports = router;
