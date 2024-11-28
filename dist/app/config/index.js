"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: process.cwd() + "/.env",
});
exports.default = {
    port: process.env.PORT || 8000,
    dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
    defaultStudentPassword: process.env.DEFAULT_STUDENT_PASSWORD,
};
