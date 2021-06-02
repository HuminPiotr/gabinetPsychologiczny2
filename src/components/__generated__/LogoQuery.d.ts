/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LogoQuery
// ====================================================

export interface LogoQuery_site_siteMetadata {
  title: string | null;
  logo: string | null;
}

export interface LogoQuery_site {
  siteMetadata: LogoQuery_site_siteMetadata | null;
}

export interface LogoQuery_logo_fluid {
  tracedSVG: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LogoQuery_logo {
  fluid: LogoQuery_logo_fluid | null;
}

export interface LogoQuery {
  site: LogoQuery_site | null;
  logo: LogoQuery_logo | null;
}
