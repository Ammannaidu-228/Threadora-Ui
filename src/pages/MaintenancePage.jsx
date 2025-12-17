import { useState, useEffect } from "react";

export default function MaintenancePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated gradient orbs - optimized for mobile */}
      <div
        className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 sm:top-1/4 sm:left-1/4 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 sm:bottom-1/4 sm:right-1/4 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-15 animate-pulse"
        style={{
          animationDelay: "2s",
        }}
      />

      {/* Grid pattern overlay - adjusted for mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />

      <main className="relative grid min-h-screen place-items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center w-full max-w-4xl">
          {/* Code/Dev icon badge - scaled for mobile */}
          <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl sm:blur-2xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main heading - mobile-first typography */}
          <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Under
            </span>
            <span className="block mt-1 sm:mt-2 text-white">Construction</span>
          </h1>

          {/* Decorative divider - responsive sizing */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4">
            <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-purple-500" />
            <div className="flex gap-1">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <div
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-pink-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-500 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <div className="h-px w-16 sm:w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
            <div className="flex gap-1">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <div
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-pink-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          {/* Description - mobile-optimized text */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto px-2">
            <span className="text-purple-400 font-semibold">
              Recruiters & Developers:
            </span>{" "}
            Check out my other live projects showcasing my work
          </p>

          {/* Tech stack badges - responsive grid */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-gray-300">
              React
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-gray-300">
              Next.js
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-gray-300">
              TypeScript
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-gray-300">
              Tailwind
            </span>
          </div>

          {/* CTA Buttons - mobile-first stacking */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://lit-pic.ammannaidu.dev/"
              onMouseEnter={() => setIsHovered("litpick")}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-semibold text-sm sm:text-base shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                View LitPick
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                    isHovered === "litpick" ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>

            <a
              href="https://milo.ammannaidu.dev/"
              onMouseEnter={() => setIsHovered("milo")}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-sm sm:text-base border-2 border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-purple-400/50 hover:shadow-xl w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                View Milo
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                    isHovered === "milo" ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Project status indicators - mobile-optimized grid */}
          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Full-Stack</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Complete e-commerce solution with modern tech stack
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Responsive</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Seamless experience across all devices
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Performance</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Optimized for speed and efficiency
              </p>
            </div>
          </div>

          {/* Footer text - mobile-optimized */}
          <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-500 px-4">
            This project will showcase advanced e-commerce features including
            payment integration, cart management, and more
          </p>
        </div>
      </main>
    </div>
  );
}