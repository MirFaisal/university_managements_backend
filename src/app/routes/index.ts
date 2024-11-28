import express from "express";
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
];

modeleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
