import { body } from "express-validator";

const validateBrand = [
  body("brand")
    .notEmpty()
    .withMessage("Brand is required")
    .isString()
    .withMessage("Brand must be a string")
    .isLength({ min: 2 })
    .withMessage("Brand must be at least 2 characters long")
    .isLength({ max: 50 })
    .withMessage("Brand must not exceed 50 characters")
    .matches(/^[a-zA-Z0-9\s\-&]+$/)
    .withMessage(
      "Brand can only contain letters, numbers, spaces, hyphens, and ampersands"
    ),
];

export default validateBrand;
