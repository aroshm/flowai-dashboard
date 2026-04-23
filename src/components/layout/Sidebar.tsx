import { Link } from "react-router-dom";
import Logo from "../../assets/flow-ai-logo.png";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r p-6">
      <img src={Logo} alt="Flow AI logo" width="150px" />

      <nav className="flex flex-col gap-4 pt-5">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
