import { body } from "express-validator";

const validateAdminSignup = [
  body("name").trim().notEmpty().withMessage("name is required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("number is required")
    .isNumeric()
    .withMessage("must be numeric")
    .isLength({ min: 10 }, { max: 10 }),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

const adminloginVal = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),

  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

export { validateAdminSignup, adminloginVal };
