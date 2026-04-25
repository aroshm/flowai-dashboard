import { FaRegMoon, FaRegSun } from "react-icons/fa";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: () => void;
};

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between bg-white border-b px-6 py-4 dark:bg-gray-800 dark:text-gray-100">
        <h2 className="text-lg font-semibold" id="page-header">Dashboard</h2>
        <button
          className="p-2 rounded cursor-pointer hover:hover:text-indigo-600 hover:bg-indigo-100"
          onClick={setDarkMode}
        >
          {darkMode ? <FaRegSun /> : <FaRegMoon />}
        </button>
      </div>
    </>
  );
};

export default Header;
