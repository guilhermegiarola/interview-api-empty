const express = require("express");
const app = express();
const port = 8080;

const moviesRoute = require("./routes/movies");
const invalidRoute = require("./routes/invalidRoutes");

app.use("/movies", moviesRoute);
app.use("*", invalidRoute);

app.listen(port, () => {
  console.log("Server is running.");
});
