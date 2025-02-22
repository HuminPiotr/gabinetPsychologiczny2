import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import { Form, Description } from "../components/contact"
import { ContactQuery } from "./__generated__/ContactQuery"

export default ({data, location}: PageProps<ContactQuery>) => {

    const api_url = data.site.siteMetadata.contact.api_url;
    const hasContactForm = (api_url);
    return (
        <Layout
            seo={{
                title: "Kontakt Biała Podlaska | Anna Humin Gabinet Psychologiczny",
                description: "Psycholog Anna Humin - Gabinet Psychologiczny w Białej Podlaskiej ⭐ Pomoc psychologiczna dla małżeństw, dla par, dla młodzieży. Rozwój osobisty ⭐ Zadzwoń lub napisz wiadomość!",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h1 className="font-black text-5xl text-color-1 mb-5">
                        Kontakt
                    </h1>
                </div>
                <div className="flex flex-wrap pb-40">
                    {hasContactForm &&
                        <div className="w-full lg:w-1/2 px-6">
                        <Form api={api_url}/>
                    </div>
                    }
                    <div className={`w-full ${hasContactForm ? 'lg:w-1/2' : 'lg:w-2/3 mx-auto'} px-6 pt-8`}>
                        <Description data={data.site.siteMetadata.contact} />
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export const query = graphql`
    query ContactQuery {
        site {
            siteMetadata {
                contact {
                    api_url
                    description
                    mail
                    phone
                    address
                }
            }
        }
    }
`
