const express = require("express");
const favoritesController = require("../controllers/favorites");
// const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/", favoritesController.getFavs);

router.post("/", favoritesController.addFav);

router.delete("/:id", favoritesController.deleteFav);

module.exports = router;
