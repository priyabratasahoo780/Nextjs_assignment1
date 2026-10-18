export type DepartmentType = "Computer Science" | "Design" | "Business" | "Engineering";

export interface EnrolledSubject {
  code: string;
  name: string;
  credits: string;
}

export interface Student {
  id: string;
  name: string;
  initials: string;
  department: DepartmentType;
  year: string;
  avatarBg: string;
  avatarText: string;
  status?: string;
  studyYear?: string;
  email?: string;
  enrolled?: string;
  about?: string;
  academicStanding?: string;
  systemRecordId?: string;
  lastValidated?: string;
  subjects?: EnrolledSubject[];
}
