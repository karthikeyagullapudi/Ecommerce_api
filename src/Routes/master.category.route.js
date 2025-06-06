import express from "express";
import validateCategory from "../Validators/master.category.validator.js";
import {
  createCategory,
  getAllCategories,
} from "../Controllers/master.category.controller.js";

const router = express.Router();

router.post("/add-category", validateCategory, createCategory);
router.get("/all-categories", getAllCategories);

export default router;
