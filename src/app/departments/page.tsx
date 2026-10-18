import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import { DUMMY_DEPARTMENTS } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-8 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Departments
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Explore academic faculties, programs, and enrolled students.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white sm:bg-transparent border sm:border-0 border-slate-200 px-3 py-1.5 sm:p-0 rounded-lg w-fit shadow-sm sm:shadow-none">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
            <span>3 Active Academic Faculties</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          {DUMMY_DEPARTMENTS.map((dept) => {
            return (
              <div
                key={dept.id}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2.5">
                    {dept.iconType === "code" && (
                      <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="4 17 10 11 4 5"></polyline>
                          <line x1="12" y1="19" x2="20" y2="19"></line>
                        </svg>
                      </div>
                    )}

                    {dept.iconType === "design" && (
                      <div className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                          <path d="M2 2l7.586 7.586"></path>
                        </svg>
                      </div>
                    )}

                    {dept.iconType === "business" && (
                      <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      </div>
                    )}

                    <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {dept.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {dept.description}
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-500 pt-1">
                    <Link
                      href={
                        dept.id === "cs"
                          ? "/departments/computer-science/web-development"
                          : `/departments/${dept.id}/general`
                      }
                      className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="3" width="6" height="6" rx="1"></rect>
                        <rect x="16" y="15" width="6" height="6" rx="1"></rect>
                        <rect x="2" y="15" width="6" height="6" rx="1"></rect>
                        <path d="M5 9v3a3 3 0 0 0 3 3h8"></path>
                      </svg>
                      <span className="underline decoration-slate-300 hover:decoration-blue-500">
                        {dept.specializations}
                      </span>
                    </Link>

                    <span className="text-slate-300">&bull;</span>

                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>{dept.enrolledStudents}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0">
                  <Link
                    href={`/?dept=${encodeURIComponent(dept.name)}`}
                    className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group cursor-pointer"
                  >
                    <span>View students</span>
                    <span className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-4 px-1 text-xs text-slate-400">
          <span>Curriculum Year 2024–2025</span>
          <span>Updated daily via Campus Records API</span>
        </div>
      </main>
    </div>
  );
}
