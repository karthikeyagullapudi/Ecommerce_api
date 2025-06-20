import "dotenv/config";
import userSignup from "../Models/userSignup.model.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      null,
      res,
      "Validation Error",
      403,
      validateResults.array()
    );
  }

  const { email, password } = req.body;

  const findData = await userSignup.findOne({ email });
  if (findData) {
    return handleError(
      null,
      res,
      "The email already exists, please try logging in.",
      400
    );
  }
  const userNew = await userSignup.create(req.body);

  return handleSucces(res, "User created successfully", 201, userNew);
});

// LOGIN user
const userLogin = asyncPromise(async (req, res) => {
  const validationResults = validationResult(req);
  if (!validationResults.isEmpty()) {
    return handleError(
      null,
      res,
      "Validation Error",
      403,
      validationResults.array()
    );
    
  }

  const { email, password } = req.body;
  const findData = await userSignup.findOne({ email });

  if (!findData) {
    return handleError(null,res, "User does not exist. Please try again.", 400);
  }

  const comparePassword = await bcrypt.compare(password, findData.password);
  if (!comparePassword) {
    return handleError(null,res, "Incorrect password. Please try again.", 409);
  }

  const tokenData = {
    email: findData.email,
    id: findData._id
  };

  const token = jwt.sign(
    {tokenData},
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXP,}
  );

  const responseData = {
    email: findData.email,
    id: findData._id,
    token: token,
  };

  handleSucces(res, "Login successful", 200, responseData);
});

export { getAllUsers, createUser, userLogin };
