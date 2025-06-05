import colorModel from "../Models/master.color.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// Create color
const createColor = asyncPromise(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(errors.array(), res, "Validation failed", 422);
  }

  const { color } = req.body;

  const findColor = await colorModel.findOne({ color: color.trim() });
  if (findColor) {
    return handleError(null, res, "The color already exists", 409);
  }

  const newColor = await colorModel.create({ color: color.trim() });
  return handleSucces(res, "New color has been created", 201, newColor);
});

// Get all colors
const getAllColors = asyncPromise(async (req, res) => {
  const colors = await colorModel.find().sort({ color: 1 }); // Alphabetical order
  if (!colors.length) {
    return handleError(null, res, "No colors found", 404);
  }
  return handleSucces(res, "Colors fetched successfully", 200, colors);
});

export { createColor, getAllColors };
