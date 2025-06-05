import { body } from "express-validator";

const validateColor = [
  body("color")
    .notEmpty()
    .withMessage("Color is required")
    .isString()
    .withMessage("Color must be a string")
    .isLength({ min: 3 })
    .withMessage("Color must be at least 3 characters long")
    .isLength({ max: 30 })
    .withMessage("Color must not exceed 30 characters")
    .matches(/^[a-zA-Z\s\-]+$/)
    .withMessage("Color can only contain letters, spaces, and hyphens"),
];

export default validateColor;
