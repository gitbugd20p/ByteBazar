import { defineQuery } from "next-sanity";

const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc)`);

const LATEST_BLOG_QUERY = defineQuery(`
  *[_type == 'blog' && isLatest == true] | order(title asc) {
    ...,
    blogcategories[]->{
      title,
      slug
    }
  }
`);

export { BRANDS_QUERY, LATEST_BLOG_QUERY };
