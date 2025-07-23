import express from "express";
import validateSubCategory from "../Validators/master.subcategory.validator.js";
import {
    createCartCollection,
    getCartCollection,
    getAllCartCollection,
} from "../Controllers/cartCollection.controller.js";

const router = express.Router();

router.post("/add-CartCollection", createCartCollection);
router.get("/get-CartCollection/:id", getCartCollection);
router.get("/get-all-CartCollection", getAllCartCollection);

export default router;
