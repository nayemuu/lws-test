'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <h2 className="text-xl font-medium mb-2 text-red-500">
        Something went wrong!
      </h2>
      <button
        className="bg-green-500 px-4 py-2 rounded-md text-xl text-[#fff] font-semibold"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
