import usersSchema from "../Models/users.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

const addProduct = asyncPromise(async (req, res) => {
    const addProductErrors = validationResult(req);
    if (!addProductErrors.isEmpty()) {
        return handleError(
            addProductErrors.array(),
            res,
            "product not added",
            400
        );
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
const getAllProducts = asyncPromise(async (req, res) => {
    const allProducts = await usersSchema.find();
    return handleSucces(
        res,
        "all products fetched succesfully",
        200,
        allProducts
    );
});
export { addProduct, getAllProducts };
