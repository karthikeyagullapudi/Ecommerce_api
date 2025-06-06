import subCategoryModel from "../Models/master.subCategory.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// Create subcategory
const createSubCategory = asyncPromise(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(errors.array(), res, "Validation failed", 422);
  }

  const { subCategory } = req.body;

  const findSubCategory = await subCategoryModel.findOne({
    subCategory: subCategory.trim(),
  });
  if (findSubCategory) {
    return handleError(null, res, "The subcategory already exists", 409);
  }

  const newSubCategory = await subCategoryModel.create({
    subCategory: subCategory.trim(),
  });
  return handleSucces(
    res,
    "New subcategory has been created",
    201,
    newSubCategory
  );
});

// Get all subcategories
const getAllSubCategories = asyncPromise(async (req, res) => {
  const subCategories = await subCategoryModel.find().sort({ subCategory: 1 });
  if (!subCategories.length) {
    return handleError(null, res, "No subcategories found", 404);
  }
  return handleSucces(
    res,
    "Subcategories fetched successfully",
    200,
    subCategories
  );
});

export { createSubCategory, getAllSubCategories };
