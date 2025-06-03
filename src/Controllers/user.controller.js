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
    const addNewProduct = await usersSchema.create(req.body);
    return handleSucces(res, "product add successfully", 201, addNewProduct);
});
export default addProduct;
