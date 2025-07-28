import CartCollection from "../Models/cartCollection.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
// import { validationResult } from "express-validator";

// Create CartCollection
const createCartCollection = asyncPromise(async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //     return handleError(errors.array(), res, "Validation failed", 400);
  // }

  const newCartCollection = await CartCollection.create(req.body);

  return handleSucces(
    res,
    "New newCartCollection has been created",
    201,
    newCartCollection
  );
});

// Get CartCollection by ID
const getCartCollection = asyncPromise(async (req, res) => {
  const param = req.params.id;
  const CartCollection = await CartCollection.find({
    categoryId: param,
  });

  if (!CartCollection.length) {
    return handleError(null, res, "No subcategories found", 404);
  }
  return handleSucces(
    res,
    "Subcategories fetched successfully",
    200,
    CartCollection
  );
});

//get all CartCollection
const getAllCartCollection = asyncPromise(async (req, res) => {
  const response = await CartCollection.find();
  if (!response.length) {
    return handleError(null, res, "No CartCollection found", 404);
  }
  return handleSucces(
    res,
    "CartCollection fetched successfully",
    200,
    response
  );
});

export { createCartCollection, getCartCollection, getAllCartCollection };
