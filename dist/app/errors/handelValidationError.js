"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelValidationError = void 0;
const handelValidationError = (error) => {
    const errorSourses = Object.values(error.errors).map((val) => {
        return {
            path: val === null || val === void 0 ? void 0 : val.path,
            message: val === null || val === void 0 ? void 0 : val.message,
        };
    });
    return {
        statusCode: 400,
        message: "Validation Error",
        errorSourses,
    };
};
exports.handelValidationError = handelValidationError;
