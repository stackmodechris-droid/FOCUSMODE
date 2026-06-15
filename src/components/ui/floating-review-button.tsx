import React from 'react';

export function FloatingReviewButton() {
  return (
    <a
      href="https://g.page/r/CfcjAUkLxcHnEAE/review"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[9999] bg-white text-black px-4 py-3 rounded-full font-bold shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:scale-105 transition-transform flex items-center gap-2 text-sm border border-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#FABB05"
        className="w-5 h-5"
      >
        <path d="M11.9998 17L6.12185 20.5902L7.69367 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.306 13.8906L17.8778 20.5902L11.9998 17Z" />
      </svg>
      Leave a Review
    </a>
  );
}
