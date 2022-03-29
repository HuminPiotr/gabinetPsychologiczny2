import React from "react"
import { graphql, PageProps } from "gatsby"
import Image from 'gatsby-image'

import Layout from "../components/layout"

import ItemBlog from "../components/item-blog"
import { Form, Description as ContactDescription } from "../components/contact"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"
import { Link } from "gatsby"

export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata;
    
    const blogList = data.blog.edges.map(item => (
         <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
    ))
    return (
        <Layout
            front={true}
            seo={{
                title: "Psycholog dla Młodzieży Biała Podlaska. Terapia dla Nastolatków | Anna Humin Gabinet Psychologiczny",
                description: "Psycholog Anna Humin - Gabinet Psychologiczny w Białej Podlaskiej ⭐ Pomoc psychologiczna, terapie dla młodzieży i nastolatków ⭐ Zapraszam do kontaktu!",
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
                    Psycholog dla młodzieży - Biała Podlaska
                </h1>
                <div className="flex"> 
                    <Image 
                            fluid={image.fluid}
                            alt="Młoda dziewczyna dba o rośliny"
                            className="h-full w-auto max-w-none  lg:h-auto lg:w-full  z-0 order-2 md:order-1 "
                    />
                    <div>
                        <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                            Anna Humin to psycholog dla młodzieży z Białej Podlaskiej.<strong> Oferuje profesjonalne wsparcie psychologiczne - wizyty przebiegają w dyskretnej oraz bezpiecznej atmosferze.</strong> 
                        </p>
                        <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                            Okres dorastania jest często burzliwy. Młodzi ludzie doświadczają różnych stanów emocjonalnych i nie zawsze wiedzą jak sobie z nimi radzić. Zdarzają się sytuacje, gdy najlepszym wyjściem jest sięgnięcie po pomoc specjalisty.
                        </p>
                    </div>
                </div>

                <h2 className=" text-color-1 text-xl lg:text-3xl">Doświadczona psycholog dla młodzieży - Biała Podlaska</h2>
                <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                    W okresie dojrzewania zmienia się wygląd nastolatków, wiele istotnych zmian zachodzi również w psychice. To czas, gdy kształtuje się osobowość, dlatego <strong> u młodych ludzi tak często obserwujemy duże różnice w zachowaniu oraz huśtawki nastroju</strong>.
                </p>

                <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                    Osoba, która dojrzewa, często odczuwa chęć porzucenia schematów, co zwykle nazywamy buntem młodzieńczym. To naturalny proces, ponieważ wówczas rodzi się potrzeba niezależności i nastolatek zaczyna budować swoją odrębność. Rodzicom czasem trudno jest zrozumieć zachowanie dziecka, zwłaszcza że trudne emocje są często skierowane w ich stronę. Pamiętajmy jednak, że nastolatek w ten sposób stara się uniezależnić od rodziców. Przejawami buntu mogą być wagary, konflikty z prawem, sięganie po używki. Młoda osoba może również przejawiać trudności w relacjach z innymi, ponieważ dopiero zaczyna odkrywać siebie i swoje potrzeby. 
                </p>
                <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                    Doświadczona psycholog dla młodzieży z Białej Podlaskiej służy fachowym wsparciem młodym osobom, które nie zawsze wiedzą jak poradzić sobie z emocjami. Wyróżnia ją duża wiedza oraz odpowiednie podejście do Pacjenta.
                </p>

                <h2 className="text-color-1  text-xl lg:text-3xl">Jak pomóc nastolatkowi?</h2>
                <p className="mt-5 text-lg">
                    Ważne, by w porę zareagować i zaproponować profesjonalną pomoc, dzięki której nastolatek będzie w stanie lepiej poradzić sobie ze swoimi uczuciami. <Link className="underline" to="/">Psycholog z Białej Podlaskiej</Link> <strong>Anna Humin wspólnie z Pacjentem wypracowuje najkorzystniejsze dla niego sposoby działania</strong>, które są zgodne z jego wartościami. Pozwala to na poprawę jakości życia i ułatwia codzienne funkcjonowanie.
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
    query TherapyForYoungPageQuery {
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
        image:   imageSharp(fluid: {src: {regex: "/young/"}}) {
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
