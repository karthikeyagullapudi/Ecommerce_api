import express from "express";
import userRouter from "./Routes/users.route.js";
import userSignup from "./Routes/userSignup.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/user", userSignup);

export default app;
