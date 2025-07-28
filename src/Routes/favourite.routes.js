import express from "express";
import {
  addToFavorites,
  removeFromFavorites,
  getFavoritesByUser,
  getAllFavorites,
} from "../Controllers/favourite.controller.js";

const router = express.Router();

router.post("/add-Favorite", addToFavorites);
router.post("/remove-Favorite", removeFromFavorites);
router.get("/get-Favorite/:userId", getFavoritesByUser);
router.get("/get-All-Favorites", getAllFavorites);

export default router;
