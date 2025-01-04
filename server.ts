// filepath: src/index.ts
import express from "express";
import { createTable } from "./src/config/db";
import { errorHandler } from "./src/middleware/error-handling";
import { signupRouter } from "./src/routes/signup";
import { signinRouter } from "./src/routes/signin";
import { signoutRouter } from "./src/routes/signout";
import "dotenv/config";
import { refreshRouter } from "./src/routes/refresh";
import { userRouter } from "./src/routes/user";

//assume admin=5401, user=2024, police= 4048

const app = express();
app.use(express.json());

const port = 3000;

//define routes here
//signup
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);

//signout
app.use("/signout", signoutRouter);
app.use("/refresh", refreshRouter);
app.use("/user", userRouter);

//refresh
app.use(errorHandler as express.ErrorRequestHandler);
const start = async () => {
  await createTable();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
