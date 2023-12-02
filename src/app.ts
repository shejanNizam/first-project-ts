/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1", router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get("/", test);

// global error middleware
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
