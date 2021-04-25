import Link from "next/link";

const minNavItem = 3;

const PortfolioDropdown = ({ dropdownPortfolioMenu, portfolio }) => {
  let markup = [];
  let morePortfolioMarkup =
    portfolio.length > 3 ? (
      <li className="py-4">
        <h4 className="text-base font-bold">
          <Link href="/#allPortfolio">
            <a className="text-gray-em300 dark:text-yellow-em100">
              View more portfolio ...
            </a>
          </Link>
        </h4>
      </li>
    ) : null;

  markup = portfolio
    .slice(0, minNavItem)
    .map(({ id, title, slug, techStacks }, i) => {
      return (
        <li key={id} className="py-4">
          <h4 className="mb-1 font-bold leading-tight">
            <Link href={`/portfolio/${slug}`}>
              <a className="text-base text-gray-em300 dark:text-yellow-em100">
                {title}
              </a>
            </Link>
          </h4>
          <p className="text-xs mb-1 text-gray-em300 dark:text-white">
            {techStacks}
          </p>
        </li>
      );
    });

  return (
    <ul
      ref={dropdownPortfolioMenu}
      className="divide-y divide-black divide-opacity-10 dark:divide-white dark:divide-opacity-10 px-2 dropdownDefault"
    >
      {markup}
      {morePortfolioMarkup}
    </ul>
  );
};

export default PortfolioDropdown;
