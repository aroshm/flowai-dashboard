import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r p-6">
      <h1 className="text-xl font-bold mb-6">FlowAI</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
