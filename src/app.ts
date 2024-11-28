import cros from "cors";
import express, { Application } from "express";
import { notFound } from "./app/middleware/apiNotFound";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import router from "./app/routes";
const app: Application = express();

// middlewares and perser
app.use(express.json());
app.use(cros());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api/v1", router);

// not found
app.all("*", notFound);

//global error handler
app.use(globalErrorHandler);

export default app;
