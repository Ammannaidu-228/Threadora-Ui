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
      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
        style={{
          animationDelay: "2s",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <main className="relative grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center max-w-4xl">
          {/* Code/Dev icon badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-6 rounded-2xl">
                <svg
                  className="w-16 h-16 text-white"
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

          {/* Main heading */}
          <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Under
            </span>
            <span className="block mt-2 text-white">Construction </span>
          </h1>

          {/* Decorative divider with tech feel */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <div
                className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <div
                className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>


          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            <span className="text-purple-400 font-semibold">
              Recruiters & Developers:
            </span>{" "}
            Check out my other live projects showcasing my work
          </p>

          {/* Tech stack badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-300">
              React
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-300">
              Next.js
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-300">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-300">
              Tailwind
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://lit-pick.vercel.app/"
              onMouseEnter={() => setIsHovered("litpick")}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-semibold text-base shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
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
                  className={`w-5 h-5 transition-transform duration-300 ${
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
              href="https://milo-client.vercel.app/"
              onMouseEnter={() => setIsHovered("milo")}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative px-10 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-base border-2 border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-purple-400/50 hover:shadow-xl w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
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
                  className={`w-5 h-5 transition-transform duration-300 ${
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

          {/* Project status indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-white font-semibold mb-2">Full-Stack</h3>
              <p className="text-gray-400 text-sm">
                Complete e-commerce solution with modern tech stack
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-white font-semibold mb-2">Responsive</h3>
              <p className="text-gray-400 text-sm">
                Seamless experience across all devices
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-white font-semibold mb-2">Performance</h3>
              <p className="text-gray-400 text-sm">
                Optimized for speed and efficiency
              </p>
            </div>
          </div>

          {/* Footer text */}
          <p className="mt-12 text-sm text-gray-500">
            This project will showcase advanced e-commerce features including
            payment integration, cart management, and more
          </p>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-40px) translateX(30px) rotate(180deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
