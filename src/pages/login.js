import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setErrorMessage(data.message || "Login failed, please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Login | Task Manager</title>
        <meta name="theme-color" content="#0a0a23" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] px-4 relative overflow-hidden">
        {/* Glowy background vibes */}
        <div className="absolute top-[20%] left-[15%] w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[25%] right-[10%] w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-[100px] animate-pulse delay-2000"></div>

        <div className="w-full max-w-md bg-[#1f1f3d] border border-white/10 shadow-xl rounded-2xl p-8 z-10 backdrop-blur-sm transition-all hover:shadow-purple-500/10 hover:border-purple-400/20">
          <h2 className="text-3xl font-semibold text-center text-white bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent mb-6">
            Welcome back 👋
          </h2>
          {errorMessage && (
            <div className="bg-red-400/10 text-red-300 border border-red-400/30 rounded px-3 py-2 text-sm mb-4 text-center">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-purple-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#2a2a4a] text-purple-100 placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-purple-200 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#2a2a4a] text-purple-100 placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-purple-200/80">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-purple-300 hover:text-purple-100 transition-colors"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}
