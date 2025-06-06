import { body } from "express-validator";

export const validateProduct = [
  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a string"),

  body("subCategory")
    .notEmpty()
    .withMessage("Subcategory is required")
    .isString()
    .withMessage("Subcategory must be a string"),

  body("brand")
    .notEmpty()
    .withMessage("Brand is required")
    .isString()
    .withMessage("Brand must be a string"),

  body("productName")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must be a string"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),

  body("discountPrice")
    .notEmpty()
    .withMessage("Discount price is required")
    .isFloat({ gt: 0 })
    .withMessage("Discount price must be a positive number"),

  body("discount")
    .notEmpty()
    .withMessage("Discount is required")
    .isFloat({ min: 0, max: 100 })
    .withMessage("Discount must be between 0 and 100"),

  body("coupon")
    .notEmpty()
    .withMessage("Coupon is required")
    .isString()
    .withMessage("Coupon must be a string"),

  body("warranty")
    .notEmpty()
    .withMessage("Warranty is required")
    .isString()
    .withMessage("Warranty must be a string"),

  body("file")
    .optional()
    .isString()
    .withMessage("File must be a string (e.g. filename or URL)"),

  body("colors")
    .notEmpty()
    .withMessage("Colors are required")
    .isString()
    .withMessage("Colors must be a string"),

  body("specifications")
    .notEmpty()
    .withMessage("Specifications are required")
    .isString()
    .withMessage("Specifications must be a string"),

  body("status")
    .optional()
    .isBoolean()
    .withMessage("Status must be a boolean value"),
];

export default validateProduct;
