import userSignup from "../Models/userSignup.model.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import { validationResult } from "express-validator";

// GET all users
const getAllUsers = asyncPromise(async (req, res) => {
  const data = await userSignup.find();
  handleSucces(res, "Users fetched successfully", 200, data);
});

// CREATE a user
const createUser = asyncPromise(async (req, res) => {
  const validateResults = validationResult(req);
  if (!validateResults.isEmpty()) {
    return handleError(
      res,
      "Validation Error",
      403,
      null,
      validateResults.array()
    );
  }

  const { email } = req.body;
  const findData = await userSignup.findOne({ email });
  if (findData) {
    return handleError(
      res,
      "The email already exists, please try logging in.",
      400
    );
  }

  const data = await userSignup.create(req.body);
  return handleSucces(res, "User created successfully", 201, data);
});

export { getAllUsers, createUser };
