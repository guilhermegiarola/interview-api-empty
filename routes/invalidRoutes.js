const router = require("express").Router();
const {
  invalidRouteValidator,
} = require("../validators/invalidRoute.validator");
const invalidRouteController = require("../controllers/invalidRoutesController");

router.get(
  "*",
  invalidRouteValidator(),
  invalidRouteController.getInvalidRoute
);

module.exports = router;
