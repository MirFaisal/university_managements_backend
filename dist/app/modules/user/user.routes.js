"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const student_valitade_1 = require("../student/student.valitade");
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/create-student", (0, validateRequest_1.validateRequest)(student_valitade_1.StudentZodSchema), user_controller_1.UserController.createUser);
exports.userRouter = router;
