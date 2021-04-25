import Link from "next/link";

const minNavItem = 3;

const PortfolioDropdown = ({ dropdownRef, portfolio }) => {
  let markup = [];
  let morePortfolioMarkup =
    portfolio.length > 3 ? (
      <div className="bg-gray-200 dark:bg-gray-em200 transition duration-500 rounded-br-lg rounded-bl-lg p-3 text-sm">
        <Link href="/#allPortfolio">
          <a className="text-gray-em300 dark:text-white">
            View more portfolio ...
          </a>
        </Link>
      </div>
    ) : null;

  markup = portfolio
    .slice(0, minNavItem)
    .map(({ id, title, slug, techStacks, excerpt }, i) => {
      return (
        <li key={id} className="py-3">
          <p className="text-xs mb-1 text-gray-em300 dark:text-white">
            {techStacks}
          </p>
          <h3 className="text-lg mb-1 font-bold leading-tight">
            <Link href={`/portfolio/${slug}`}>
              <a className="text-gray-em300 dark:text-yellow-em100">{title}</a>
            </Link>
          </h3>
          <p className="text-sm mb-1 text-gray-em300 dark:text-white">
            {excerpt}
          </p>
        </li>
      );
    });

  return (
    <div
      ref={dropdownRef}
      className="absolute z-20 mt-10 -ml-4 transform px-0 w-screen max-w-md top-2.5 lg:ml-0 lg:left-1/2 md:-translate-x-1/2 menuDefault"
    >
      <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-gray-em100 transition duration-500">
        <ul className="px-8 py-5">{markup}</ul>
        {morePortfolioMarkup}
      </div>
    </div>
  );
};

export default PortfolioDropdown;
