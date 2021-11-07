import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Logo } from "./utils"
import Navlinks from "./navigation-list"
import { FooterLinksQuery, FooterLinksQuery_site_siteMetadata_footerLinks } from "./__generated__/FooterLinksQuery"
import { Send, Mail, Phone, MapPin, Loader } from "react-feather"
import SocialLinks from "../utils/sociallinks"




export default function() {
    const query = useStaticQuery<FooterLinksQuery>(graphql`
        query FooterLinksQuery {
            site {
                siteMetadata {
                    title

                }
            }
        }
    `)

    // const footerLinks = query.site.siteMetadata.footerLinks.map((item, _) => (
    //     <ListItem data={item} key={`footer-n-l-${_}`} />
    // ))

    return (
        <footer className="footer bg-bgalt py-12">
            <div className="container mx-auto text-center">
                <div className="flex justify-center my-3 mb-6">
                    <Link to="/" title={query.site.siteMetadata.title}>
                        <Logo className="w-12"/>
                    </Link>
                </div>
                <div className="text-color-2 my-3 footer-links animated-link-parent mb-10">
                        <Navlinks className="flex items-center justify-center flex-wrap" withThemeSwitch={false}/>
                    </div>


                <div>

                <div className="my-4 flex justify-center items-center gap-x-8 gap-y-8 flex-col sm:flex-row ">
                    <div className="flex items-center justify-center px-5 ">
                        <span className="text-secondary icon">
                            <Mail />
                        </span>
                        <a className="ml-4" href={"mailto:" + "anna.humin2@wp.pl"}>
                            {"anna.humin2@wp.pl"}
                        </a>
                    </div>
                    <div className="flex items-center  justify-center  px-5">
                        <span className="text-secondary icon">
                            <Phone />
                        </span>
                        <a className="ml-4" href={"tel:" + "669291602"}>
                            {"669291602"}
                        </a>
                    </div>
                    <div className="flex items-start  justify-center items-center  px-5">
                        <span className="mt-1 text-secondary icon">
                            <MapPin />
                        </span>
                        <p className="whitespace-pre ml-4 text-left">{"21-500 \nBiała Podlaska \nul. Czerwińskiego 4"}</p>
                    </div>
                    <div> 
                        <SocialLinks />
                    </div>
                </div>
      
                <p className="text-color-default text-lg">
                    Copyright &copy; {" Anna Humin Gabinet Psychologiczny "}
                    {new Date().getFullYear()}
                </p>
                </div>

            </div>
        </footer>
    )
}

const ListItem: React.FC<{ data: FooterLinksQuery_site_siteMetadata_footerLinks }> = ({ data }) => {
    return (
        <li className="inline-block mx-3 animated-link-parent">
            <Link to={data.url} title={data.name}>
                <span>{data.name}</span>
            </Link>
        </li>
    )
}
