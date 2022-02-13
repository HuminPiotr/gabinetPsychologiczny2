import React from "react"
import { graphql, PageProps } from "gatsby"
import Image from 'gatsby-image'

import Layout from "../components/layout"

import ItemBlog from "../components/item-blog"
import { Form, Description as ContactDescription } from "../components/contact"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"
import { Link } from "gatsby"

export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata
    
    const blogList = data.blog.edges.map(item => (
         <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
    ))
    return (
        <Layout
            front={true}
            seo={{
                title: "Terapia Małżeńska Biała Podlaska. Terapia dla Par. Psycholog | Anna Humin Gabinet Psychologiczny",
                description: "Psycholog Anna Humin - Gabinet Psychologiczny w Białej Podlaskiej ⭐ Pomoc psychologiczna, terapie dla małżeństw, dla par ⭐ Zapraszam do kontaktu!",
            }}
            navPlaceholder={false}
            location={location}
        >
            <Hero image={data.image} />

           {blogList.length ? <Blog>{blogList}</Blog> : null} 
            <Contact data={siteData.contact} />

        </Layout>
    )
}

const Hero = ( {image} ) => {
    return (
        <div className="boxed relative">

            <div className="px-4 py-10  text-left lg:py-20 lg:px-0">
                <h1 className="text-color-1 font-black text-5xl lg:text-6xl mt-10">
                 Terapia małżeńska - Biała Podlaska
                </h1>
                <div className="flex"> 
                    <Image 
                            fluid={image.fluid}
                            alt="Małżeństwo na tle drzewa"
                            className="h-full w-auto max-w-none  lg:h-auto lg:w-full  z-0 order-2 md:order-1 "
                    />
                    <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                    Oferuję profesjonalną pomoc dla mieszkańców Białej Podlaskiej, którym potrzebna jest terapia małżeńska. Jeśli Wasz związek przeżywa kryzys, macie problem z komunikacją, a konflikty między Wami coraz bardziej przybierają na sile, warto skorzystać z pomocy doświadczonego psychoterapeuty. Prowadzona przeze mnie <strong> terapia dla par w Białej Podlaskiej, uczy skutecznych sposobów porozumiewania się między partnerami.</strong> Pomagam w ustaleniu źródła problemów, nazywaniu swoich emocji oraz ich wyrażaniu.
                    </p>


                </div>

                <h2 className=" text-color-1 text-xl lg:text-3xl">Terapia małżeńska - kiedy warto wybrać się do specjalisty?</h2>
                <p className="mt-5 text-lg">
                Często pojawiające się konflikty, których para nie jest w stanie rozwiązać samodzielnie, to sygnał, że warto rozważyć wizytę u psychologa. Pacjenci decydują się na podjęcie terapii z różnych powodów - czasem jest to nadmierna zazdrość u jednego z partnerów, różne poglądy na temat wychowania, czy trudności związane z bliskością. Szczera rozmowa u specjalisty często pomaga odbudować relację, jednak <strong> bardzo ważne jest zaangażowanie obu stron oraz cierpliwość </strong> - każda zmiana bowiem wymaga czasu. Terapia małżeńska w moim gabinecie w Białej Podlaskiej przebiega w atmosferze życzliwości oraz zaufania. Zawsze biorę pod uwagę oczekiwania oraz punkt widzenia każdej ze stron.
                </p>

                <h2 className="text-color-1  text-xl lg:text-3xl">Doświadczona psycholog - Biała Podlaska</h2>
                <p className="mt-5 text-lg">Jako <Link className="underline" to="/">doświadczona psycholog z Białej Podlaskiej</Link>,  służę wsparciem parom, które nie chcą doprowadzić do rozstania lub poprawić jakość relacji w związku. Moja wiedza oraz kompetencje pozwalają mi <strong> wskazać partnerom ich zasoby oraz możliwe rozwiązania problemów.</strong> Terapia małżeńska to ważny krok - jeśli obie strony wykazują chęć pracy, istnieje duża szansa, że partnerzy nauczą się skutecznej komunikacji między sobą. Zainteresowane osoby, zapraszam do kontaktu telefonicznego, mailowego lub poprzez formularz na mojej stronie internetowej.
                </p>

            </div>
        </div>
    )
}

const Blog = ({ children }) => {
    return (
        <div className="container mx-auto px-0">
            <div className="pt-20 pb-10 text-center lg:pt-10 lg:pb-20">
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
    query TherapyPageQuery {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
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
        image:   imageSharp(fluid: {src: {regex: "/marriage/"}}) {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
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
                        imageAlt
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
