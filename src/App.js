import express from "express";
import userRouter from "./Routes/users.route.js";
import cors from "cors";
<<<<<<< HEAD
=======

>>>>>>> b52a9a028dd0e64a2af9c15050b7ae3fb25280af
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors);
app.use("/api", userRouter);

export default app;
