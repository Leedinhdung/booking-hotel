const homeRouter = require("./hotel");
function route(app) {
  app.use("/", homeRouter);
}

module.exports = route;
