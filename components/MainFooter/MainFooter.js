import Link from "next/link";

import Logo from "../Header/Logo/Logo";

const MainFooter = () => {
  return (
    <footer className="container mx-auto max-w-screen-lg xl:max-w-screen-xl mb-28 md:mb-0">
      <div className="flex flex-wrap items-end m-4">
        <div className="w-full md:w-1/2">
          <Logo footer />
          <p className="text-sm mt-4 text-gray-em300 dark:text-white">
            &copy; 2021 Egoy Magnaye. All rights reserved. This website was
            built using Next.js, Tailwind CSS, and other cool stuff.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-2">
          <div className="md:text-right">
            <Link href="/sitemap">
              <a className="text-sm mt-2 text-gray-em300 dark:text-white">
                Sitemap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
