import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  IoLogoReact,
  IoLogoCss3,
  SiRedux,
  IoLogoWordpress,
  SiPhp,
  FaHtml5,
  IoLogoJavascript,
  SiWebpack,
  SiReactrouter,
  IoLogoSass,
  SiGreensock,
  SiTailwindcss,
  SiNodeDotJs,
  SiMongodb,
} from "../components/UI/Icons";

import Meta from "../components/Meta/Meta";
import Layout from "../components/Layout/Layout";
import SkillStacks from "../components/SkillStacks/SkillStacks";
import ExperienceItem from "../components/Experience/ExperienceItem";

import styles from "../styles/Animation.module.scss";

const About = () => {
  const [skillStacks] = useState([
    {
      stacks: "WordPress REST API, PHP, HTML, CSS, Javascript",
      icons: [
        <IoLogoWordpress />,
        <SiPhp />,
        <FaHtml5 />,
        <IoLogoCss3 />,
        <IoLogoJavascript />,
      ],
      description:
        "This is my primary stack since I'm working with clients that use WordPress as their platform for their business. I can build custom WordPress themes and plugins as well. ",
    },
    {
      stacks: "React.js, WP REST API, PHP, Webpack",
      icons: [<IoLogoReact />, <IoLogoWordpress />, <SiPhp />, <SiWebpack />],
      description:
        "This is the stack I'm using when my clients want custom functionality for their website. Most of the time, I'm creating a custom plugin to develop the new feature.",
    },
    {
      stacks: "React.js, Redux, React Router, React Hooks, CRA",
      icons: [<IoLogoReact />, <SiRedux />, <SiReactrouter />],
      description:
        "I think this is the common stack in building single-page applications if you're using React. This is the stack I'm using when I started learning React and I still use it to build SPAs. I'm using the Create React App tool for faster setup.",
    },
    {
      stacks: "HTML, Sass, GSAP, Parcel",
      icons: [<FaHtml5 />, <IoLogoSass />, <SiGreensock />],
      description:
        "I use this stack if the client needs static websites only that can be served by any static hosting service or CDN.",
    },
    {
      stacks: "Next.js, Tailwind.css",
      icons: [<IoLogoReact />, <SiTailwindcss />],
      description:
        "These are my new tools for building static websites. This website was statically generated using Next.js. I've never used it to develop applications yet, but I think this will be my new tool in developing web apps and websites.",
    },
    {
      stacks: "Node.js, Express.js, MongoDB, Mongoose",
      icons: [<SiNodeDotJs />, <SiMongodb />],
      description:
        "Developing backend functionalities is my new target goal as a developer. Building RESTful APIs is one of the reasons why I want to learn backend stuff. ",
    },
  ]);

  const [experience] = useState([
    {
      position: "Web Developer",
      company: "@ Animation Outsourced",
      location: "Makati, Philippines",
      duration: "December 05, 2017 - February 24, 2021",
      duty:
        "One of my primary duty was to developed and maintain the client's websites of a law firm. We're using WordPress as our main website platform. Some of their clients were book authors, law firms, and business owners.",
    },
    {
      position: "Front-end Web Developer",
      company: "@ Starfish Internet Solution",
      location: "Makati, Philippines",
      duration: "February 22, 2016 - November 02, 2017",
      duty:
        "My primary duty was to developed WordPress websites. I'm assigned to multiple clients and I'm the one who'll plan, develop, deploy and maintain their websites. I also learned how e-commerce works in this job because I've built e-commerce sites for some of their clients.",
    },
  ]);

  const mainHeadingRef = useRef(null);
  const mainDescriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(imageRef.current, {
      opacity: 1,
      y: 6,
      duration: 0.6,
    })
      .to(
        mainHeadingRef.current,
        {
          opacity: 1,
          y: 6,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        mainDescriptionRef.current,
        { opacity: 1, y: -6, duration: 0.6 },
        "-=0.5"
      );
  }, []);

  let skillStacksMarkup = skillStacks.map((item, i) => (
    <SkillStacks key={i} {...item} />
  ));

  let experienceMarkup = experience.map((item, i) => (
    <ExperienceItem key={i} {...item} />
  ));

  return (
    <Layout>
      <Meta
        title="About Me | Development Goals, Skills, Experience | Egoy Magnaye"
        description="Here are some of my development goals, working experience, and all my relevant key skills."
        url="https://egoymagnaye.com/about"
      />
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl my-10 md:my-32">
        <div className="flex flex-wrap mx-4">
          <div
            ref={imageRef}
            className={`${styles.fromTopHidden} w-full md:w-1/3`}
          >
            <img
              src="/img/em-about.jpg"
              alt=""
              className={`rounded-2xl`}
              width="800"
              height="1066"
            />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:m-0 md:pl-6 text-center md:text-left">
            <h2
              ref={mainHeadingRef}
              className={`${styles.fromTopHidden} text-4xl md:text-6xl font-semibold md:leading-tight mb-4 text-gray-em300 dark:text-yellow-em100`}
            >
              About Me
            </h2>
            <p
              ref={mainDescriptionRef}
              className={`${styles.fromBottomHidden} text-base md:text-xl leading-relaxed mt-3 md:mt-4 text-gray-em300 dark:text-white`}
            >
              Hi, I'm Egoy. I'm a developer with 5 years of experience
              developing websites, I'm working remotely in the Philippines. Most
              of my projects I'm working on were built on WordPress. I can also
              develop custom themes and plugins for this content management
              system.
              <br />
              <br />I can build single-page applications (SPAs) using React as
              well. Whenever my clients have complicated functionalities they
              want for their website, React is my number one go-to solution to
              build such functionalities.
              <br />
              <br />
              My end goal as a developer is to work in a team that will
              continuously push me to learn new things. If ever I'll have a
              chance, I also want to build and launch my very own web
              applications.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl my-20 md:my-28">
        <div className="mx-4">
          <h5 className="text-gray-em300 dark:text-white font-sans">
            My Stacks
          </h5>
          <h4 className="text-2xl md:text-3xl font-semibold md:leading-tight text-gray-em300 dark:text-yellow-em100">
            Relevant Key Skills
          </h4>
          <ul className="flex flex-wrap mt-6">{skillStacksMarkup}</ul>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-lg my-20 md:my-28">
        <div className="mx-4">
          <h4 className="text-2xl md:text-3xl font-semibold md:leading-tight text-gray-em300 dark:text-yellow-em100">
            Work Experience
          </h4>
          <ul className="flex flex-wrap mt-6">{experienceMarkup}</ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
