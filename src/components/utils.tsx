import React from "react"

import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { LogoQuery } from "./__generated__/LogoQuery"
import Image from 'gatsby-image';

const Logo = ({ className = "logo" }) => {
    const data = useStaticQuery<LogoQuery>(graphql`
        query LogoQuery {
            site {
                siteMetadata {
                    title
                    logo
                }
            }
           logo: imageSharp(fluid: {src: {regex: "/logo/"}}) {
                fluid{
                    ...GatsbyImageSharpFluid_tracedSVG
                }
              }
        }
    `)

    return (
        // <img
        //     src={data.site.siteMetadata.logo}
        //     alt={`${data.site.siteMetadata.title} - logo`}
        //     className={className}
        // />
        <Image
            fluid={data.logo.fluid}
            alt="Anna Humin Gabinet psychologiczny"
            className={className}

        />
    )
}

const Link = props => {
    if (props.to) {
        if (props.to.startsWith("/")) {
            return <GatsbyLink {...props}>{props.children}</GatsbyLink>
        }

        return <a href={props.to}>{props.children}</a>
    } else {
        return (
            <button {...props}></button>
        )
    }
}

export { Logo, Link }
