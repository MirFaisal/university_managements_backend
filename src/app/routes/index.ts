import express from "express";
import { academicDepartmentRouter } from "../modules/academicDepartment/academicDepartment.routes";
import { academicFacultyRouter } from "../modules/academicFaculty/academicFaculty.routes";
import { academicSemisterRouter } from "../modules/academicSemister/academicSemister.routes";
import { studentRouter } from "../modules/student/student.routes";
import { userRouter } from "../modules/user/user.routes";
const router = express.Router();

const modeleRoutes = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/students",
    route: studentRouter,
  },
  {
    path: "/academic-semisters",
    route: academicSemisterRouter,
  },
  {
    path: "/academic-departments",
    route: academicDepartmentRouter,
  },
  {
    path: "/academic-faculies",
    route: academicFacultyRouter,
  },
];

modeleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
