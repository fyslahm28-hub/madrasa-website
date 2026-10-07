import React from 'react';

export const IslamicPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`overflow-hidden pointer-events-none select-none opacity-10 ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-star" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 0 L25 15 L40 20 L25 25 L20 40 L15 25 L0 20 L15 15 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <circle cx="20" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star)" />
      </svg>
    </div>
  );
};

export const IslamicEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-950 text-amber-300 shadow-md ring-2 ring-amber-400/30 shrink-0 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 drop-shadow">
        {/* Outer 8-point geometric star */}
        <polygon
          points="50,5 62,18 79,6 82,24 99,28 92,45 103,59 89,70 94,88 77,88 70,103 54,94 40,103 33,88 16,88 21,70 7,59 18,45 11,28 28,24 31,6 48,18"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Inner circle */}
        <circle cx="50" cy="50" r="38" fill="#064e3b" stroke="#fbbf24" strokeWidth="2" />
        {/* Minaret / Mihrab arch */}
        <path
          d="M32 75 L32 45 C32 32 50 20 50 20 C50 20 68 32 68 45 L68 75 Z"
          fill="#042f2e"
          stroke="#fde68a"
          strokeWidth="1.5"
        />
        {/* Open Quran symbol */}
        <path
          d="M36 64 C42 57 48 59 50 62 C52 59 58 57 64 64 L64 71 C58 65 52 66 50 69 C48 66 42 65 36 71 Z"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="1"
        />
        {/* Small Crescent and Star at top */}
        <circle cx="50" cy="33" r="4.5" fill="#fbbf24" />
        <circle cx="51.5" cy="32" r="4" fill="#042f2e" />
      </svg>
    </div>
  );
};
