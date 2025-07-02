import { body } from "express-validator";

const validateCoupon = [
  body("coupon")
    .trim()
    .notEmpty()
    .withMessage("Coupon code is required.")
    .isLength({ min: 3, max: 30 })
    .withMessage("Coupon must be between 3 and 30 characters.")
    .matches(/^[A-Za-z0-9_-]+$/)
    .withMessage(
      "Coupon can only contain letters, numbers, hyphens, and underscores."
    ),
];

export default validateCoupon;
