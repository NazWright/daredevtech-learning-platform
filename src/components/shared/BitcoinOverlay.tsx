'use client';

export default function BitcoinOverlay() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 512 512"
        className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orange circle background with opacity */}
        <circle cx="256" cy="256" r="256" fill="purple" fillOpacity="0.05" />

        {/* Tilted white Bitcoin B */}
        <g transform="rotate(-15 256 256)">
          <path
            d="M355.2 224.4c7.3-48.9-30-75.3-81.1-92l16.6-66.7-40.6-10.1-16.2 65.3c-10.7-2.7-21.7-5.2-32.5-7.6l16.3-65.8-40.5-10.1-16.6 66.5c-8.8-2-17.4-4-25.7-6.1l.1-.4-56-14-10.8 43.3s30.3 6.9 29.7 7.4c16.6 4.2 19.6 15.4 19.1 24.2l-46 184.1c-2 5-7 12.5-18.4 9.6.4.5-29.7-7.4-29.7-7.4l-20.1 46.3 52.9 13.2c9.8 2.5 19.3 5.1 28.7 7.6l-16.8 67.3 40.5 10.1 16.6-66.7c11 3 21.7 5.8 32.1 8.4l-16.5 66.3 40.6 10.1 16.8-67c68.5 13 120.1 7.8 141.7-54.2 17.5-50.1-.9-79-37-97.9 26.2-6 45.9-22.9 51.2-58.1zm-91.6 126.7c-12.4 50.1-96.4 23-123.7 16l22.1-88.2c27.3 6.8 114.3 20.2 101.6 72.2zm12.5-127.4c-11.3 45.2-81.1 22.2-103.7 16.6l19.9-79.4c22.6 5.6 95.6 16.1 83.8 62.8z"
            fill="white"
            fillOpacity="0.04"
          />
        </g>
      </svg>
    </div>
  );
}
