import { Server } from "http";
import mongoose from "mongoose";
import process from "process";
import app from "./app";
import config from "./app/config";

let server: Server;

async function main(): Promise<void> {
  try {
    server = app.listen(config.port, () => console.log(`Server is running on port ${config.port}`));
    await mongoose.connect(config.dbUrl as string).then(() => console.log(`Database is connected`));
  } catch (error) {}
}
main();

process.on("unhandledRejection", (reason, p) => {
  console.log("🔴 Unhandled Rejection detected", "Reason:", reason, " Shuuting down the server..");
  if (server) server.close(() => process.exit(1));
  else process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.log("🔴 Uncaught Exception", "Shuuting down the server...");
  process.exit(1);
});
