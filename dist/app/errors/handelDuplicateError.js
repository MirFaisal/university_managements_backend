"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelDuplicateError = void 0;
const handelDuplicateError = (error) => {
    const errorSourses = [
        {
            path: Object.keys(error.keyValue)[0],
            message: `${Object.values(error.keyValue)} already exists`,
        },
    ];
    return {
        statusCode: 409,
        message: "Duplicate Error",
        errorSourses,
    };
};
exports.handelDuplicateError = handelDuplicateError;
