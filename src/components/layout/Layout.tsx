import { useState, type ReactNode } from "react";
import PageTitleProvider from "./PageTitleProvider";
import { usePageTitleContext } from "../../hooks/usePageTitle";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useTheme from "../../hooks/useTheme";

const LayoutContent = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useTheme();
  const { title } = usePageTitleContext();

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        darkMode={darkMode}
      />

      <div className="flex-1 flex flex-col">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          title={title}
        />
        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <PageTitleProvider>
      <LayoutContent>{children}</LayoutContent>
    </PageTitleProvider>
  );
};

export default Layout;
