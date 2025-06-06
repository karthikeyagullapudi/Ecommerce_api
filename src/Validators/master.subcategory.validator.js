import { body } from "express-validator";

const validateSubsubCategory = [
  body("subsubCategory")
    .notEmpty()
    .withMessage("Sub-sub-category is required")
    .isString()
    .withMessage("Sub-sub-category must be a string")
    .isLength({ min: 3 })
    .withMessage("Must be at least 3 characters long")
    .isLength({ max: 50 })
    .withMessage("Must not exceed 50 characters")
    .matches(/^[a-zA-Z0-9\s\-&()]+$/)
    .withMessage("Invalid characters in sub-sub-category"),
];

export default validateSubsubCategory;
