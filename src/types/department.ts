export interface Department {
  id: string;
  name: string;
  code?: string;
  description: string;
  specializations: string;
  enrolledStudents: string;
  facultyCount?: number;
  studentCount?: number;
  courses?: string[];
  iconType: "code" | "design" | "business";
}
