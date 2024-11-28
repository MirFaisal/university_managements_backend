"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
];
modeleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
