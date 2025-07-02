import express from "express";
import validateCoupon from "../Validators/master.coupon.validator.js";
import {
  createCoupon,
  getAllCoupons,
} from "../Controllers/master.coupon.controller.js";

const router = express.Router();

router.post("/add-coupon", validateCoupon, createCoupon);
router.get("/all-coupons", getAllCoupons);

export default router;
