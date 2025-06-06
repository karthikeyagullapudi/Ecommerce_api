import { Router } from "express";
import { upload } from "../midllewears/multer.js";
import { uploadFile } from "../Controllers/Filecontroller.js";
const fileRoute = Router();

fileRoute.route("/upload").post(upload.single("file"), uploadFile);

export default fileRoute;
