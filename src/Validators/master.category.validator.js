import { body } from "express-validator";

const validateCategory = [
  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a string")
    .isLength({ min: 3 })
    .withMessage("Category must be at least 3 characters long")
    .isLength({ max: 50 })
    .withMessage("Category must not exceed 50 characters")
    .matches(/^[a-zA-Z0-9\s\-&]+$/)
    .withMessage(
      "Category can only contain letters, numbers, spaces, hyphens, and ampersands"
    ),
];

export default validateCategory;
