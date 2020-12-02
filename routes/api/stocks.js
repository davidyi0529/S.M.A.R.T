const router = require("express").Router();
const stocksController = require("../../controllers/stocksController")

// Matches with "/api/stock"
router.route("/")
  .get(stocksController.findAll)
  .post(stocksController.create);

// Matches with "/api/stock/:id"
router
  .route("/:id")
  .get(stocksController.findById)
  .put(stocksController.update)
  .delete(stocksController.remove);

module.exports = router;
