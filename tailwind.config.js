const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#111",
                bgalt: "#000",
                "color-default": "#eee",
                "color-1": "#c35fde",
                "color-2": "#adbfef",
                border: "#718096",
                primary: "#f55555",
                medium: "#222"
            },
        },
        colors: {
            bg: "#fff",
            bgalt: "#f5f5f5",
            "color-default": "#333",
            "color-1": "#006C4C", //#564787
            // "color-1": "#006C4C",
            "color-2": "#000",
            // "color-2": "#7DDAAA",
            "color-3": "#aeb4c5",
            "color-4": "#B91C4F",
            // "color-3": "#006C4C",
            primary: "#006C4C", //#7DDAAA
            secondary: "#99BDCA", //#006C4C
            link: "#006C4C",
            medium: "#cfd8dc",
            white: "#fff",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            success: "#8bc34a"
        },
        extend: {
            fontSize: {
                '7xl': '5rem'
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            },
            maxWidth: {
                'screen-lg': '1200px', // Domyślnie 1024px, zmień na żądaną wartość
                'screen-md': '768px',  // Domyślnie 768px, zmień na żądaną wartość
              }
        
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}


