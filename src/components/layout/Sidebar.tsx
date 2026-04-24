import { NavLink } from "react-router-dom";
import Logo from "../../assets/flow-ai-logo.png";
import CollapseLogo from "../../assets/flow-ai-logo-collapsed.png";
import { MdMenu, MdDashboard, MdPeople, MdSettings } from "react-icons/md";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  return (
    <div
      className={`${collapsed ? "w-20" : "w-64"} transition bg-white border-r p-6`}
    >
      <div className="flex justify-end">
        <MdMenu
          className="h-7 w-7 mb-2.5"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      <img
        src={collapsed ? CollapseLogo : Logo}
        alt="Flow AI logo"
        width="150px"
      />

      <nav className="flex flex-col gap-4 pt-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${!collapsed ? "px-3 " : ""} py-2 rounded-lg flex items-center gap-1.5 
          ${isActive && !collapsed ? "bg-indigo-100 text-indigo-600" : isActive && collapsed ? "text-indigo-600" : "text-gray-600"}`
          }
        >
          <MdDashboard className="h-5 w-5" />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${!collapsed ? "px-3 " : ""} py-2 rounded-lg flex items-center gap-1.5 
          ${isActive && !collapsed ? "bg-indigo-100 text-indigo-600" : isActive && collapsed ? "text-indigo-600" : "text-gray-600"}`
          }
        >
          <MdPeople className="h-5 w-5" />
          {!collapsed && <span>Users</span>}
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${!collapsed ? "px-3 " : ""} py-2 rounded-lg flex items-center gap-1.5 
          ${isActive && !collapsed ? "bg-indigo-100 text-indigo-600" : isActive && collapsed ? "text-indigo-600" : "text-gray-600"}`
          }
        >
          <MdSettings className="h-5 w-5" />
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
