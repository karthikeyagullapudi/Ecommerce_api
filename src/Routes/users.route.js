import { Router } from "express";
import { addProduct, getAllProducts } from "../Controllers/user.controller.js";
import userValidator from "../Validators/users.validators.js";

const user = Router();
user.route("/addproduct").post(userValidator, addProduct);
user.route("/getallproducts").get(getAllProducts);
export default user;
