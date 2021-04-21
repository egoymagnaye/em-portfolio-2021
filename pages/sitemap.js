import { useState } from "react";
import Link from "next/link";

import Meta from "../components/Meta/Meta";
import Layout from "../components/Layout/Layout";

import { getAllPortfolio } from "../utils/lib/portfolio";

const Sitemap = ({ allPortfolio }) => {
  const [pages] = useState([
    { url: "/", label: "Home" },
    { url: "/about", label: "About Me" },
    { url: "/contact", label: "Contact" },
  ]);

  let pagesMarkup = null;
  let portfolioMarkup = null;

  pagesMarkup = pages.map((item, i) => {
    return (
      <li
        key={i}
        className="text-base md:text-lg leading-relaxed break-words text-gray-em300 dark:text-white"
      >
        <Link href={item.url}>
          <a className="text-gray-em300 dark:text-white">{item.label}</a>
        </Link>
      </li>
    );
  });

  portfolioMarkup = allPortfolio.map((item, i) => {
    return (
      <li
        key={i}
        className="text-base md:text-lg leading-relaxed break-words text-gray-em300 dark:text-white"
      >
        <Link href={`/portfolio/${item.slug}`}>
          <a className="text-gray-em300 dark:text-white">{item.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <Meta title="Sitemap" />
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl mt-20 md:mb-20">
        <div className="m-4 mb-6">
          <h5 className="text-3xl md:text-3xl font-semibold md:leading-none text-gray-em300 dark:text-yellow-em100">
            Sitemap
          </h5>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl ">
        <div className="m-4 mb-6">
          <h5 className="text-2xl md:text-2xl font-semibold md:leading-none text-gray-em300 dark:text-yellow-em100">
            Pages
          </h5>
          <ul className="list-disc list-inside mt-4">{pagesMarkup}</ul>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl mb-20 md:mb-32">
        <div className="m-4 mb-6">
          <h5 className="text-2xl md:text-2xl font-semibold md:leading-none text-gray-em300 dark:text-yellow-em100">
            Portfolio
          </h5>
          <ul className="list-disc list-inside mt-4">{portfolioMarkup}</ul>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPortfolio = await getAllPortfolio();

  return {
    props: { allPortfolio },
  };
};

export default Sitemap;
