import { body } from "express-validator";

const validatesubCategory = [
  body("categoryName")
    .notEmpty()
    .withMessage("category is required")
    .isString()
    .withMessage("category must be a string"),
  body("subCategory")
    .notEmpty()
    .withMessage("Sub-category is required")
    .isString()
    .withMessage("Sub-category must be a string"),
];

export default validatesubCategory;
