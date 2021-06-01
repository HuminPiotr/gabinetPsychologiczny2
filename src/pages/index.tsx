import React, { useEffect, useRef, useState } from "react"
import { graphql, PageProps } from "gatsby"
import Image from 'gatsby-image'

import { ArrowRight } from "react-feather"


import Layout from "../components/layout"
import { Button } from "../components/ui"

import ItemPortfolio from "../components/item-portfolio"
import ItemBlog from "../components/item-blog"
import { Form, Description as ContactDescription } from "../components/contact"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"
import RoundedImage from "../components/roundedImage"
import ScrollIntoView from "react-scroll-into-view"



export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata
    

    const portfolioList = data.wpis.edges.map((item, _) => (
        <ItemPortfolio
            data={item.node}
            key={`p-item-index-${item.node.id}`}
            even={(_ + 1) % 2 === 0}
        />
    ))

    const blogList = data.blog.edges.map(item => (
        <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
    ))
  
    return (
        <Layout
            front={true}
            seo={{
                title: "Psycholog",
                description: siteData.description,
            }}
            navPlaceholder={false}
            location={location}
        >
            <Wall data={data.wall} siteData={siteData} />
            <Help data={data.help} />
            <About data={siteData} />
            <div className="px-4 lg:px-0" id="portfolio">
                {portfolioList}
            </div>
           {blogList.length ? <Blog>{blogList}</Blog> : null} 
            <Contact data={siteData.contact} />
        </Layout>
    )
}

const Wall = ({ data, siteData }) => {
    const wall = useRef(null)
    
    const twoColumnWall = siteData.twoColumnWall;
    console.log(twoColumnWall)
    const [state, changeState] = useState({
        loaded: false,
        supportsBlend: false,
    })

    useEffect(() => {
        if (window.CSS && !state.loaded) {
            if (CSS.supports("mix-blend-mode", "screen")) {
                wall.current.classList.add("supports-blend")
                changeState({
                    loaded: true,
                    supportsBlend: true,
                })
            }
        }
    }, [state.loaded])

    let spanAttrs: Partial<{ style: unknown }> = {}

    if (!twoColumnWall && siteData.titleImage) {
        spanAttrs.style = {
            backgroundImage: `url('${siteData.titleImage}')`,
        }

    }

    const innerComponents = (
        <React.Fragment>
            <div className="title bg-bg">
                <h1
                    className={`pb-4 text-4xl relative lg:text-7xl ${
                        siteData.capitalizeTitleOnHome ? "uppercase" : ""
                    }`}
                >
                    <span  {...spanAttrs}></span>
                    Gabinet psychologiczny
                </h1>
            </div>
            {/* <p className="text-lg lg:text-xl text-color-2 pt-4 lg:pt-0 mt-2">
                {siteData.introTag}
            </p> */}
            <p className="text-base lg:text-lg mt-4">{siteData.description}</p>
            
            <ScrollIntoView selector="#contact">
                <Button
                    label={`ZnanyLekarz`}
                    type="button"
                    title="Zapisz się na wizytę"
                    
                />
            </ScrollIntoView>
          
        </React.Fragment>
    )

    if (twoColumnWall) {
        return (
            <div
                className="wall h-screen flex relative justify-center items-center overflow-hidden"
                ref={wall}
            >
                <div className="flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0">
                    <div
                        className="absolute left-0 top-0 w-full h-full lg:hidden z-10"
                        style={{
                            background: "rgba(0,0,0,.75)",
                        }}
                    ></div>
                    {/* <img
                        src={data.titleImage}
                        alt="Tittle image"
                        className="h-full w-auto max-w-none -ml-40 lg:h-auto lg:w-full md:ml-0"
                    /> */}
                    {/* <div className="h-full w-auto max-w-none -ml-40 lg:h-auto lg:w-full md:ml-0"> */}
                    <Image 
                        fluid={data.fluid}
                        alt="Psycholog zdjęcie tytułowe"
                        className="h-full w-auto max-w-none  lg:h-auto lg:w-full  z-0"
                    />
                    {/* </div> */}
                </div>
                <div className="flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default">
                    {innerComponents}
                </div>
            </div>
        )
    }

    return (
        <div
            className="wall h-screen flex flex-col justify-center items-center text-center"
            ref={wall}
        >
            {innerComponents}
        </div>
    )
}

const About = ({ data }) => {
    return (
        <div className="boxed">

            <div className="px-4 py-10 text-center lg:py-20 lg:px-0">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    O mnie
                </h2>
                <div className="md:flex items-center" >

                    <RoundedImage/>

                    <div className="text-left text-lg">
                        <p>Dzień dobry!</p> 
                        <p>Nazywam się Anna Humin. Jestem psychologiem z 30 letnim doświadczeniem zawodowym. </p> 
                        
                        <h3>Specjalizuję się szczególnie w obszarach:</h3>
                        
                        <ul className="list-disc pl-10">
                            <li>trudności wychowawczych</li>
                            <li>edukacji i treningu <strong>umiejętności komunikacji interpersonalnych</strong> - sprzyjających budowaniu relacji w rodzinie i poza rodziną </li>
                            <li>radzeniu sobie z emocjami i edukacji w zakresie funkcji emocji w rozwoju osobistym</li>
                            <li>usuwania <strong>dolegliwości psychosomatycznych </strong>(tiki nerwowe, bóle głowy, bóle brzucha, jąkanie, moczenie mimowolne itp.)</li>
                            <li>diagnozy sprawności intelektualnych dorosłych <strong>metodą WAIS </strong></li>
                        </ul>
                        <h3>Moje motta:</h3>
                        <p>"Chcesz zmienić czy zrozumieć świat? Zacznij od siebie."</p>
                        <p>"Pokochaj siebie a wszystko zacznie Ci sprzyjać!"</p>
                        <Button
                    to="/o-mnie"
                    label={`O mnie`}
                    title="Więcej o mnie"
                    iconRight={<ArrowRight />} 
                    />
                    </div>
                    


                </div>
            </div>
            
        </div>
    )
}

const Help = ( {data} ) => {
    console.log(data);
    return (
        <div className="boxed relative">
            <div className="imageContainer hidden sm:block absolute w-2/6 right-0 bottom-0 -mr-10 -mb-10">
                <Image fluid={data.fluid} />
            </div>
            <div className="px-4 py-10 text-left lg:py-20 lg:px-0">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    W czym mogę Ci pomóc?
                </h2>
                <ul className="list-disc pl-10">
                    <li>Poradnictwo psychologiczne dla rodziców i opiekunów prawnych</li>
                    <li>Psychoterapia rodzinna, indywidualna i grupowa</li>
                    <li>Diagnoza sprawności intelektualnych dorosłych, wydawanie opinii psychologicznych</li>
                    <li>Interwencja kryzysowa</li>
                    <li>Stres</li>
                    <li>Niska samoocena</li>
                    <li>Niepewność siebie</li>
                    <li>Depresja</li>
                </ul>
            </div>
        </div>
    )
}


const Blog = ({ children }) => {
    return (
        <div className="container mx-auto px-0">
            <div className="pt-20 pb-10 text-center lg:pt-40 lg:pb-20">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    Blog
                </h2>
            </div>
            <div className="flex flex-wrap">{children}</div>
        
        </div>
    )
}

const Contact = ({ data }) => {
    const hasContactForm = data.api_url
    return (
        <div className="container mx-auto" id="contact" >
            <div className="pt-20 pb-10 lg:pt-30 lg:pb-5 text-center">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    Kontakt
                </h2>
            </div>
            <div className="flex flex-wrap pb-40" >
                {hasContactForm && (
                    <div className="w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-6">
                        <Form api={data.api_url} />
                    </div>
                )}
                <div
                    className={`w-full ${
                        hasContactForm ? "lg:w-1/2" : "lg:w-2/3 mx-auto"
                    } px-6 pt-8`}
                >
                    <ContactDescription data={data} />
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
    query IndexPageQuery {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
                titleImage
                ogImage
                personImage
                helpImage
                twoColumnWall
                introTag
                description
                about
                contact {
                    api_url
                    description
                    mail
                    phone
                    address
                }
                social {
                    name
                    url
                    icon
                }
            }
        }
        wall:   imageSharp(fluid: {src: {regex: "/wallImage/"}}) {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }

        help: imageSharp(fluid: {src: {regex: "/woman/"}}) {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }

        wpis: allMdx(
            filter: { fields: { sourceName: { eq: "wpis" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "DD-MM-YYYY")
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
