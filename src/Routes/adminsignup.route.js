import { Router } from "express";
import {
    getAllUsersAdmin,
    createUserAdmin,
    userLoginAdmin,
} from "../Controllers/adminSignup.controllers.js";
import {
    validateAdminSignup,
    adminloginVal,
} from "../Validators/adminSignup.validator.js";

const userAdmin = Router();

userAdmin.route("/getAllUsersAdmin").get(getAllUsersAdmin);
userAdmin.route("/createUserAdmin").post(validateAdminSignup, createUserAdmin);
userAdmin.route("/userLoginAdmin").post(adminloginVal, userLoginAdmin);

export default userAdmin;
