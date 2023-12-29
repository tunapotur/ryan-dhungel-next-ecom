"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function TopNav() {
  const { data, status, loading } = useSession();
  console.log({ data, status, loading });

  return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
      <Link href="/" className="nav-link">
        🛒 NEXTECOM
      </Link>

      {status === "authenticated" ? (
        <>
          <Link href="/dashboard/user" className="nav-link">
            {data?.user?.name}
          </Link>
          <a
            className="nav-link pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </a>
        </>
      ) : status === "loading" ? (
        <a className="nav-link text-danger">Loading...</a>
      ) : (
        <div className="d-flex">
          <Link href="/login" className="nav-link">
            Login
          </Link>
          <Link href="/register" className="nav-link">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

export default TopNav;
