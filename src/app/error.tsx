"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong!</h2>
      <p className="text-gray-600 mb-4 text-sm">
        An error occurred while loading this page.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
