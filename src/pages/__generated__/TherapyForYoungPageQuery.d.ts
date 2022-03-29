/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TherapyForYoungPageQuery
// ====================================================

export interface TherapyForYoungPageQuery_site_siteMetadata_contact {
  api_url: string | null;
  description: string | null;
  mail: string | null;
  phone: string | null;
  address: string | null;
}

export interface TherapyForYoungPageQuery_site_siteMetadata_social {
  name: string | null;
  url: string | null;
  icon: string | null;
}

export interface TherapyForYoungPageQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  capitalizeTitleOnHome: boolean | null;
  introTag: string | null;
  about: string | null;
  contact: TherapyForYoungPageQuery_site_siteMetadata_contact | null;
  social: (TherapyForYoungPageQuery_site_siteMetadata_social | null)[] | null;
}

export interface TherapyForYoungPageQuery_site {
  siteMetadata: TherapyForYoungPageQuery_site_siteMetadata | null;
}

export interface TherapyForYoungPageQuery_image_fluid {
  tracedSVG: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TherapyForYoungPageQuery_image {
  fluid: TherapyForYoungPageQuery_image_fluid | null;
}

export interface TherapyForYoungPageQuery_blog_edges_node_frontmatter_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TherapyForYoungPageQuery_blog_edges_node_frontmatter_image_childImageSharp {
  fluid: TherapyForYoungPageQuery_blog_edges_node_frontmatter_image_childImageSharp_fluid | null;
}

export interface TherapyForYoungPageQuery_blog_edges_node_frontmatter_image {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: TherapyForYoungPageQuery_blog_edges_node_frontmatter_image_childImageSharp | null;
}

export interface TherapyForYoungPageQuery_blog_edges_node_frontmatter {
  title: string;
  description: string | null;
  date: any | null;
  imageAlt: string | null;
  image: TherapyForYoungPageQuery_blog_edges_node_frontmatter_image | null;
}

export interface TherapyForYoungPageQuery_blog_edges_node_fields {
  slug: string | null;
}

export interface TherapyForYoungPageQuery_blog_edges_node {
  id: string;
  frontmatter: TherapyForYoungPageQuery_blog_edges_node_frontmatter | null;
  fields: TherapyForYoungPageQuery_blog_edges_node_fields | null;
}

export interface TherapyForYoungPageQuery_blog_edges {
  node: TherapyForYoungPageQuery_blog_edges_node;
}

export interface TherapyForYoungPageQuery_blog {
  edges: TherapyForYoungPageQuery_blog_edges[];
}

export interface TherapyForYoungPageQuery {
  site: TherapyForYoungPageQuery_site | null;
  image: TherapyForYoungPageQuery_image | null;
  blog: TherapyForYoungPageQuery_blog;
}
