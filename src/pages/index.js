import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="theme-color" content="#0a0a23" />
      </Head>

      <main className="relative flex items-center justify-center min-h-screen bg-[#0a0a23] overflow-hidden px-4">
        {/* Glowing deco orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e6e6fa] opacity-10 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#b0c4de] opacity-10 rounded-full blur-[80px] animate-float-delay"></div>

        <div className="relative z-10 w-full max-w-xl text-center p-10 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl hover:border-white/20 hover:shadow-[0_0_30px_rgba(230,230,250,0.15)] transition-all duration-500">
          {/* Inner glow overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 border border-white/5 rounded-2xl"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e6e6fa] to-[#b0c4de] mb-6">
            Task Manager
          </h1>
          <p className="text-[#d3d3d3]/80 text-base sm:text-lg font-light mb-10">
            Elevate your productivity with our sleek task management system
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-[#e6e6fa] rounded-lg border border-white/20 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(230,230,250,0.3)] transition-all duration-300 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#e6e6fa] text-[#e6e6fa] rounded-lg hover:bg-white/10 hover:shadow-[0_0_15px_rgba(230,230,250,0.3)] transition-all duration-300 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
              Register
            </Link>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </>
  );
}
