import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';


const RoundedImage = () => {

    const data = useStaticQuery(graphql`
        query Image {
            imageSharp(fluid: {src: {regex: "/portret.jpg/"}}) {
                fluid{
                        ...GatsbyImageSharpFluid_tracedSVG
                }
              }
        }
    `)

    return (

        <Image 
            fluid={data.imageSharp.fluid}
            className="rounded-full  mx-auto  mb-10 md:ml-20 shadow-xl w-1/2 md:w-full max-w-xs order-2 md:order-1  "
            alt="Psycholog mgr Anna Humin"

        />
    )
}

export default RoundedImage;