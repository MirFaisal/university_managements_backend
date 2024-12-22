import mongoose from "mongoose";
import QuaryBuilder from "../../builder/QuaryBuilder";
import AppError from "../../utils/appError";
import { User } from "../user/user.model";
import { Istudent } from "./student.interface";
import { Student } from "./student.model";

const getAllStudents = async (query: any) => {
  // {
  //   const quaryObject = { ...query };

  //   let searchTerm = "";

  //   if (query.searchTerm) {
  //     searchTerm = query?.searchTerm as string;
  //   }

  //   const excludeFields = ["searchTerm", "page", "limit", "sort", "select"];
  //   excludeFields.forEach((field) => delete quaryObject[field]);

  //   //chaning quary object
  //   const searchQuery = Student.find({
  //     $or: ["email", "name.firstName", "name.lastName", "contactNo", "emergencyContactNo"].map((field) => ({
  //       [field]: { $regex: searchTerm, $options: "i" },
  //     })),
  //   });

  //   const result = await searchQuery
  //     .find(quaryObject)
  //     .sort(query.sort ? query.sort : "-createdAt")
  //     .skip(query.page ? Number(query.page - 1 * query.limit) : 0)
  //     .limit(query.limit ? Number(query.limit) : 10)
  //     .select(query.select ? query.select.split(",").join(" ") : "-__v");
  // }

  const studentQuary = await new QuaryBuilder<Istudent>(
    Student.find()
      .populate({
        path: "academicSemister",
      })
      .populate({
        path: "academicDepartment",
        populate: {
          path: "academicFaculty",
        },
      }),
    query
  )
    .search(["email", "name.firstName", "name.lastName", "contactNo", "emergencyContactNo"])
    .filter()
    .sort()
    .paginate()
    .select().modelQuery;

  return studentQuary;
};

const getSpecificStudent = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Student id is not valid", 400);
  }

  const result = await Student.findOne({ _id: id });
  return result;
};

const updateStudent = async (id: string, payload: Partial<Istudent>) => {
  const { name, guardian, localGuardian, ...reamingData } = payload;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Student id is not valid", 400);
  }

  const modifiedData: Record<string, unknown> = { ...reamingData };

  if (name && Object.keys(name).length > 0) {
    for (const [key, value] of Object.entries(name)) {
      modifiedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length > 0) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length > 0) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ _id: id }, modifiedData, {
    new: true,
  });

  return result;
};

const deleteStudent = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Student id is not valid", 400);
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const student = await Student.findOneAndUpdate(
      { id: id },
      { isDeleted: true, isActive: false },
      { new: true, session }
    );

    if (!student) {
      throw new AppError("Failed to delete student", 400);
    }

    const user = await User.findOneAndUpdate(
      { id: student.id },
      { isDeleted: true, isActive: false },
      { new: true, session }
    );

    if (!user) {
      throw new AppError("Failed to delete user", 400);
    }

    await session.commitTransaction();
    return student;
  } catch (error) {
    await session.abortTransaction();
    throw new AppError("Transaction failed", 500);
  } finally {
    session.endSession();
  }
};

export const studentService = {
  getAllStudents,
  getSpecificStudent,
  updateStudent,
  deleteStudent,
};
