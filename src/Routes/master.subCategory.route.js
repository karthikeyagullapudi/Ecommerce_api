import express from "express";
import validateSubCategory from "../Validators/master.subcategory.validator.js";
import {
  createSubCategory,
  getSubCategory,
  getAllSubcategories,
} from "../Controllers/master.subCategory.controller.js";

const router = express.Router();

router.post("/add-subcategory", validateSubCategory, createSubCategory);
router.get("/get-subcategory/:id", getSubCategory);
router.get("/get-all-subcategories", getAllSubcategories);

export default router;
