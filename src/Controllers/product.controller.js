import productSchema from "../Models/product.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// *** Add Product *** //
const addProduct = asyncPromise(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("Validation failed");
        error.details = errors.array();
        return handleError(error, res, "Product validation error", 400);
    }

    const { category, brand, productName } = req.body;
    const existingProduct = await productSchema.findOne({
        category,
        brand,
        productName,
    });

    if (existingProduct) {
        return handleError(
            new Error("Duplicate product"),
            res,
            "Product already exists",
            409
        );
    }

<<<<<<< HEAD
    const newProduct = await productSchema.create(req.body);
    return handleSucces(res, "Product added successfully", 201, newProduct);
=======
  const newProduct = await productSchema.create(req.body);
  console.log(req.body);
  return handleSucces(res, "Product added successfully", 201, newProduct);
>>>>>>> 4cd8ddc64d518ac88203ff606fa1fc6c231ff905
});

// *** Get All Products *** //
const getAllProducts = asyncPromise(async (req, res) => {
    const products = await productSchema.find({});

    if (!products || products.length === 0) {
        return handleError(
            new Error("No products found"),
            res,
            "No products available",
            404
        );
    }

    return handleSucces(
        res,
        "All products fetched successfully",
        200,
        products
    );
});

// *** Get Single Product by ID *** //
const getProduct = asyncPromise(async (req, res) => {
    const { id } = req.params;
    const product = await productSchema.findById(id);

    if (!product) {
        return handleError(
            new Error("Invalid product ID"),
            res,
            "Product not found",
            404
        );
    }

    return handleSucces(res, "Product fetched successfully", 200, product);
});

// *** Update Product by ID *** //
const updateProduct = asyncPromise(async (req, res) => {
    const { id } = req.params;
    const existingProduct = await productSchema.findById(id);

    if (!existingProduct) {
        return handleError(
            new Error("Product to update not found"),
            res,
            "Product not found",
            404
        );
    }

    const updatedProduct = await productSchema.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    return handleSucces(
        res,
        "Product updated successfully",
        200,
        updatedProduct
    );
});

export { addProduct, getAllProducts, getProduct, updateProduct };
