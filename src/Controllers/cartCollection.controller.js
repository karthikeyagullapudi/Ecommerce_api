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
  const { productName, description, discountPrice } = req.body;
  const AlreadyInCart = await CartCollection.findOne({
    productName,
    description,
    discountPrice,
  });

  if (AlreadyInCart) {
    return handleError(
      new Error("Duplicate product"),
      res,
      "product already in cart",
      409
    );
  }

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

const RoleStatus = asyncPromise(async (req, res) => {
  const { id } = req.params;
  const Role_status = await roleModel.findOne({ _id: id });
  if (!Role_status) {
    handleError(res, "Role not found", 400, null);
  }
  const ChangeRole = await roleModel.findByIdAndUpdate(
    { _id: id },
    { status: 1 },
    { quantity },
    { price },
    { new: true }
  );
  return handleSucces(res, "Role status updated successfully", 201, ChangeRole);
});
const DeleteCartItems = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required." });
    }
    const result = await CartCollection.deleteOne({ _id: productId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found in cart." });
    }

    res.status(200).json({
      message: "The product is removed from the cart.",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete cart item.",
      error: error.message,
    });
  }
};

export {
  createCartCollection,
  getCartCollection,
  getAllCartCollection,
  RoleStatus,
  DeleteCartItems,
};
