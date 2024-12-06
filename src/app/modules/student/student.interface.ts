import { Model, Types } from "mongoose";

export interface IstudentName {
  firstName: string;
  middleName?: string;
  lastName: string;
}
export interface Iguardian {
  name: string;
  relationship: "father" | "mother";
  contactNo: string;
  address: string;
}

export interface IlocalGuardian {
  name: string;
  relationship: "brother" | "sister" | "husband" | "wife" | "other";
  contactNo: string;
  address: string;
}

export interface Istudent {
  id: string;
  name: IstudentName;
  user: Types.ObjectId;
  gender: "male" | "female";
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  guardian: Iguardian;
  localGuardian: IlocalGuardian;
  presentAddress: string;
  permanentAddress: string;
  profileImage: string;
  academicDepartment?: Types.ObjectId;
  academicSemister: Types.ObjectId;
  isDeleted: boolean;
}

export interface IstudentModer extends Model<Istudent> {
  isExists(email: string): Promise<boolean>;
}
