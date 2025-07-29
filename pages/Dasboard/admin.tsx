export default function AdminPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Selamat datang Admin!</h1>
    </div>
  );
}
import { getSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session?.user?.role !== "admin") {
        router.push("/login");
      }
    });
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang, Admin!</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
import { getSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CouplePage() {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session?.user?.role !== "couple") {
        router.push("/login");
      }
    });
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Halo Pengantin!</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
import { getSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function GuestPage() {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session?.user?.role !== "guest") {
        router.push("/login");
      }
    });
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang, Tamu Undangan!</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
