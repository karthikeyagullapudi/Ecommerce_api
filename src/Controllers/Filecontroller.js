import asyncPromise from "../Utils/asyncHandle.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";

export const uploadFile = asyncPromise(async (req, res) => {
  if (!req.file) {
    return handleError(null, res, "file not fount", 400);
  }
  return handleSucces(res, "product add successfully", 201, {
    filename: req.file.filename,
    path: req.file.path,
  });
});
