const express = require("express");
const favoritesController = require("../controllers/favorites");
const { authenticate } = require("../middleware");
const router = express.Router();


router.get("/", authenticate, favoritesController.getFavs);

router.post("/", authenticate, favoritesController.addFav);

router.delete(
  "/:favorites",
  authenticate,
  favoritesController.deleteFav
);


module.exports = router;