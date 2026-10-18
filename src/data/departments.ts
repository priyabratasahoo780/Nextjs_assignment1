import { Department } from "../types/department";

export const DUMMY_DEPARTMENTS: Department[] = [
  {
    id: "cs",
    name: "Computer Science & Engineering",
    code: "CSE",
    description: "Computing systems, AI, Algorithms and Software Engineering.",
    facultyCount: 34,
    studentCount: 520,
    courses: ["Data Structures", "Operating Systems", "Cloud Computing", "AI Systems"],
  },
  {
    id: "design",
    name: "Department of Design",
    code: "DES",
    description: "Interaction Design, Visual Communication, and Product UX.",
    facultyCount: 18,
    studentCount: 210,
    courses: ["Design Systems", "Typography", "User Research", "Prototyping"],
  },
  {
    id: "business",
    name: "School of Business",
    code: "BUS",
    description: "Management, Finance, Strategy, and Digital Innovation.",
    facultyCount: 25,
    studentCount: 430,
    courses: ["Financial Modeling", "Business Strategy", "Marketing Analytics"],
  },
];
