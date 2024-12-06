import config from "../../config";
import { generateStudentId } from "../../utils/generateStudenId";
import { AcademicSemister } from "../academicSemister/academicSemister.model";
import { Istudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.inteface";
import { User } from "./user.model";

const createstudent = async (password: string, studentData: Istudent) => {
  const user: Partial<IUser> = {};

  const academicSemister = await AcademicSemister.findOne({
    _id: studentData.academicSemister,
  });

  user.password = password || (config.defaultStudentPassword as string);
  user.id = await generateStudentId(academicSemister!);
  user.role = "student";

  const newUser = await User.create(user);

  if (Object.keys(newUser).length) {
    studentData.user = newUser._id;
    studentData.id = newUser.id;
    try {
      const newStudent = await Student.create(studentData);
      return newStudent;
    } catch (error) {
      await User.deleteOne({ _id: newUser._id });
      throw error;
    }
  }
};

export const UserService = {
  createstudent,
};
