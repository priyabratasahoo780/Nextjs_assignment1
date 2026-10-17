"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../constant/navLinks";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Students");

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8 h-full">
          <span className="font-bold text-gray-900">Campus Directory</span>

          <nav className="flex items-center gap-6 h-full text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.label;

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => setActiveTab(link.label)}
                  className={`h-full flex items-center px-1 font-medium cursor-pointer ${
                    isActive
                      ? "text-black border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </button>
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
