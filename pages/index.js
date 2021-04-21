import { useEffect, useRef } from "react";
import gsap from "gsap";

import Meta from "../components/Meta/Meta";
import Layout from "../components/Layout/Layout";
import PortfolioItem from "../components/Portfolio/PortfolioItem";

import styles from "../styles/Animation.module.scss";

import { getAllPortfolio } from "../utils/lib/portfolio";

const Home = ({ allPortfolio }) => {
  const mainHeadingRef = useRef(null);
  const mainDescriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(mainHeadingRef.current, {
      opacity: 1,
      y: 6,
      duration: 0.6,
    })
      .to(
        mainDescriptionRef.current,
        { opacity: 1, y: -6, duration: 0.6 },
        "-=0.4"
      )
      .to(imageRef.current, { opacity: 1, y: -6, duration: 0.6 }, "-=0.4");
  }, []);

  let portfolioMarkup = null;

  portfolioMarkup = allPortfolio.map((item) => {
    return <PortfolioItem key={item.id} {...item} />;
  });

  return (
    <Layout>
      <Meta
        title="Next.js &amp; React Developer | Front-end Web Developer | Egoy Magnaye"
        description="Hi, I'm Egoy Magnaye,  I develop websites & web applications. I'm primarily working on WordPress websites, but I also use Next.js &amp; React for my projects."
      />
      <div className="container mx-auto max-w-screen-lg md:max-w-screen-sm lg:max-w-screen-md mt-20 md:mt-32">
        <div className="m-4 text-center">
          <h2
            ref={mainHeadingRef}
            className={`${styles.fromTopHidden} text-5xl md:text-7xl font-semibold md:leading-tight mb-6 text-gray-em300 dark:text-yellow-em100`}
          >
            Hey, I'm Egoy Magnaye
          </h2>
          <p
            ref={mainDescriptionRef}
            className={`${styles.fromBottomHidden} text-base md:text-xl leading-relaxed mt-3 md:mt-4 text-gray-em300 dark:text-white`}
          >
            I'm a web developer based in the Philippines. I build websites and
            web applications. I'm primarily working on WordPress websites, but I
            also use Next.js and React for my other projects.
          </p>
          <span
            className={`${styles.fromBottomHidden} block text-center mt-6 w-44 md:w-72 m-auto`}
            ref={imageRef}
          >
            <img
              src="/img/em-front-003.jpg"
              alt=""
              className={`rounded-full`}
            />
          </span>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl my-20 md:my-32">
        <div className="m-4 mb-6">
          <h5
            id="allPortfolio"
            className="text-2xl md:text-3xl font-semibold md:leading-none text-gray-em300 dark:text-yellow-em100"
          >
            My Portfolio
          </h5>
          <p className="text-base md:text-lg leading-relaxed mt-3 md:mt-4 text-gray-em300 dark:text-white">
            Here are some of my latest projects.
          </p>
        </div>
        <ul className="flex flex-wrap mt-6">{portfolioMarkup}</ul>
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

export default Home;
