import { Router } from "express";
import {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
} from "../Controllers/product.controller.js";
import userValidator from "../Validators/product.validators.js";

const user = Router();
user.route("/addproduct").post(userValidator, addProduct);
user.route("/getallproducts").get(getAllProducts);
user.route("/getsingleproduct/:id").get(getProduct);
user.route("/updateproduct/:id").patch(updateProduct);
export default user;
