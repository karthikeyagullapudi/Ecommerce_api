import express from "express";
import validateSubCategory from "../Validators/master.subcategory.validator.js";
import {
  createSubCategory,
  getAllSubCategories,
} from "../Controllers/master.subCategory.controller.js";

const router = express.Router();

router.post("/add-subcategory", validateSubCategory, createSubCategory);
router.get("/all-subcategories/:id", getAllSubCategories);

export default router;
