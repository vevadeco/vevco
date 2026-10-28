import { isAuthenticated } from "@/lib/auth";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata = {
  title: { absolute: "Admin — VevadeCo Leads" },
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authed = await isAuthenticated();

  if (!authed) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
}
