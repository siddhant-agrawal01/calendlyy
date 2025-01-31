import React from 'react';

export default function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen transition-colors duration-300
      bg-gray-100 dark:bg-gray-800"
    >
      <div
        className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-4 border-t-blue-500
        rounded-full animate-spin"
        style={{ animation: "spin 1s linear infinite" }}
      />
      <p
        className="mt-5 text-lg font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
      >
        Loading, please wait...
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}