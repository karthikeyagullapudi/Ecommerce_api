import { body } from "express-validator";
const ReviewValidator = [
    body("userId").trim().escape().notEmpty().withMessage("Required userId"),
    body("productId")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Required productId"),
    body("review").trim().escape().notEmpty().withMessage("required review"),
    body("rating").trim().escape().notEmpty().withMessage("required rating"),
];
export default ReviewValidator;
