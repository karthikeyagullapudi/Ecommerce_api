import { Router } from "express";
import addProduct from "../Controllers/user.controller.js";
import userValidator from "../Validators/users.validators.js";

const user = Router();
user.route("/addproduct").post(userValidator, addProduct);
export default user;
