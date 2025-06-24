import "dotenv/config";
import adminSignup from "../Models/adminSignup.model.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// GET all users
const getAllUsersAdmin = asyncPromise(async (req, res) => {
    const data = await adminSignup.find();
    handleSucces(res, "Users fetched successfully", 200, data);
});

// CREATE a user
const createUserAdmin = asyncPromise(async (req, res) => {
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

    const findData = await adminSignup.findOne({ email });
    if (findData) {
        return handleError(
            null,
            res,
            "The email already exists, please try logging in.",
            400
        );
    }
    const userNew = await adminSignup.create(req.body);

    return handleSucces(res, "User created successfully", 201, userNew);
});

// LOGIN user
const userLoginAdmin = asyncPromise(async (req, res) => {
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

    const { loginemail, loginPassword } = req.body;
    const findData = await adminSignup.findOne({ loginemail });

    if (!findData) {
        return handleError(
            null,
            res,
            "User does not exist. Please try again.",
            400
        );
    }

    const comparePassword = await bcrypt.compare(
        loginPassword,
        findData.password
    );
    if (!comparePassword) {
        return handleError(
            null,
            res,
            "Incorrect password. Please try again.",
            409
        );
    }

    const tokenData = {
        email: findData.loginemail,
        id: findData._id,
    };

    const token = jwt.sign({ tokenData }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP,
    });

    const responseData = {
        email: findData.loginemail,
        id: findData._id,
        token: token,
    };

    handleSucces(res, "Login successful", 200, responseData);
});

export { getAllUsersAdmin, createUserAdmin, userLoginAdmin };
