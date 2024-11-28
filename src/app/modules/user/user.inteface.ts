import { Model } from "mongoose";

export interface IUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  status: "in-progress" | "blocked";
  isDeleted: boolean;
  role: "student" | "faculty" | "admin";
}

export interface userModel extends Model<IUser> {
  isExists(id: string): Promise<boolean>;
}
