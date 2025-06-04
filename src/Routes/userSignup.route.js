import { Router } from "express";
import {
  getAllUsers,
  createUser,
} from "../Controllers/userSignup.controllers.js";
import validateSignup from "../Validators/userSignup.validators.js";

const user = Router();

user.route("/getAllUsers").get(getAllUsers);
user.route("/createUser").post(validateSignup, createUser);

export default user;
