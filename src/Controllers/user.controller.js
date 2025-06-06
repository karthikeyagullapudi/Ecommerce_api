import usersSchema from "../Models/users.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// *** add product *** //
const addProduct = asyncPromise(async (req, res) => {
  const addProductErrors = validationResult(req);
  console.log("add product validation", addProductErrors);
  if (!addProductErrors.isEmpty()) {
    return handleError(addProductErrors.array(), res, "product not added", 400);
  }
  const { category, brand, productName } = req.body;
  const findProduct = await usersSchema.findOne({
    category,
    brand,
    productName,
  });
  if (findProduct) {
    return handleError(null, res, "product already exists", 409);
  }
  const addNewProduct = await usersSchema.create(req.body);
  return handleSucces(res, "product add successfully", 201, addNewProduct);
});

// *** get all products *** //
const getAllProducts = asyncPromise(async (req, res) => {
  const allProducts = await usersSchema.find();
  return handleSucces(
    res,
    "all products fetched succesfully",
    200,
    allProducts
  );
});

// *** get single product *** //
const getProduct = asyncPromise(async (req, res) => {
  const { id } = req.params;
  const getSingleProduct = await usersSchema.findById(id);
  if (!getSingleProduct) {
    return handleError(null, res, "product not found", 404);
  }
  return handleSucces(
    res,
    "single product fetched successfully",
    200,
    getSingleProduct
  );
});

// *** update product *** //gi
const updateProduct = asyncPromise(async (req, res) => {
  const { id } = req.params;
  const getProduct = await usersSchema.findOne({ _id: id });
  if (!getProduct) {
    return handleError(null, res, "product not found", 404);
  }
  const updateProductData = await usersSchema.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true }
  );
  return handleSucces(
    res,
    "product updated successfully",
    200,
    updateProductData
  );
});
export { addProduct, getAllProducts, getProduct, updateProduct };
