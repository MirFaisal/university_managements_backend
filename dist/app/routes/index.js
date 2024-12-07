"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicDepartment_routes_1 = require("../modules/academicDepartment/academicDepartment.routes");
const academicFaculty_routes_1 = require("../modules/academicFaculty/academicFaculty.routes");
const academicSemister_routes_1 = require("../modules/academicSemister/academicSemister.routes");
const student_routes_1 = require("../modules/student/student.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const modeleRoutes = [
    {
        path: "/users",
        route: user_routes_1.userRouter,
    },
    {
        path: "/students",
        route: student_routes_1.studentRouter,
    },
    {
        path: "/academic-semisters",
        route: academicSemister_routes_1.academicSemisterRouter,
    },
    {
        path: "/academic-departments",
        route: academicDepartment_routes_1.academicDepartmentRouter,
    },
    {
        path: "/academic-faculies",
        route: academicFaculty_routes_1.academicFacultyRouter,
    },
];
modeleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
