const SkillStacks = ({ stacks, icons, description }) => {
  const iconsMarkup = icons.map((icon, i) => (
    <li className="text-4xl mr-3 dark:text-yellow-em100" key={i}>
      {icon}
    </li>
  ));

  return (
    <li className="w-full md:w-1/2 mb-10 md:pr-10">
      <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-gray-em100 transition duration-500 p-6">
        <p className="text-xs md:text-sm text-gray-em300 dark:text-white">
          {stacks}
        </p>
        <ul className="flex flex-wrap mt-3">{iconsMarkup}</ul>
        <p className="text-base md:text-lg mt-2 text-gray-em300 dark:text-white">
          {description}
        </p>
      </div>
    </li>
  );
};

export default SkillStacks;
