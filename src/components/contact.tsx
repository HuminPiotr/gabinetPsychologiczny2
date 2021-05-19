import React, { useState } from "react"
import { Send, Mail, Phone, MapPin, Loader } from "react-feather"

import { TextInput, Button } from "./ui"

import { beforeContactFormSubmit, contactFormSubmit } from "../../config"

import SocialLinks from "../utils/sociallinks"
import { ContactQuery_site_siteMetadata_contact } from "../pages/__generated__/ContactQuery"
import { encode } from "punycode"



const Form: React.FC<{ api: string }> = ({ api }) => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [comunicates, setComunicates] = useState({
        result: "",
        name: "",
        email: "",
        message: ""
    })

    const assignComunicates = (data) => {
        console.log(data.errors)


   
        if(data.result){
            setComunicates({
                ...comunicates,
                result: "Wiadomość została wysłana.",
            })
        }
        else{
            setComunicates({
                ...comunicates,
                result: "",
            })
        }
        
        if(data.errors.length > 0){
            data.errors.forEach( (item) => {
                setComunicates({
                    [item.code]: item.message,
                })
                
            })
        }
        
    }


    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
        e.preventDefault();
    }
    
    const handleSubmit = e => {
        const data = beforeContactFormSubmit(formState);

        assignComunicates(data);
        contactFormSubmit(e, data);



        e.preventDefault();
    }
    
    const encode = (data) => {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }


    return (
        <form 
            onSubmit={handleSubmit} 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            noValidate
        >
            <input type="hidden" name="form-name" value="contact" />
            <TextInput
                label="Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                footer={comunicates.name}
            />
            <TextInput
                label="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                footer={comunicates.email}
                
            />
            <TextInput
                label="Message"
                name="message"
                type="textarea"
                value={formState.message}
                onChange={handleChange}
                footer={comunicates.message}

            />
            <div className="py-3 lg:p-4">

                <Button
                    type="button,submit"
                    title="Send"

                />
            </div>
        </form>
    )
}

const Description: React.FC<{ data: ContactQuery_site_siteMetadata_contact }> = ({ data }) => {
    return (
        <div>
            {data.description && (
                <p className="text-color-default">{data.description}</p>
            )}
            <ul className="my-4">
                {data.mail && (
                    <li className="flex items-center">
                        <span className="text-secondary icon">
                            <Mail />
                        </span>
                        <a className="ml-4" href={"mailto:" + data.mail}>
                            {data.mail}
                        </a>
                    </li>
                )}
                {data.phone && (
                    <li className="flex items-center mt-4">
                        <span className="text-secondary icon">
                            <Phone />
                        </span>
                        <a className="ml-4" href={"tel:" + data.phone}>
                            {data.phone}
                        </a>
                    </li>
                )}
                {data.address && (
                    <li className="flex items-start mt-4">
                        <span className="mt-1 text-secondary icon">
                            <MapPin />
                        </span>
                        <p className="whitespace-pre ml-4">{data.address}</p>
                    </li>
                )}
                <li>
                    <SocialLinks />
                </li>
            </ul>
        </div>
    )
}

const IconRight = ({ spin = false }) => {
    if(spin) {
        return (
            <span className="spin" style={{
                display: "inline-block",
                verticalAlign: "middle",
                animationDuration: "5s"
            }}>
                <Loader />
            </span>
        )
    }
    return <Send />
}

type FormMessageProps = { show: boolean, type: string, message: string }
const FormMessage: React.FC<FormMessageProps> = ({ show, type, message }) => {
    if (!show) return null
    return <p className={`text-${type} my-2`}>{message}</p>
}

export { Form, Description }