import { Router } from "express";
import {
  getAllUsers,
  createUser,
  userLogin
} from "../Controllers/userSignup.controllers.js";
import {validateSignup,loginVal} from "../Validators/userSignup.validators.js";

const user = Router();

user.route("/getAllUsers").get(getAllUsers);
user.route("/createUser").post(validateSignup, createUser);
user.route("/userLogin").post(loginVal,userLogin)

export default user;
