import { Metadata } from "next";
import Sidebar from "@/app/ui/curated/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">{children}</div>
      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
