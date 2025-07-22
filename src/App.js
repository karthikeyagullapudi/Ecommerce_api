import express from "express";
import fileRoute from "./Routes/Filerout.js";
import cors from "cors";
import productRouter from "./Routes/product.route.js";
import userSignupRouter from "./Routes/userSignup.route.js";
import brandRouter from "./Routes/master.brand.route.js";
import categoryRouter from "./Routes/master.category.route.js";
import colorRouter from "./Routes/master.color.route.js";
import subCategoryRouter from "./Routes/master.subCategory.route.js";
import userAdmin from "./Routes/adminsignup.route.js";
import couponRouter from "./Routes/master.coupon.route.js";
import cartRouter from "./Routes/cartCollection.router.js";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/cart", cartRouter);
app.use("/coupon", couponRouter);
app.use("/product", productRouter);
app.use("/user", userSignupRouter);
app.use("/brand", brandRouter);
app.use("/category", categoryRouter);
app.use("/color", colorRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/file", fileRoute);
app.use("/userAdmin", userAdmin);
export default app;
