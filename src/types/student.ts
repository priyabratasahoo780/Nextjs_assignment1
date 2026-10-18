export type DepartmentType = "Computer Science" | "Design" | "Business" | "Engineering";

export interface Student {
  id: string;
  name: string;
  initials: string;
  department: DepartmentType;
  year: string;
  avatarBg: string;
  avatarText: string;
  email?: string;
  bio?: string;
}
