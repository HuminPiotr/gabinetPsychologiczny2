import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';


const RoundedImage = () => {

    const data = useStaticQuery(graphql`
        query Image {
            imageSharp(fluid: {src: {regex: "/AnnaHumin/"}}) {
                fluid{
                        ...GatsbyImageSharpFluid_tracedSVG
                }
              }
        }
    `)

    return (

        <Image 
            fluid={data.imageSharp.fluid}
            className="rounded-full mx-auto mb-10 md:ml-20 shadow-xl w-1/2 md:w-1/3 order-2 md:order-1 "
            alt="Psycholog mgr Anna Humin"

        />
    )
}

export default RoundedImage;