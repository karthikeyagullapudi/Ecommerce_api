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

  const { categoryName, subCategory } = req.body;

  const findSubCategory = await subCategoryModel.findOne({
    subCategory: subCategory.trim(),
  });
  if (findSubCategory) {
    return handleError(null, res, "The subcategory already exists", 409);
  }

  const newSubCategory = await subCategoryModel.create({
    categoryName: categoryName.trim(),
    subCategory: subCategory.trim(),
  });
  return handleSucces(
    res,
    "New subcategory has been created",
    201,
    newSubCategory
  );
});

// Get subCategory by ID
const getSubCategory = asyncPromise(async (req, res) => {
  const param = req.params.id;
  const subCategories = await subCategoryModel.find({
    categoryName: param,
  });
  console.log("sub categories===", subCategories);
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

//get all subCategories
const getAllSubcategories = asyncPromise(async (req, res) => {
  const response = await subCategoryModel.find();
  if (!response.length) {
    return handleError(null, res, "No sub-categories found", 404);
  }
  return handleSucces(
    res,
    "sub-Categories fetched successfully",
    200,
    response
  );
});

export { createSubCategory, getSubCategory, getAllSubcategories };
