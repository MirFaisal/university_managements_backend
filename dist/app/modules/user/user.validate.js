"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createUserZodSchema = zod_1.default.object({
    password: zod_1.default
        .string({
        required_error: "Password is required",
    })
        .min(8, { message: "Password must be at least 8 characters" })
        .max(32, { message: "Password must be at most 32 characters" }),
});
