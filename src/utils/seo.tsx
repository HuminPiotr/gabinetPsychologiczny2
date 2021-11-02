import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SeoQuery } from "./__generated__/SeoQuery"

export type SEOProps = { description?: string, lang?: string, meta?: any, title?: string, image?: any };
function SEO({ description, lang, meta, title, image }: SEOProps) {
    const { site } = useStaticQuery<SeoQuery>(
        graphql`
            query SeoQuery {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        ogImage
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const ogImage = image || site.siteMetadata.ogImage

    const breadcrumb = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Biała Podlaska",
        "streetAddress": "Czerwińskiego 4",
        "postalCode": "21-500",
        "addressRegion": "lubelskie",
        "addressCountry": "Polska"
        },
        "name": "Gabinet Psychologiczny Anna Humin",
        "legalName": "Gabinet Psychologiczny Anna Humin",
        "alternateName": "Psycholog Anna Humin",
        "brand": "Gabinet Psychologiczny Anna Humin",
        "email": "anna.humin2@wp.pl",
        "telephone": "669291602",
        "image":"https://www.psycholog-biala-podlaska.pl/static/dfaeedc87b1183f09f8da766a820cd79/ee604/logo.png",
        "logo":"https://www.psycholog-biala-podlaska.pl/static/dfaeedc87b1183f09f8da766a820cd79/ee604/logo.png",
        "priceRange": "PLN",
        "url": "www.psycholog-biala-podlaska.pl",
        "openingHours": "8-16",
        "sameAs": "https://www.facebook.com/Psycholog-Anna-Humin-100682741678299"
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={
                title === site.siteMetadata.title
                    ? title
                    : `%s | ${site.siteMetadata.title}`
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: ogImage,
                },
            ].concat(meta)}
        >
            <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `pl`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
