import mongoose from "mongoose";
import config from "../../config";
import AppError from "../../utils/appError";
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

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newUser = await User.create([user], { session });
    console.log(newUser);

    if (!newUser.length) {
      throw new AppError("Failed to create user", 400);
    }

    studentData.user = newUser[0]._id;
    studentData.id = newUser[0].id;

    const newStudent = await Student.create([studentData], { session });

    if (!newStudent.length) {
      throw new AppError("Failed to create student", 400);
    }

    await session.commitTransaction();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    throw new AppError("Failed to create user and student", 400);
  } finally {
    await session.endSession();
  }
};

export const UserService = {
  createstudent,
};
