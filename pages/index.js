import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">Selamat datang di Wedding App!</h1>
      <p className="mb-6">Silakan login untuk mengakses dashboard Anda</p>
      <Link href="/login" className="text-blue-600 underline">
        Go to Login Page
      </Link>
    </div>
  );
}
