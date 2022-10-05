import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ReactHtmlParser from "react-html-parser";

import Meta from "../../components/Meta/Meta";
import Layout from "../../components/Layout/Layout";

import styles from "../../styles/Portfolio.module.scss";
import animation from "../../styles/Animation.module.scss";

import {
  getSinglePortfolio,
  getAllPortfolioSlugs,
} from "../../utils/lib/portfolio";

const Portfolio = ({
  portfolio: {
    title,
    techStacks,
    excerpt,
    description,
    featuredImg,
    projectLink,
  },
}) => {
  const techStackRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const excerptRef = useRef(null);
  const featImgRef = useRef(null);

  console.log(projectLink);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(mainHeadingRef.current, {
      opacity: 1,
      y: 6,
      duration: 0.6,
    })
      .to(excerptRef.current, { opacity: 1, y: -6, duration: 0.6 }, "-=0.4")
      .to(
        featImgRef.current,
        {
          opacity: 1,
          y: -6,
          duration: 0.6,
        },
        "-=0.5"
      )
      .to(
        techStackRef.current,
        {
          opacity: 1,
          y: 6,
          duration: 0.6,
        },
        "-=0.5"
      );
  }, []);

  return (
    <Layout>
      <Meta title={title} ogImgURL={featuredImg} />
      <article>
        <div className="container mx-auto max-w-screen-lg md:max-w-screen-sm lg:max-w-screen-md mt-20">
          <div className="m-4 text-center">
            <p
              ref={techStackRef}
              className={`${animation.fromTopHidden} text-xs md:text-sm  text-gray-em300 dark:text-white break-words`}
            >
              {techStacks}
            </p>
            <h1
              ref={mainHeadingRef}
              className={`${animation.fromTopHidden} text-4xl md:text-6xl font-semibold md:leading-tight text-gray-em300 dark:text-yellow-em100 mt-2 break-words`}
            >
              {title}
            </h1>
            <p
              ref={excerptRef}
              className={`${animation.fromBottomHidden} text-base md:text-xl leading-relaxed mt-3 md:mt-4 text-gray-em300 dark:text-white`}
            >
              {excerpt}
            </p>
            <img
              ref={featImgRef}
              src={featuredImg}
              alt=""
              className={`${animation.fromBottomHidden} mt-6 rounded-2xl shadow-md`}
            />
          </div>
        </div>
        <div className="container mx-auto max-w-screen-lg md:max-w-screen-md my-20 md:my-32">
          <div
            className={`m-4 mb-6 ${styles.portfolioContainer} darkModePortfolio`}
          >
            {ReactHtmlParser(description)}
          </div>
          {projectLink && (
            <div className="text-center max-w-xs mx-auto mt-16">
              <Link href={projectLink}>
                <a target="_blank">
                  <h5 className=" bg-gray-em100 hover:bg-gray-em100 dark:bg-yellow-em100 text-white dark:text-black text-2xl leading-6 font-semibold py-4 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 hover:opacity-90">
                    Visit Website
                  </h5>
                </a>
              </Link>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllPortfolioSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const data = await getSinglePortfolio(slug);

  return {
    props: { portfolio: data },
  };
};

export default Portfolio;
