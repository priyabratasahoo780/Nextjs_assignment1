"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navLinks";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
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
            <span className="font-bold text-gray-900 tracking-tight">
              Campus Directory
            </span>
          </Link>

          <nav className="flex items-center gap-6 h-full text-sm">
            {NAV_LINKS.map((link) => {
              const isActive =
                (link.label === "Students" &&
                  (pathname === "/" || pathname?.startsWith("/students"))) ||
                (link.label === "Departments" &&
                  pathname?.startsWith("/departments")) ||
                (link.label === "About" && pathname?.startsWith("/about"));

              return (
                <Link
                  key={link.label}
                  href={link.href === "/students" ? "/" : link.href}
                  className={`h-full flex items-center px-1 font-medium transition-colors border-b-2 ${
                    isActive
                      ? "text-black border-blue-600"
                      : "text-gray-500 hover:text-black border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <span className="text-xs text-gray-600 bg-gray-50 border border-gray-300 rounded px-2.5 py-1">
          Frontend Practice
        </span>
      </div>
    </header>
  );
}
