const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const cityRoute = require("./routes/city_route");
const swaggerDocument = YAML.load("./docs/swagger.yaml");

// Initialize app
const app = express();

app.use(express.json({ limit: "20mb" }));

// Redirect to docs on get request to root
app.get("/", (req, res) => {
  res.redirect("/docs/v1");
});

app.use("/docs/v1", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", cityRoute);

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;
