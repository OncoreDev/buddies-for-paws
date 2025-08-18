import { defineQuery } from "next-sanity";

export const CHARITIES_QUERY =
  defineQuery(`*[_type == "charity"] | order(orderRank) {
  _id,
  name,
  donationUrl,
  local,
  "logoUrl": logo.asset->url
}`);

export const EVENTS_QUERY =
  defineQuery(`*[_type == "event"] | order(orderRank) {
  _id,
  _updatedAt,
  title,
  slug,
  description,
  featured,
  externalLinks,
  mainImage,
  galleryImages[]{
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
  "mainImageUrl": mainImage.asset->url,
  "galleryImageUrls": galleryImages[].asset->url
}`);

export const EVENT_QUERY = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    featured,
    externalLinks,
    mainImage,
    galleryImages[]{
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    "mainImageUrl": mainImage.asset->url,
    "galleryImageUrls": galleryImages[].asset->url
  }
`);

export const JOURNEYS_QUERY =
  defineQuery(`*[_type == "journey"] | order(orderRank) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  donationUrl,
  watchUrl,
  learnMoreUrl
}`);

export const TOTAL_RAISED_QUERY = defineQuery(`*[_type == "totalRaised"] {
  _id,
  title,
  amount
}`);

export const HERO_CAROUSEL_QUERY =
  defineQuery(`*[_type == "hero"] | order(orderRank) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  donateLink,
  main
}`);

export const ALL_NEWS_QUERY = defineQuery(`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    _updatedAt,
    title,
    slug,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    categories[]->{
      _id,
      title
    },
    content[]{
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }
`);

export const NEWS_QUERY = defineQuery(`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    categories[]->{
      _id,
      title
    },
    content[]{
      ...,
      _type == "image" => {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }
`);

export const NEWS_CATEGORIES_QUERY = defineQuery(`
  *[_type == "newsCategory"] {
    _id,
    title
  }
`);
