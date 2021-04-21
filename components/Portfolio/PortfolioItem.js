import Link from "next/link";

const PortfolioItem = ({ slug, title, previewImg, techStacks, excerpt }) => {
  return (
    <li className="w-full md:w-4/12 px-4 mb-11">
      <Link href={`/portfolio/${slug}`}>
        <img src={previewImg} alt="" className="rounded-2xl" />
      </Link>
      <div className="px-2">
        <p className="text-xs md:text-sm mt-4 text-gray-em300 dark:text-white">
          {techStacks}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mt-2  text-gray-em300 dark:text-yellow-em100">
          <Link href={`/portfolio/${slug}`}>{title}</Link>
        </h3>
        <p className="text-sm md:text-lg mt-2 text-gray-em300 dark:text-white">
          {excerpt}
        </p>
      </div>
    </li>
  );
};

export default PortfolioItem;
