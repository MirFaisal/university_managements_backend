export type Tmonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export interface IAcademicSemister {
  year: string;
  name: "Autumn" | "Summer" | "Fall";
  code: "01" | "02" | "03";
  startMonth: Tmonth;
  endMonth: Tmonth;
}
