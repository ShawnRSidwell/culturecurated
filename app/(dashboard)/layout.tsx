import Sidenav from "../ui/dashboard/sidenav";
import Topnav from "../ui/dashboard/topnav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Topnav />
      <Sidenav />
    </>
  );
}

export default Layout;
