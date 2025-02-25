import React from "react"
import { graphql} from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"



export default ({ data,location })  => {

    console.log(data);
    const siteData = data.site.siteMetadata;

    return (
        <Layout
            seo={{
                title: "Konsultacje Psychologiczne | Psycholog Anna Humin",
                description: "Psycholog online ⭐ rofesjonalna pomoc psychologiczna przez internet. Skuteczne konsultacje online dla dorosłych, par i młodzieży. Zarezerwuj wizytę już dziś!"
            }}
            location={location}
        >
        <div className="boxed">

        <div className="px-4 py-10 text-center lg:py-20 lg:px-0">
            <h1 className="text-color-1 font-black text-5xl lg:text-6xl mb-8">
                Psycholog Online –<br /> Profesjonalne Konsultacje Psychologiczne przez internet
            </h1>
            <div className="md:flex items-center" >


                <div className="text-left text-lg">
                
                    <h3>Konsultacja online – wygodne i skuteczne wsparcie psychologiczne</h3>

                    <p>Masz trudności emocjonalne, doświadczasz stresu lub niepokoju, ale brakuje Ci czasu na dojazd do gabinetu psychologa? <br/><strong>Konsultacje psychologiczne online</strong> to skuteczna i wygodna forma wsparcia, która pozwala skorzystać z pomocy specjalisty bez wychodzenia z domu.</p>
                    <p>Dzięki terapii online możesz uzyskać profesjonalną pomoc psychologiczną niezależnie od miejsca zamieszkania. Wystarczy komputer, tablet lub smartfon z dostępem do internetu.</p>
                    
                    <h3>Dla kogo jest psycholog online?</h3>
                    <p>Konsultacje psychologiczne online to doskonałe rozwiązanie dla osób, które:</p>
                    <ul className="list-disc pl-10">
                        <li>Mają napięty grafik i chcą zaoszczędzić czas na dojazdach</li>
                        <li>Mieszkają za granicą lub w miejscowościach, gdzie dostęp do psychologa jest ograniczony</li>
                        <li>Cenią sobie dyskrecję i komfort rozmowy w znanym otoczeniu</li>
                        <li>Zmagają się z lękiem społecznym lub innymi trudnościami, które utrudniają wizytę w gabinecie</li>
                    </ul>

                    <h3>Konsultacja online sprawdzi się w przypadku problemów takich jak:</h3>
                    <ul className="list-disc pl-10">
                        <li>Zaburzenia emocjonalne i problemy z samooceną</li>
                        <li>Problemy w relacjach i kryzysy rodzinne</li>
                        <li>Lęki, depresja i obniżony nastrój</li>
                        <li>Stres</li>
                        <li>Problemy z radzeniem sobie z trudnymi wydarzeniami życiowymi</li>
                    </ul>

                    <br />
            </div>

        </div>


        <Image 
            fluid={data.image.fluid}
            alt="Kobieta, Rozmowa psychologiczna online"
            className="h-full w-auto max-w-none  lg:h-auto lg:w-full  z-0"
        />

        </div>
        </div>
        </Layout>
    
    )
}


export const query = graphql`
    query OnlinePageQuery {
        site {
            siteMetadata {
                personImage
            }
        }
                
        image:   imageSharp(fluid: {src: {regex: "/psycholog-online/"}}) {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
`
