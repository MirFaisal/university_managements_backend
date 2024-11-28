"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, response) => res.status(response.statusCode).json(response);
exports.sendResponse = sendResponse;
