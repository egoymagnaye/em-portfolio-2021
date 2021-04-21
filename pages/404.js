import Link from "next/link";

import Meta from "../components/Meta/Meta";
import Layout from "../components/Layout/Layout";

const NotFound = (props) => {
  return (
    <Layout>
      <Meta title="404 Not Found | Egoy Magnaye" />
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl my-20 md:my-32">
        <div className="flex flex-wrap mx-4">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-sans font-semibold text-gray-em300 dark:text-yellow-em100">
              404 Not Found
            </h3>
            <h3 className="text-4xl md:text-6xl font-semibold text-gray-em300 dark:text-yellow-em100">
              Ooh!! This page doesn't exist!
            </h3>
            <p className="text-md md:text-xl leading-relaxed mt-3 md:mt-4 text-gray-em300 dark:text-white">
              Try something else or go to{" "}
              <strong>
                <Link href="/">home page</Link>
              </strong>{" "}
              for more info.
            </p>
          </div>
          <div className="w-full md:w-2/3 mt-4 md:m-0 md:pl-6 text-center md:text-left"></div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
