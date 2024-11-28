"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const apiNotFound_1 = require("./app/middleware/apiNotFound");
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// middlewares and perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use("/api/v1", routes_1.default);
// not found
app.all("*", apiNotFound_1.notFound);
//global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
