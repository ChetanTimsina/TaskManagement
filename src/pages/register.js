// same imports
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <>
      <Head>
        <title>Register | Task Manager</title>
        <meta name="theme-color" content="#1a1a2e" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent)]" />

        <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)] z-10 transition-all hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-white tracking-wide">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mt-1 w-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md transition-all duration-300"
            >
              Register
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-sm text-green-400">{message}</p>
          )}
          <p className="mt-4 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
