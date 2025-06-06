import brandModel from "../Models/master.brand.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// Create brand
const createBrand = asyncPromise(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(errors.array(), res, "Validation failed", 422);
  }

  const { brand } = req.body;

  const findBrand = await brandModel.findOne({ brand: brand.trim() });
  if (findBrand) {
    return handleError(null, res, "The brand already exists", 409);
  }

  const addNewBrand = await brandModel.create({ brand: brand.trim() });
  return handleSucces(res, "New brand has been created", 201, addNewBrand);
});

// Get all brands
const getAllBrands = asyncPromise(async (req, res) => {
  const brands = await brandModel.find().sort({ brand: 1 });
  if (!brands.length) {
    return handleError(null, res, "No brands found", 404);
  }
  return handleSucces(res, "Brands fetched successfully", 200, brands);
});

export { createBrand, getAllBrands };
