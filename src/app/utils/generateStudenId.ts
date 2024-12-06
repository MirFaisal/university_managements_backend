import { IAcademicSemister } from "../modules/academicSemister/academicSemister.interface";
import { User } from "../modules/user/user.model";

/**
 * This function check the last student id if not exist then return 0 otherwise return last student id
 */
const currentStudentId = async (): Promise<number> => {
  const isExist = await User.findOne({ role: "student" }, { id: 1, _id: 0 }).sort({ id: -1 }).limit(1);
  if (isExist) {
    return isExist.id;
  }
  return 0;
};

/**
 * Generate a student id based on the given academic semister
 * @param {IAcademicSemister} payload - academic semister object
 * @returns {string} student id in the format of "yearcodeincrement"
 * @description
 *  - year: 4 digit year of the academic semister
 *  - code: 2 digit code of the academic semister
 *  - increment: 6 digit increment number, starting from 0
 */
export const generateStudentId = async (payload: IAcademicSemister) => {
  let start: number = 0;

  // Get the last student id if exist
  const lastStudentId = await currentStudentId();
  const lastStudentYear = lastStudentId?.toString().slice(0, 4);
  const lastStudentSemester = lastStudentId?.toString().slice(4, 6);

  if (lastStudentId && lastStudentYear === payload.year && lastStudentSemester === payload.code) {
    start = Number(lastStudentId.toString().slice(6));
  }

  const increment = (start + 1).toString().padStart(6, "0");
  return `${payload.year}${payload.code}${increment}`;
};
