import { NavLink } from "react-router-dom";
import Logo from "../../assets/flow-ai-logo.png";
import CollapseLogo from "../../assets/flow-ai-logo-collapsed.png";
import DarkLogo from "../../assets/flow-ai-logo-dark.png";
import { MdMenu, MdDashboard, MdPeople, MdSettings } from "react-icons/md";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  darkMode: boolean;
};

const Sidebar = ({ collapsed, setCollapsed, darkMode }: SidebarProps) => {
  return (
    <div
      className={`${collapsed ? "w-20" : "w-64"} transition bg-white border-r p-6 dark:bg-gray-800`}
    >
      <div className="flex justify-end dark:text-white">
        <MdMenu
          className="h-7 w-7 mb-2.5 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      <img
        src={darkMode ? DarkLogo : collapsed ? CollapseLogo : Logo}
        alt="Flow AI logo"
        width="150px"
      />

      <nav className="flex flex-col gap-4 pt-5">
        <NavLink
          to="/"
          className="flex gap-1.5 items-center p-1.5 rounded text-indigo-600 hover:bg-indigo-100 transition [&.active]:bg-indigo-100 dark:text-indigo-100 dark:[&.active]:bg-gray-900 dark:hover:bg-gray-900"
        >
          <MdDashboard className="h-5 w-5" />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>
        <NavLink
          to="/users"
          className="flex gap-1.5 items-center p-1.5 rounded text-indigo-600 hover:bg-indigo-100 transition [&.active]:bg-indigo-100 dark:text-indigo-100 dark:[&.active]:bg-gray-900 dark:hover:bg-gray-900"
        >
          <MdPeople className="h-5 w-5" />
          {!collapsed && <span>Users</span>}
        </NavLink>
        <NavLink
          to="/settings"
          className="flex gap-1.5 items-center p-1.5 rounded text-indigo-600 hover:bg-indigo-100 transition [&.active]:bg-indigo-100 dark:text-indigo-100 dark:[&.active]:bg-gray-900 dark:hover:bg-gray-900"
        >
          <MdSettings className="h-5 w-5" />
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
