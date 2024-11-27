import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main(): Promise<void> {
  try {
    app.listen(config.port, () => console.log(`Server is running on port ${config.port}`));
    await mongoose.connect(config.dbUrl as string).then(() => console.log(`Database is connected`));
  } catch (error) {}
}
main();
