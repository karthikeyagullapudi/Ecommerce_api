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
app.use("/api/products", productRouter);
app.use("/api/users", userSignupRouter);
app.use("/api/brands", brandRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/colors", colorRouter);
app.use("/api/subcategories", subCategoryRouter);
app.use("/file", fileRoute);

export default app;
