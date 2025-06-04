import userSignup from "../Models/userSignup.model";
import asyncPromise from "../Utils/asyncHandle.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";

const getAllUsers = asyncPromise(async (req, res) => {
  const data = await user.find();
  handleSucces(res, "Users fetched successfully", 200, data);
});
