import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";

export default function NotFound() {
  const suggestedRoutes = [
    {
      name: "Computer Science Department",
      path: "/departments/computer-science",
      icon: (
        <svg
          className="w-4 h-4 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18"></path>
          <path d="M5 21V7l7-4 7 4v14"></path>
          <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
        </svg>
      ),
    },
    {
      name: "Design Department",
      path: "/departments/design",
      icon: (
        <svg
          className="w-4 h-4 text-slate-400"
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
      ),
    },
    {
      name: "Business Department",
      path: "/departments/business",
      icon: (
        <svg
          className="w-4 h-4 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
    },
    {
      name: "All Active Students Directory",
      path: "/",
      icon: (
        <svg
          className="w-4 h-4 text-slate-400"
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
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <Navbar />

      {/* Breadcrumb sub-header */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-2.5">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-500 flex items-center gap-2"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              Directory
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">Not Found</span>
          </nav>
        </div>
      </div>

      {/* Main 404 Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 bg-white text-[11px] font-semibold text-slate-600 uppercase tracking-wider shadow-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 inline-block"></span>
          <span>404 &middot; ROUTE NOT FOUND</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Student or department not found
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-6">
          The requested directory entry or path could not be located. It may have
          moved or the identifier might be invalid.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs sm:text-sm font-medium transition shadow-sm"
          >
            Return to Students Directory
          </Link>
          <Link
            href="/departments"
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-md text-xs sm:text-sm font-medium transition shadow-sm"
          >
            Browse All Departments
          </Link>
        </div>

        {/* Suggested Starting Points Box */}
        <div className="max-w-xl w-full mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-left">
          <div className="px-5 py-2.5 bg-slate-50/60 border-b border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            <span>SUGGESTED STARTING POINTS</span>
            <span className="capitalize text-slate-400 font-normal">Internal Routes</span>
          </div>

          <div className="divide-y divide-slate-100">
            {suggestedRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0">{route.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                    {route.name}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-blue-600 font-mono transition-colors">
                  <span>{route.path}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
