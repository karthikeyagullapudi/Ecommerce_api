import express from "express";
import validateColor from "../Validators/master.color.validator.js";
import {
  createColor,
  getAllColors,
} from "../Controllers/master.color.controller.js";

const router = express.Router();

router.post("/add-color", validateColor, createColor);
router.get("/all-colors", getAllColors);

export default router;
