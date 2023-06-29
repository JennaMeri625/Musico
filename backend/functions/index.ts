import express from "express";
import usersRouter from "./src/routes/usersRouter";

const app = express();

app.use(express.json());

app.use("/", usersRouter);

export default app;