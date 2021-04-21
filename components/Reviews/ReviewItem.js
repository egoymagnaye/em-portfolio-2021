import { IoMdQuote } from "react-icons/io";

const ReviewItem = ({ client, company, review }) => {
  return (
    <li className="w-full md:w-1/2 mb-11 pr-6 relative">
      <IoMdQuote className="absolute top-0 z-0 text-7xl text-gray-em300 dark:text-gray-300 opacity-30 dark:opacity-100" />
      <div className="relative z-10">
        <p className="text-base md:text-lg mt-2 text-gray-em300 dark:text-white">
          {review}
        </p>
        <h5 className="text-xl font-bold mt-2 text-gray-em300 dark:text-yellow-em100">
          {client}
        </h5>
        <p className="text-xs md:text-sm font-semibold italic text-gray-em300 dark:text-white">
          {company}
        </p>
      </div>
    </li>
  );
};

export default ReviewItem;
