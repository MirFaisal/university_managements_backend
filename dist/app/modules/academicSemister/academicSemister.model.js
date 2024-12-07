"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemister = void 0;
/* eslint-disable no-use-before-define */
const mongoose_1 = __importDefault(require("mongoose"));
const appError_1 = __importDefault(require("../../utils/appError"));
const academicSemister_constant_1 = require("./academicSemister.constant");
const academicSemisterSchema = new mongoose_1.default.Schema({
    name: { type: String, enam: ["Autumn", "Summer", "Fall"], required: true },
    year: { type: String, required: true },
    code: { type: String, enum: ["01", "02", "03"], required: true },
    startMonth: { type: String, enum: academicSemister_constant_1.months, required: true },
    endMonth: { type: String, enum: academicSemister_constant_1.months, required: true },
}, { timestamps: true });
academicSemisterSchema.pre("save", async function (next) {
    const isExist = await exports.AcademicSemister.findOne({
        name: this.name,
        year: this.year,
    });
    if (isExist) {
        throw new appError_1.default("Academic semister already exist", 400);
    }
    if (academicSemister_constant_1.monthWithNumber[this.startMonth] >= academicSemister_constant_1.monthWithNumber[this.endMonth]) {
        throw new appError_1.default("Start month should be less than end month", 400);
    }
    if (academicSemister_constant_1.code[this.name] !== this.code) {
        throw new appError_1.default("Invalid semister code", 400);
    }
    next();
});
exports.AcademicSemister = mongoose_1.default.model("AcademicSemister", academicSemisterSchema);
