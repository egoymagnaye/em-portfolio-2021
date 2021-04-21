import { IoSunny, IoMoon } from "react-icons/io5";

const SwitchTheme = (props) => {
  const { switchThemeHandler } = props;

  return (
    <div className="flex justify-center">
      <button
        onClick={switchThemeHandler}
        className="border-2 border-gray-em300 dark:border-yellow-em100 rounded-full h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <IoMoon className="w-10 text-2xl text-gray-em300 block dark:hidden" />
        <IoSunny className="w-10 text-2xl text-yellow-em100 hidden dark:block" />
      </button>
    </div>
  );
};

export default SwitchTheme;
