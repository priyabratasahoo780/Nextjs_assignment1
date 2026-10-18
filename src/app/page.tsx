"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import StudentCard from "@/components/students/StudentCard";

interface Student {
  id: string;
  name: string;
  initials: string;
  department: "Computer Science" | "Design" | "Business";
  year: string;
  avatarBg: string;
  avatarText: string;
}

const STUDENTS: Student[] = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    department: "Computer Science",
    year: "3rd Year",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
  },
  {
    id: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    department: "Design",
    year: "2nd Year",
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-700",
  },
  {
    id: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    department: "Business",
    year: "4th Year",
    avatarBg: "bg-orange-100",
    avatarText: "text-orange-700",
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    department: "Computer Science",
    year: "1st Year",
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-700",
  },
  {
    id: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    department: "Design",
    year: "3rd Year",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
  },
  {
    id: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    department: "Business",
    year: "2nd Year",
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-700",
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    department: "Computer Science",
    year: "4th Year",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    department: "Computer Science",
    year: "2nd Year",
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-700",
  },
];

export default function CampusDirectory() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <CampusDirectoryContent />
    </Suspense>
  );
}

function CampusDirectoryContent() {
  const searchParams = useSearchParams();
  const deptParam = searchParams.get("dept");

  const [activeTab, setActiveTab] = useState<string>("Students");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDept, setSelectedDept] = useState<string>(deptParam || "All departments");

  useEffect(() => {
    if (deptParam) {
      setSelectedDept(deptParam);
    }
  }, [deptParam]);

  const filteredStudents = useMemo(() => {
    return STUDENTS.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept =
        selectedDept === "All departments" ||
        student.department.toLowerCase() === selectedDept.toLowerCase();

      return matchesSearch && matchesDept;
    });
  }, [searchQuery, selectedDept]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 pt-8 pb-12">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Students
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Browse students and view their profiles.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-3.5 mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students"
              className="w-full pl-9 pr-3 py-1.5 text-sm border border-slate-200 rounded-md bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="department-select"
              className="text-xs sm:text-sm font-medium text-slate-600 whitespace-nowrap"
            >
              Department:
            </label>
            <div className="relative">
              <select
                id="department-select"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-md text-xs sm:text-sm text-slate-700 pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                <option value="All departments">All departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-slate-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-500">
            No students found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        )}

        <div className="border-t border-slate-200 pt-4 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Showing <strong className="font-semibold text-slate-700">{filteredStudents.length}</strong> of{" "}
            <strong className="font-semibold text-slate-700">{STUDENTS.length}</strong> students
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled
              className="px-3 py-1 text-xs font-medium text-slate-400 bg-white border border-slate-200 rounded shadow-sm opacity-60 cursor-not-allowed"
            >
              Previous
            </button>
            <button
              type="button"
              disabled
              className="px-3 py-1 text-xs font-medium text-slate-400 bg-white border border-slate-200 rounded shadow-sm opacity-60 cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
