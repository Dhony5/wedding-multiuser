// pages/login.tsx
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // dummy password
  const router = useRouter();

  useEffect(() => {
    // Jika user sudah login, redirect ke dashboard
    getSession().then((session) => {
      if (session?.user?.role === "admin") router.push("/dashboard/admin");
      else if (session?.user?.role === "couple") router.push("/dashboard/couple");
      else if (session?.user?.role === "guest") router.push("/dashboard/guest");
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("Login gagal. Email tidak dikenali.");
    } else {
      const session = await getSession();
      if (session?.user?.role === "admin") router.push("/dashboard/admin");
      else if (session?.user?.role === "couple") router.push("/dashboard/couple");
      else if (session?.user?.role === "guest") router.push("/dashboard/guest");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (isi apa saja)"
          className="w-full px-4 py-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
