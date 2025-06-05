import express from "express";
import validateSubsubCategory from "../Validators/master.subcategory.validator.js";
import {
  createSubCategory,
  getAllSubCategories,
} from "../Controllers/master.subCategory.controller.js";

const router = express.Router();

router.post("/add-subcategory", validateSubsubCategory, createSubCategory);
router.get("/all-subcategories", getAllSubCategories);

export default router;
