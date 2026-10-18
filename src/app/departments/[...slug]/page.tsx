import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";

interface DepartmentCatchAllProps {
  params: Promise<{ slug: string[] }>;
}

const SPECIALIZATION_STUDENTS = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    year: "Year 3",
    focus: "Full-Stack Architecture",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    year: "Year 1",
    focus: "Reactive UI Design",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    year: "Year 4",
    focus: "Distributed Web Systems",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    year: "Year 2",
    focus: "Progressive Web Apps",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
  },
];

export default async function DepartmentCatchAllPage({
  params,
}: DepartmentCatchAllProps) {
  const { slug } = await params;
  const currentPath = `/departments/${slug ? slug.join("/") : "computer-science/web-development"}`;

  // Formatting display names from slugs
  const deptSegment = slug && slug[0] ? slug[0] : "computer-science";
  const specSegment = slug && slug[1] ? slug[1] : "web-development";

  const departmentTitle =
    deptSegment === "computer-science"
      ? "Computer Science"
      : deptSegment === "design"
      ? "Design"
      : deptSegment === "business"
      ? "Business"
      : deptSegment
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

  const specializationTitle =
    specSegment === "web-development"
      ? "Web Development"
      : specSegment
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-6 pb-16">
        {/* Breadcrumb & Navigation Bar */}
        <div className="mb-5">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-500 flex items-center gap-2 mb-2"
          >
            <Link
              href="/departments"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              Departments
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href="/departments"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              {departmentTitle}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold">
              {specializationTitle}
            </span>
          </nav>

          <div className="flex items-center justify-between text-xs pt-1">
            <Link
              href="/departments"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <span>&larr;</span>
              <span>Return to {departmentTitle} Department</span>
            </Link>

            <Link
              href={`/?dept=${encodeURIComponent(departmentTitle)}`}
              className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1 transition-colors"
            >
              <span>View all students</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Specialization Header Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {specializationTitle}
                </h1>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                  Specialization under {departmentTitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Focusing on modern frontend architectures, full-stack
                frameworks, reactive interfaces, and distributed web APIs.
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                DEPARTMENT TRACK
              </span>
              <span className="font-mono text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded inline-block">
                CS-SPEC-04
              </span>
            </div>
          </div>

          <div className="border-t border-slate-100 my-5"></div>

          {/* 4-Column Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Academic Lead</span>
              <span className="font-semibold text-slate-800">
                Prof. Elena Vance
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">
                Primary Core Lab
              </span>
              <span className="font-semibold text-slate-800">
                Turing Hall 408
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">
                Total Enrollment
              </span>
              <span className="font-semibold text-slate-800">
                4 Active Enrollees
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">
                Curriculum Cycle
              </span>
              <span className="font-semibold text-slate-800">
                2024–2025 Revised
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading: Students in this Specialization */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900">
              Students in this Specialization
            </h2>
            <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded">
              {SPECIALIZATION_STUDENTS.length}
            </span>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <span>Filtered by Track:</span>
            <span className="bg-slate-100 border border-slate-200 text-slate-700 font-medium px-2 py-0.5 rounded text-xs">
              {specializationTitle}
            </span>
          </div>
        </div>

        {/* 2-Column Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SPECIALIZATION_STUDENTS.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-md flex items-center justify-center font-bold text-xs ${student.avatarBg} ${student.avatarText}`}
                    >
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {student.name}
                      </h3>
                      <span className="font-mono text-[11px] font-medium text-slate-500">
                        {student.id}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 border border-slate-200 rounded px-2 py-0.5 bg-slate-50">
                    {student.year}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">
                  {student.focus}
                </span>

                <Link
                  href={`/students/${student.id}`}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group"
                >
                  <span>View profile</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info below container */}
        <div className="border-t border-slate-200/80 pt-4 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>Campus Directory © Academic Informatics Core</span>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Path: {currentPath}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          </div>
        </div>
      </main>
    </div>
  );
}
