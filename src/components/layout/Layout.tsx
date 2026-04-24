import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useTheme from "../../hooks/useTheme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useTheme();

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        darkMode={darkMode}
      />

      <div className="flex-1 flex flex-col">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
