import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="nav justify-content-center mb-3">
      <Link href="/dashboard/admin" className="nav-link">
        Admin
      </Link>
      <Link href="/dashboard/admin/category" className="nav-link">
        Categories
      </Link>
    </nav>
  );
}
