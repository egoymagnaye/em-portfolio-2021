import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Meta from "../components/Meta/Meta";
import Layout from "../components/Layout/Layout";
import ReviewItem from "../components/Reviews/ReviewItem";

import styles from "../styles/Animation.module.scss";

const Contact = () => {
  const [reviews] = useState([
    {
      client: "Joanna O.",
      company: "Australian Land Conservation Alliance",
      review:
        "Egoy is a great communicator and he is motivated and hard working. These qualities made working with him very enjoyable and I felt confident that he would deliver exactly what was expected. I have worked with a few developers in my time and I can honestly say Egoy is one of the best. He was incredibly patient as I took extra time to approve the site and he turned changes around fast so that we maintained momentum even when I caused delays.",
    },
    {
      client: "Tea D.",
      company: "Red Koi Fish",
      review:
        "Working with Egoy has been a very seamless and stress-free experience. He has been a good communicator throughout the experience and I feel confident that he is able to produce what I have asked for. If there are any issues, he would articulate the problem and provide me with alternative solutions. Either way he always keeps me in the loop, I would be happy to recommend him to my close friends and trusted network.",
    },
    {
      client: "Lindsay S.",
      company: "The Social Connection",
      review:
        "Egoy was fantastic to work with, very quick with moving the project forward and always met deadlines. Would 100% recommend Egoy he did a fantastic job of my website, was easy to work with, explained the technical side and what he needed to make things work. He was always quick to respond and his work was fantastic. I am so impressed with what he was able to create for me.",
    },
    {
      client: "Ephrem M.",
      company: "Chapman Law Group",
      review:
        "Egoy did a fantastic job and not only did everything that was asked, he also contributed to the project with his ideas and was able to take charge of certain situations and work past certain obstacles that presented themselves during the development process.",
    },
  ]);

  const mainHeadingRef = useRef(null);
  const mainDescriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(mainHeadingRef.current, {
      opacity: 1,
      y: 6,
      duration: 0.6,
    }).to(
      mainDescriptionRef.current,
      { opacity: 1, y: -6, duration: 0.6 },
      "-=0.4"
    );
  }, []);

  let reviewsMarkup = reviews.map((item, i) => (
    <ReviewItem key={i} {...item} />
  ));

  return (
    <Layout>
      <Meta
        title="Contact Me | Egoy Magnaye"
        description="Development or app needs? I'm waiting for your message all day long. If you have questions, please send your message to webdev@egoymagnaye.com"
        url="https://egoymagnaye.com/contact"
      />
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl my-20 md:my-32">
        <div className="flex flex-wrap mx-4">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h2
              ref={mainHeadingRef}
              className={`${styles.fromTopHidden} text-4xl md:text-6xl font-semibold mb-6 md:mb-8 text-gray-em300 dark:text-yellow-em100`}
            >
              Want to start a project? Or you just want to inquire something?
            </h2>
            <p
              ref={mainDescriptionRef}
              className={`${styles.fromBottomHidden} text-base md:text-xl leading-relaxed mt-3 md:mt-4 text-gray-em300 dark:text-white`}
            >
              Kindly send your message at{" "}
              <strong>
                <a href="mailto:webdev@egoymagnaye.com">
                  webdev@egoymagnaye.com
                </a>
              </strong>
              . I’ll be happy to help you with your project or answer your
              questions.
            </p>
          </div>
          <div className="w-full md:w-2/3 mt-4 md:m-0 md:pl-6 text-center md:text-left"></div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl my-20 md:my-28">
        <div className="mx-4">
          <h4 className="text-2xl md:text-3xl font-semibold md:leading-tight text-center text-gray-em300 dark:text-yellow-em100">
            Some of my happy clients!
          </h4>
          <ul className="flex flex-wrap mt-6">{reviewsMarkup}</ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
