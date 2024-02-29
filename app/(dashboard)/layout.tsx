import Card from "../ui/dashboard/card";
import Sidenav from "../ui/dashboard/sidenav";
import Topnav from "../ui/dashboard/topnav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Topnav />
      <div className="flex">
        <Sidenav />
        <div className=" flex-grow w-full mx-3 my-2 md:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
