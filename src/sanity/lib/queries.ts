import { defineQuery } from "next-sanity";

export const CHARITIES_QUERY =
  defineQuery(`*[_type == "charity"] | order(name asc) {
  _id,
  name,
  donationUrl,
  local,
  "logoUrl": logo.asset->url
}`);

export const EVENTS_QUERY =
  defineQuery(`*[_type == "event"] | order(featured desc) {
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

export const JOURNEYS_QUERY = defineQuery(`*[_type == "journey"]{
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  donationUrl,
  watchUrl,
  learnMoreUrl
}`);
