const router = require("express").Router();
const stockRoutes = require("./stocks");

// stock routes
router.use("/stocks", stockRoutes);

module.exports = router;
