import axios from "axios";
import { decode } from "html-entities";

export const getAllPortfolio = async () => {
  const { data } = await axios.get(
    "https://api-portfolio.egoymagnaye.com/wp-json/wp/v2/portfolio/?_fields=id,title,slug,date,acf"
  );

  let portfolio = [];

  // If no portfolio available.
  if (data.length === 0) {
    portfolio = [];
  }

  portfolio = data.map((item) => {
    let id = item.id;
    let date = item.date;
    let slug = item.slug;
    let title = decode(item.title.rendered);
    let description = item.acf.description;
    let techStacks = item.acf.technology_stacks;
    let excerpt = item.acf.excerpt;
    let featuredImg = item.acf.featured_image;
    let previewImg = item.acf.preview_image;
    let projectType = item.acf.project_type ? item.acf.project_type : null;

    return {
      id,
      date,
      slug,
      title,
      description,
      techStacks,
      excerpt,
      featuredImg,
      previewImg,
      projectType,
    };
  });

  return portfolio;
};

export const getSinglePortfolio = async (reqSlug) => {
  const { data } = await axios.get(
    `https://api-portfolio.egoymagnaye.com/wp-json/wp/v2/portfolio/?slug=${reqSlug}&_fields=id,title,slug,date,acf`
  );

  let portfolio = data[0];

  let id = portfolio.id;
  let date = portfolio.date;
  let slug = portfolio.slug;
  let title = decode(portfolio.title.rendered);
  let description = portfolio.acf.description;
  let techStacks = portfolio.acf.technology_stacks;
  let excerpt = portfolio.acf.excerpt;
  let featuredImg = portfolio.acf.featured_image;
  let previewImg = portfolio.acf.preview_image;
  let projectType = portfolio.acf.project_type;
  let projectLink = portfolio.acf.project_link;

  portfolio = {
    id,
    date,
    slug,
    title,
    description,
    techStacks,
    excerpt,
    featuredImg,
    previewImg,
    projectType,
    projectLink,
  };

  return portfolio;
};

export const getLatestPortfolio = async () => {
  const { data } = await axios.get(
    "https://api-portfolio.egoymagnaye.com/wp-json/wp/v2/portfolio/?_fields=id,title,slug,acf&per_page=4"
  );

  let portfolio = [];

  // If no portfolio available.
  if (data.length === 0) {
    portfolio = [];
  }

  portfolio = data.map((item) => {
    let id, slug, title, techStacks, excerpt;

    id = item.id;
    slug = item.slug;
    title = item.title.rendered;
    techStacks = item.acf.technology_stacks;
    excerpt = item.acf.excerpt;

    return {
      id,
      slug,
      title,
      techStacks,
      excerpt,
    };
  });

  return portfolio;
};

export const getAllPortfolioSlugs = async () => {
  const { data } = await axios.get(
    "https://api-portfolio.egoymagnaye.com/wp-json/wp/v2/portfolio/?_fields=id,title,slug,date,acf"
  );

  return data.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
};
