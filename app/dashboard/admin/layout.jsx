import AdminNav from "@/components/nav/AdminNav";

export default function AdminDashBoard({ children }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
