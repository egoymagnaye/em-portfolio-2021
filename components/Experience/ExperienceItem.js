import { IoMenuSharp, IoCalendarOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";

const ExperienceItem = ({ position, company, location, duration, duty }) => {
  return (
    <li className="w-full mb-10 md:pr-10">
      <h3 className="text-xl md:text-2xl font-semibold md:leading-tight text-gray-em300 dark:text-yellow-em100">
        {position}
      </h3>
      <p className="text-xs md:text-sm italic text-gray-em300 dark:text-white">
        {company}
      </p>
      <p className="flex items-center mt-2 text-gray-em300 dark:text-white">
        <span className="flex-none mr-2">
          <BiMap className="dark:text-yellow-em100" />
        </span>
        <span className="text-base md:text-lg">{location}</span>
      </p>
      <p className="flex items-center mt-2 text-gray-em300 dark:text-white">
        <span className="flex-none mr-2">
          <IoCalendarOutline className="dark:text-yellow-em100" />
        </span>
        <span className="text-base md:text-lg">{duration}</span>
      </p>
      <p className="flex items-center mt-2 text-gray-em300 dark:text-white">
        <span className="flex-none mr-2">
          <IoMenuSharp className="dark:text-yellow-em100" />
        </span>
        <span className="text-base md:text-lg">{duty}</span>
      </p>
    </li>
  );
};

export default ExperienceItem;
