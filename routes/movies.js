const router = require("express").Router();
const {
  validateFields,
  validateYearType,
} = require("../validators/movies.validator");
const moviesController = require("../controllers/moviesController");

router.get(
  "/",
  validateFields(["year"]),
  validateYearType(),
  moviesController.getMovies
);

module.exports = router;
