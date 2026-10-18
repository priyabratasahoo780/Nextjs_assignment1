import React from "react";
import Navbar from "@/components/common/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
            About Campus Directory
          </h1>

          <p className="text-sm text-slate-500 leading-relaxed">
            A comprehensive portal for students, faculties, departments, and academic specializations. Built for modern academic exploration and records navigation.
          </p>

          <div className="border-t border-slate-100 mt-6 pt-4 text-xs text-slate-400">
            Curriculum Year 2024–2025 &bull; Academic Informatics Core
          </div>
        </div>
      </main>
    </div>
  );
}
