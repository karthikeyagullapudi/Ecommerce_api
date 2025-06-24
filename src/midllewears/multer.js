import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    cb(null, uuidv4() + fileExtension);
  },
});i9olu

export const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});
