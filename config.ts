const siteMetadata = {
    title: `Psycholog Biała Podlaska`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon2.png`,
    titleImage: `/images/5.jpg`,
    ogImage: `/images/wall.png`,
    personImage: `/images/AnnaHumin.jpg`,
    helpImage: `/images/woman.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Anna Humin`,
    description: `Pomoc psychologiczna dla dorosłych i młodzieży, psychoterapia, terapia małżeńska, psychoedukacja, pomoc psychologiczna dla dziecka w zaburzeniach emocjonalnych i wychowawczych.`,
    about:
        "Nazywam się Anna Humin i jestem psychologiem z wieloletnim stażem. Prowadzę terapię indywidualną dorosłych i młodzieży, konsultacje rodzicielskie, terapię małżeńską oraz terapię w dolegliwościach psychosomatycznych.",
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 2,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "Strona główna",
            url: "/",
        },
        {
            name: "O mnie",
            url: "/o-mnie",
        },
        {
            name: "Blog",
            url: "/blog",
        },
        // {
        //     name: "PORTFOLIO",
        //     url: "/portfolio",
        // },
        {
            name: "Kontakt",
            url: "/kontakt",
        },
    ],
    footerLinks: [
        // {
        //     name: "PRIVACY POLICY",
        //     url: "/privacy-policy",
        // },
        // {
        //     name: "GitHub",
        //     url: "https://github.com/akzhy/gatsby-starter-elemental",
        // },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/Psycholog-Anna-Humin-100682741678299",
        },

    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://submit-form.com/d5XZRW5A",
        description: `Masz do mnie pytanie? Chcesz zapisać się na wizytę? Zapraszam do kontaktu.`,
        mail: "anna.humin2@wp.pl",
        phone: "669-291-602",
        address: "21-500 \nBiała Podlaska \nul. Czerwińskiego 4",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Wpisz imię",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Wpisz poprawny adres email",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Wiadomość musi składać się z przynajmniej 15 znaków",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
    
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
