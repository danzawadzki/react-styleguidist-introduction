module.exports = {
    webpackConfig: require("react-scripts/config/webpack.config"),
    title: "React Styleguidist - introduction",
    styles: {
        StyleGuide: {
            logo: {
                border: "none"
            }
        },
        Logo: {
            logo: {
                color: "#fff",
                fontWeight: 300,
                fontSize: 25
            }
        },
        Playground: {
            preview: {
                fontFamily: '"Helvetica"',
                fontWeight: 300
            }
        }
    },
    theme: {
        fontFamily: {
            fontFamily: '"Helvetica"'
        },
        maxWidth: "100%",
        sidebarWidth: 250,
        color: {
            link: "rgba(255, 255, 255, .75)",
            linkHover: "rgba(255, 255, 255, 1)",
            sidebarBackground: "#61dafb"
        }
    }
};
