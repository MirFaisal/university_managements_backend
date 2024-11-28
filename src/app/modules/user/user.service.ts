import config from "../../config";
import { Istudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.inteface";
import { User } from "./user.model";

const createstudent = async (password: string, studentData: Istudent) => {
  const user: Partial<IUser> = {};

  user.password = password || (config.defaultStudentPassword as string);
  user.id = "20230033";
  user.role = "student";

  const newUser = await User.create(user);

  if (Object.keys(newUser).length) {
    studentData.user = newUser._id;
    studentData.id = newUser.id;
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createstudent,
};
