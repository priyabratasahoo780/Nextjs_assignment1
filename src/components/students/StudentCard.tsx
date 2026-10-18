import React from "react";
import Link from "next/link";
import { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  const isCS = student.department === "Computer Science";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-slate-300 transition-colors">
      <div>
        <div className="flex items-start justify-between">
          <div
            className={`w-9 h-9 rounded-md flex items-center justify-center font-bold text-xs ${student.avatarBg} ${student.avatarText}`}
          >
            {student.initials}
          </div>
          <span className="font-mono text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
            {student.id}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-base mt-4 mb-2">
          {student.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded border ${
              isCS
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : "bg-slate-100 text-slate-700 border-slate-200"
            }`}
          >
            {student.department}
          </span>
          <span className="text-xs text-slate-500 font-normal">
            {student.year}
          </span>
        </div>
      </div>

      <div>
        <div className="border-t border-slate-100 pt-3 mt-1">
          <Link
            href={`/students/${student.id}`}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group cursor-pointer"
          >
            <span>View profile</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
