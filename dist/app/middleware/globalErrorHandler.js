"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const handelDuplicateError_1 = require("../errors/handelDuplicateError");
const handelValidationError_1 = require("../errors/handelValidationError");
const handleCastError_1 = require("../errors/handleCastError");
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const appError_1 = __importDefault(require("../utils/appError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    let errorSourses = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];
    // error from zod
    if (err instanceof zod_1.ZodError) {
        const siplifiedError = (0, handleZodError_1.default)(err);
        statusCode = siplifiedError.statusCode;
        message = siplifiedError.message;
        errorSourses = siplifiedError.errorSourses;
    }
    else if (err.name === "ValidationError") {
        const siplifiedError = (0, handelValidationError_1.handelValidationError)(err);
        statusCode = siplifiedError.statusCode;
        message = siplifiedError.message;
        errorSourses = siplifiedError.errorSourses;
    }
    else if (err.name === "CastError") {
        const siplifiedError = (0, handleCastError_1.handleCastError)(err);
        statusCode = siplifiedError.statusCode;
        message = siplifiedError.message;
        errorSourses = siplifiedError.errorSourses;
    }
    else if (err.code === 11000) {
        const siplifiedError = (0, handelDuplicateError_1.handelDuplicateError)(err);
        statusCode = siplifiedError.statusCode;
        message = siplifiedError.message;
        errorSourses = siplifiedError.errorSourses;
    }
    else if (err instanceof appError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        errorSourses = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSourses = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    res.status(statusCode).json({
        success: false,
        message: message,
        errorSourses,
        // err,
        stack: config_1.default.node_env === "development" ? err.stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;
