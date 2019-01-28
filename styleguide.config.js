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
                fontSize: 25
            }
        },
        Playground: {
            preview: {
                fontFamily: '"Helvetica"',
                fontWeight: 300,
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: [[0, 0, 1, 0]],
                borderRadius: 0
            }
        },
        Markdown: {
            pre: {
                border: 0,
                background: "none"
            },
            code: {
                fontSize: 14
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
