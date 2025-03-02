const siteMetadata = {
    title: `Psycholog Biała Podlaska. Wspacie małżeńskie. Pomoc psychologiczna dla par. Dla młodzieży | Anna Humin Gabinet Psychologiczny`,
    siteUrl: `https://www.psycholog-biala-podlaska.pl/`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon2.png`,
    titleImage: `/images/5.jpg`,
    ogImage: `/images/wall.png`,
    personImage: `/images/portret.jpg`,
    helpImage: `/images/woman.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Anna Humin`,
    description: `Jako doświadczona psycholog z Białej Podlaskiej, oferuję profesjonalną pomoc psychologiczną dla dorosłych i młodzieży. Zapewniam usługi w zakresie: `,
    about:
        "Nazywam się Anna Humin i jestem psychologiem z wieloletnim stażem. Oferuję pomoc psychologiczn indywidualną dorosłych i młodzieży, konsultacje rodzicielskie, wsparcie małżeńskie oraz pomoc w dolegliwościach psychosomatycznych.",
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
            name: "Wsparcie małżeńskie",
            url: "/wsparcie-malzenskie",
        },
        {
            name: "Rozwój osobisty",
            url: "/rozwoj-osobisty",
        },
        {
            name: "Psycholog dla młodzieży",
            url: "/psycholog-dla-mlodziezy",
        },
        {
            name: "Psycholog online",
            url: "/psycholog-online",
        },
        {
            name: "Blog",
            url: "/blog",
        },
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
        api_url: "/",
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
            code: "name",
            message: "Wpisz imię",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: "email",
            message: "Wpisz poprawny adres email",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: "message",
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

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const contactFormSubmit = async (e, data) => {
    e.preventDefault();

    let res: any = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data })
    })
        .then(res => {
            if (res) {
                // console.log('Succes!');
                window.location.reload();
            }
        })
        .catch((error) => console.log(error));



    // res = await res.json()


    // if (res.success) {
    //     return {
    //         result: true,
    //     }
    // }
    // return {
    //     result: false,
    //     ...res,
    // }


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
