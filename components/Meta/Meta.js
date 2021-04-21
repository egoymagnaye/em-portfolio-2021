import { NextSeo } from "next-seo";

const Meta = ({ title, description, url, ogImgURL, ogImgAlt }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: ogImgURL,
            width: 1200,
            height: 627,
            alt: ogImgAlt,
          },
        ],
        site_name: "Egoy Magnaye | Portfolio",
      }}
    />
  );
};

Meta.defaultProps = {
  title: "Egoy Magnaye | Portfolio",
  description: "This is a sample meta description.",
  url: "https://egoymagnaye.com",
  ogImgURL: "https://2021-portfolio-five.vercel.app/img/default-og-em.jpg",
  ogImgAlt: "",
};

export default Meta;
