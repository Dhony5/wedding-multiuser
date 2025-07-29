// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di Website Wedding</h1>
      <p className="mb-4">Silakan login sebagai:</p>
      <div className="space-x-4">
        <Link href="/login" className="text-blue-500 underline">Login</Link>
      </div>
    </div>
  );
}
