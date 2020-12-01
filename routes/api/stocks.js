const router = require("express").Router();
const stocksController = require("../../controllers/stockController")

// Matches with "/api/stock"
router.route("/")
  .get(stocksController.findAll)
  .post(stocksController.create);

// Matches with "/api/stock/:id"
router
  .route("/:id")
  .delete(stocksController.remove);

router
  .route("/search")
  .get(stocksController.findById)

module.exports = router;
