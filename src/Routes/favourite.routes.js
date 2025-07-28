import express from "express";
import {
  addToFavorites,
  removeFromFavorites,
  getFavoritesByUser,
} from "../Controllers/favourite.controller.js";

const router = express.Router();

router.post("/add-Favorite", addToFavorites);
router.post("/remove-Favorite", removeFromFavorites);
router.get("/get-Favorite/:userId", getFavoritesByUser);

export default router;
