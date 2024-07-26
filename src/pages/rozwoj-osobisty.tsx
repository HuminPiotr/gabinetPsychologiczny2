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
                title: "Rozwój osobisty | Anna Humin Gabinet Psychologiczny",
                description: "Psycholog Anna Humin - Gabinet Psychologiczny w Białej Podlaskiej ⭐ Pomoc psychologiczna, rozwój osobisty ⭐ Zapraszam do kontaktu!",
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
                 Rozwój osobisty - Biała Podlaska
                </h1>
                <div className="flex"> 
                    <Image 
                            fluid={image.fluid}
                            alt="Małżeństwo na tle drzewa"
                            className="h-full w-auto max-w-none  lg:h-auto lg:w-full  z-0 order-2 md:order-1 "
                    />
                    <p className="mt-5 text-lg max-w-4xl lg:mr-10">
                    Anna Humin to doświadczona psycholog z Białej Podlaskiej, która wspiera swoich Pacjentów w rozwoju osobistym. Samodoskonalenie może odbywać się w różnych obszarach - emocjonalnym, zawodowym, duchowym, fizycznym.  To od Pacjenta zależy, w jakim kierunku chce się rozwijać. Moim zadaniem jest dostarczenie mu odpowiednich narzędzi oraz wspieranie go w tym procesie.
                    </p>


                </div>

                <h2 className="text-color-1  text-xl lg:text-3xl">Rozwój osobisty - wybierz swoją drogę</h2>
                <p className="mt-5 text-lg">
                Rozwój osobisty jest kwestią indywidualną, ponieważ każdy może mieć zupełnie inne oczekiwania w tym zakresie. Kiedy żyjemy w komfortowych warunkach i mamy zaspokojone potrzeby niższego rzędu, może pojawić się u nas pragnienie samorealizacji. To moment, gdy możemy przyjrzeć się sobie i zapytać, czego tak naprawdę chcemy.
                </p>
                <p className="mt-5 text-lg">Podczas spotkań wspólnie z Pacjentem <strong>określamy cele, do których chce dążyć i opracowujemy plan działania.</strong> Wprowadzanie zmian wymaga pracy nad sobą, czasu oraz cierpliwości. Jeśli będziemy konsekwentni w swoich działaniach, szybko zauważymy pierwsze efekty. </p>
                <br/>
                <h2 className=" text-color-1 text-xl lg:text-3xl">Odpowiednie podejście do Pacjenta</h2>
                <p className="mt-5 text-lg">
                Bardzo ważne jest, by mieć świadomość, że każdy z nas rozwija się we własnym tempie. Zawsze staram się jak najlepiej rozpoznać potrzeby oraz możliwości Pacjenta, by móc dopasować najlepsze dla niego metody pracy oraz narzędzia.<strong> W moim gabinecie zapewniam komfortową atmosferę</strong>, pełną szacunku i zrozumienia. Dzięki temu moim Pacjentom łatwiej jest otwarcie mówić o swoich emocjach i oczekiwaniach.
                </p>
                <p className="mt-5 text-lg">Zależy mi na tym, by zwiększyć samoświadomość Pacjenta. Dobra znajomość swoich mocnych i słabych stron znacznie ułatwia proces rozwoju osobistego. </p>

                <br />
                <h2 className="text-color-1  text-xl lg:text-3xl">Zapraszam do mojego gabinetu - Biała Podlaska</h2>
                <p className="mt-5 text-lg">
                Czujesz, że w Twoim życiu czegoś brakuje, poszukujesz pasji i głębszego sensu swojego życia? <Link className="underline" to="/">Psycholog z Białej Podlaskiej</Link> <strong>Anna Humin będzie wspierać Cię w odnalezieniu własnej ścieżki i lepszym rozumieniu siebie.</strong>
                </p>
                <p className="mt-5 text-lg">
                Rozwój osobisty pomoże Ci żyć w zgodzie ze sobą, swoimi wartościami i przekonaniami.
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
    query PersonalDevelopmentPageQuery {
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
        image:   imageSharp(fluid: {src: {regex: "/rozwoj-osobisty/"}}) {
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
