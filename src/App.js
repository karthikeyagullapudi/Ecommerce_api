import express from "express";
import userRouter from "./Routes/users.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors);
app.use("/api", userRouter);

export default app;
