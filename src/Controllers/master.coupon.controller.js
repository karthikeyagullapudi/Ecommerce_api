import couponModel from "../Models/master.coupon.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";
import { validationResult } from "express-validator";

// Create color
const createCoupon = asyncPromise(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(errors.array(), res, "Validation failed", 422);
  }

  const { coupon } = req.body;

  const findCoupon = await couponModel.findOne({ coupon: coupon.trim() });
  if (findCoupon) {
    return handleError(null, res, "The coupon already exists", 409);
  }

  const newCoupon = await couponModel.create({ coupon: coupon.trim() });
  return handleSucces(res, "New coupon has been created", 201, newCoupon);
});

// Get all colors
const getAllCoupons = asyncPromise(async (req, res) => {
  const coupons = await couponModel.find().sort({ coupon: 1 }); // Alphabetical order
  if (!coupons.length) {
    return handleError(null, res, "No coupon found", 404);
  }
  return handleSucces(res, "coupon fetched successfully", 200, coupons);
});

export { createCoupon, getAllCoupons };
