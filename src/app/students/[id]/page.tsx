import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { DUMMY_STUDENTS } from "@/data/students";

interface StudentDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function StudentDetailPage({
  params,
}: StudentDetailPageProps) {
  const { id } = await params;

  const student = DUMMY_STUDENTS.find(
    (s) => s.id.toLowerCase() === id.toLowerCase()
  );

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 pt-6 pb-16">
        <div className="mb-5">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-500 flex items-center gap-2 mb-2.5"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              Students
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">{student.name}</span>
          </nav>

          <Link
            href="/"
            className="text-xs font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>&larr;</span>
            <span>Back to students</span>
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-base ${student.avatarBg} ${student.avatarText}`}
            >
              {student.initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {student.name}
              </h1>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="font-mono text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                  {student.id}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {student.status || "Active Student"}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 my-6"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
            <div>
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                DEPARTMENT
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {student.department}
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                STUDY YEAR
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {student.studyYear || `${student.year} (Junior)`}
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                EMAIL
              </span>
              <a
                href={`mailto:${student.email}`}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                {student.email}
              </a>
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                ENROLLED
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {student.enrolled || "Fall 2022"}
              </span>
            </div>
          </div>

          <div className="border-t border-slate-200 my-6"></div>

          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-2">About</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {student.about}
            </p>
          </div>

          <div className="border-t border-slate-200 my-6"></div>

          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-3">
              Academic Details
            </h2>

            <div className="space-y-2.5 mb-5 text-sm">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Department</span>
                <span className="font-medium text-slate-800">
                  {student.department}
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Current Academic Standing</span>
                <span className="font-medium text-slate-800">
                  {student.academicStanding || "3rd Year Undergraduate"}
                </span>
              </div>
            </div>

            <div className="mb-2.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                ENROLLED SUBJECTS
              </span>
            </div>

            {student.subjects && student.subjects.length > 0 && (
              <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100 bg-white">
                {student.subjects.map((subject) => (
                  <div
                    key={subject.code}
                    className="px-4 py-3 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <div className="text-slate-700">
                      <span className="font-semibold text-slate-900">
                        {subject.code}:{" "}
                      </span>
                      <span>{subject.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium ml-4 whitespace-nowrap">
                      {subject.credits}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 px-1 text-xs text-slate-400">
          <span>
            System Record ID: {student.systemRecordId || "0948-CS-AM"}
          </span>
          <span>
            Last validated: {student.lastValidated || "Oct 24, 2024"}
          </span>
        </div>
      </main>
    </div>
  );
}
