import express from "express";
import validateSubCategory from "../Validators/master.subcategory.validator.js";
import {
    createCartCollection,
    getCartCollection,
    getAllCartCollection,
    DeleteCartItems,
    RoleStatus,
} from "../Controllers/cartCollection.controller.js";

const router = express.Router();

router.post("/add-CartCollection", createCartCollection);
router.get("/get-CartCollection/:id", getCartCollection);
router.get("/get-all-CartCollection", getAllCartCollection);
router.delete("/delete-cart-item/:id", DeleteCartItems);
router.delete("/Status-cart-item/:id", RoleStatus);

export default router;
