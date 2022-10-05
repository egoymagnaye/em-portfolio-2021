import Link from "next/link";

const PortfolioItem = ({
  slug,
  title,
  previewImg,
  techStacks,
  excerpt,
  projectType,
}) => {
  let projectTypeMarkup = null;

  if (projectType) {
    projectTypeMarkup = (
      <div className="px-2 mt-6">
        <span className="inline-block py-1 px-3 font-bold rounded-2xl text-sm bg-gray-em100 w- hover:bg-gray-em100 dark:bg-yellow-em100 text-white dark:text-gray-em100">
          {projectType.label}
        </span>
      </div>
    );
  }

  return (
    <li className="w-full md:w-4/12 px-4 mb-11">
      <Link href={`/portfolio/${slug}`}>
        <img src={previewImg} alt="" className="rounded-2xl cursor-pointer" />
      </Link>
      {projectTypeMarkup}
      <div className="px-2 mt-3">
        <p className="text-xs md:text-sm text-gray-em300 dark:text-white">
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
