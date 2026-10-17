import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">404</h2>
      <p className="text-gray-600 mb-4 text-sm">Page not found</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
