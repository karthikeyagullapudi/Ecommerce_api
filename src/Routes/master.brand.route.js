import express from "express";
import validateBrand from "../Validators/master.brand.validator.js";
import {
  createBrand,
  getAllBrands,
} from "../Controllers/master.brand.controller.js";

const router = express.Router();

router.post("/add-brand", validateBrand, createBrand);
router.get("/all-brands", getAllBrands);

export default router;
