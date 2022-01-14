/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TherapyPageQuery
// ====================================================

export interface TherapyPageQuery_site_siteMetadata_contact {
  api_url: string | null;
  description: string | null;
  mail: string | null;
  phone: string | null;
  address: string | null;
}

export interface TherapyPageQuery_site_siteMetadata_social {
  name: string | null;
  url: string | null;
  icon: string | null;
}

export interface TherapyPageQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  capitalizeTitleOnHome: boolean | null;
  introTag: string | null;
  about: string | null;
  contact: TherapyPageQuery_site_siteMetadata_contact | null;
  social: (TherapyPageQuery_site_siteMetadata_social | null)[] | null;
}

export interface TherapyPageQuery_site {
  siteMetadata: TherapyPageQuery_site_siteMetadata | null;
}

export interface TherapyPageQuery_image_fluid {
  tracedSVG: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TherapyPageQuery_image {
  fluid: TherapyPageQuery_image_fluid | null;
}

export interface TherapyPageQuery_blog_edges_node_frontmatter_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TherapyPageQuery_blog_edges_node_frontmatter_image_childImageSharp {
  fluid: TherapyPageQuery_blog_edges_node_frontmatter_image_childImageSharp_fluid | null;
}

export interface TherapyPageQuery_blog_edges_node_frontmatter_image {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: TherapyPageQuery_blog_edges_node_frontmatter_image_childImageSharp | null;
}

export interface TherapyPageQuery_blog_edges_node_frontmatter {
  title: string;
  description: string | null;
  date: any | null;
  imageAlt: string | null;
  image: TherapyPageQuery_blog_edges_node_frontmatter_image | null;
}

export interface TherapyPageQuery_blog_edges_node_fields {
  slug: string | null;
}

export interface TherapyPageQuery_blog_edges_node {
  id: string;
  frontmatter: TherapyPageQuery_blog_edges_node_frontmatter | null;
  fields: TherapyPageQuery_blog_edges_node_fields | null;
}

export interface TherapyPageQuery_blog_edges {
  node: TherapyPageQuery_blog_edges_node;
}

export interface TherapyPageQuery_blog {
  edges: TherapyPageQuery_blog_edges[];
}

export interface TherapyPageQuery {
  site: TherapyPageQuery_site | null;
  image: TherapyPageQuery_image | null;
  blog: TherapyPageQuery_blog;
}
