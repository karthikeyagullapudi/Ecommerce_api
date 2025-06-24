import categoryModel from "../Models/master.category.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// Create category
const createCategory = asyncPromise(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(errors.array(), res, "Validation failed", 422);
  }

  const { category } = req.body;
  const categoryName = category.trim().toLowerCase();

  const findCategory = await categoryModel.findOne({
    category: { $regex: `^${categoryName}$`, $options: "i" },
  });

  if (findCategory) {
    return handleError(null, res, "The category already exists", 409);
  }

  const newCategory = await categoryModel.create({ category: categoryName });
  return handleSucces(res, "New category has been created", 201, newCategory);
});

<<<<<<< HEAD
=======
// Get all categories
const getAllCategories = asyncPromise(async (req, res) => {
  const categories = await categoryModel.find();
  if (!categories.length) {
    return handleError(null, res, "No categories found", 404);
  }
  return handleSucces(res, "Categories fetched successfully", 200, categories);
});

>>>>>>> 1e4bca551a5d3f73d2bc874d3c53f9c76b8992b8
export { createCategory, getAllCategories };
