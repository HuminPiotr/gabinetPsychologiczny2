import { siteMetadata } from "./config";
import tailwindConfig from "./tailwind.config";
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-codegen`,
    `gatsby-plugin-advanced-sitemap`,


    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/contents/blog/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `wpis`,
            path: `${__dirname}/contents/wpis/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/static/images`,
        },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            tailwindcss(tailwindConfig),
            autoprefixer,
            ...(process.env.NODE_ENV === `production`
              ? [require(`cssnano`)]
              : []),
          ],
        },
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-JFDG2MJ4D5", // Google Analytics / GA
          ],


          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,

          },
        },
      },
      {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
            host: 'https://www.psycholog-biala-podlaska.pl',
            sitemap: 'https://www.psycholog-biala-podlaska.pl/sitemap.xml',
            policy: [{ userAgent: '*', allow: '/' }]
          }
      }
    
]

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus,
        },
    } as any)
}

export default {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
