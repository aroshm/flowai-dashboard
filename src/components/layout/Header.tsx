import { FaRegMoon, FaRegSun } from "react-icons/fa";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: () => void;
  title: string;
};

const Header = ({ darkMode, setDarkMode, title }: HeaderProps) => {
  return (
    <header className="flex justify-between bg-white border-b border-b-slate-400 px-6 py-4 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button
        aria-label="Toggle theme"
        className="p-2 rounded cursor-pointer hover:text-indigo-600 hover:bg-indigo-100 dark:hover:bg-gray-900"
        onClick={setDarkMode}
        type="button"
      >
        {darkMode ? <FaRegSun /> : <FaRegMoon />} ss
      </button>
    </header>
  );
};

export default Header;
