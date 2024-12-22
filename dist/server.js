"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const process_1 = __importDefault(require("process"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
let server;
async function main() {
    try {
        server = app_1.default.listen(config_1.default.port, () => console.log(`Server is running on port ${config_1.default.port}`));
        await mongoose_1.default.connect(config_1.default.dbUrl).then(() => console.log(`Database is connected`));
    }
    catch (error) { }
}
main();
process_1.default.on("unhandledRejection", (reason, p) => {
    console.log("🔴 Unhandled Rejection detected", "Reason:", reason, " Shuuting down the server..");
    if (server)
        server.close(() => process_1.default.exit(1));
    else
        process_1.default.exit(1);
});
process_1.default.on("uncaughtException", (error) => {
    console.log("🔴 Uncaught Exception", "Shuuting down the server...");
    process_1.default.exit(1);
});
