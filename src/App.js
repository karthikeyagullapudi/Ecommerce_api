import express from "express";
import fileRoute from "./Routes/Filerout.js";
import cors from "cors";
import productRouter from "./Routes/product.route.js";
import userSignupRouter from "./Routes/userSignup.route.js";
import brandRouter from "./Routes/master.brand.route.js";
import categoryRouter from "./Routes/master.category.route.js";
import colorRouter from "./Routes/master.color.route.js";
import subCategoryRouter from "./Routes/master.subCategory.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/product", productRouter);
app.use("/user", userSignupRouter);
app.use("/add-brand", brandRouter);
app.use("/add-category", categoryRouter);
app.use("/add-color", colorRouter);
app.use("/add-subcategory", subCategoryRouter);
app.use("/file", fileRoute);

export default app;
