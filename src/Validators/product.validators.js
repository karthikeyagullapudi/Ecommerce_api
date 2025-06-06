import { body } from "express-validator";
const productValidator = [
  body("category").trim().escape().notEmpty().withMessage("select a category"),
  body("subCategory")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("select a subCategory"),
  body("brand").trim().escape().notEmpty().withMessage("select a brand"),
  body("productName")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("select a productName"),
  body("price").trim().escape().notEmpty().withMessage("select a price"),
  body("discountPrice")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("select a discountPrice"),
  body("discount").trim().escape().notEmpty().withMessage("select a discount"),
  body("coupon").trim().escape().notEmpty().withMessage("select a coupon"),
  body("warranty").trim().escape().notEmpty().withMessage("select a warranty"),
  body("images1").trim().escape().notEmpty().withMessage("select a images"),
  body("images2").trim().escape().notEmpty().withMessage("select a images"),
  body("images3").trim().escape().notEmpty().withMessage("select a images"),
  body("colors").trim().escape().notEmpty().withMessage("select a colors"),
  body("specifications")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("select a specifications"),
];
export default productValidator;
