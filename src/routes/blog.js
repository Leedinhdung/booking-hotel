const express = require("express");
const routes = express.Router();

const blogController = require("../app/controllers/BlogController");
// Blog route
routes.get("/", blogController.index);

module.exports = routes;
