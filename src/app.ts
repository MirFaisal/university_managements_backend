import cros from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

// middlewares and perser
app.use(express.json());
app.use(cros());
app.use(express.urlencoded({ extended: true }));

const a = 1;

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Not found" });
});

//global error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  res.status(500).json({ success: false, message: err.message });
});

export default app;
