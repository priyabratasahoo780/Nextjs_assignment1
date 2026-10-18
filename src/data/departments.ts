import { Department } from "../types/department";

export const DUMMY_DEPARTMENTS: Department[] = [
  {
    id: "cs",
    name: "Computer Science",
    code: "CSE",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: "4 Specializations",
    enrolledStudents: "320 Enrolled Students",
    facultyCount: 34,
    studentCount: 320,
    courses: [
      "Data Structures",
      "Operating Systems",
      "Cloud Computing",
      "AI Systems",
    ],
    iconType: "code",
  },
  {
    id: "design",
    name: "Design",
    code: "DES",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: "3 Specializations",
    enrolledStudents: "185 Enrolled Students",
    facultyCount: 18,
    studentCount: 185,
    courses: [
      "Design Systems",
      "Typography",
      "User Research",
      "Prototyping",
    ],
    iconType: "design",
  },
  {
    id: "business",
    name: "Business",
    code: "BUS",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: "3 Specializations",
    enrolledStudents: "240 Enrolled Students",
    facultyCount: 25,
    studentCount: 240,
    courses: [
      "Financial Modeling",
      "Business Strategy",
      "Marketing Analytics",
    ],
    iconType: "business",
  },
];
