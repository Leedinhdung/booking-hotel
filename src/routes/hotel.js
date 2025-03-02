const express = require("express");
const routes = express.Router();

const hotelController = require("../app/controllers/HotelController");
// Home route
routes.get("/khach-san/:slug", hotelController.show);
routes.get("/", hotelController.index);



module.exports = routes;
