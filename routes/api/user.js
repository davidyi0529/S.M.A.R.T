const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router
  .route("/")
  .post(userController.create)
  .put(userController.update)

router
  .route("/login")
  .post(passport.authenticate('local'))

router
  .route("/all")
  .get(userController.findAll)


module.exports = router;