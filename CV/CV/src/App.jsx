import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AllComponents } from "./components";
import { AppStyled, DarkAppStyled } from "./components/AppStyled";
import { ComponentsAll } from "./components/AllInfo/components";
import { Components } from "./components/MainInfo";

const MainStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
}
ul{
  list-style: none;
  padding:0;
  margin:0;
}
body{
  background: ${(props) => props.theme.background};
}
a{
    text-decoration: none;
}
`;

export const App = ({ StyleContext }) => {
    const useStyleContext = useContext(StyleContext);
    const { MainInfo, Geometry, AllInfo, Header, Footer } = AllComponents;
    const AppStyledAll = useStyleContext.ChangeTheme(AppStyled, DarkAppStyled);
    const themeObject = {
        background: AppStyledAll === AppStyled ? "#f7f9fc" : "#2e2e48",
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleSize);

        return () => window.removeEventListener("resize", handleSize);
    }, []);

    const { LatestProjects, Experience, Skills, Education } = ComponentsAll;

    const { Languages } = Components;

    if (windowWidth >= 320 && windowWidth <= 768) {
        return (
            <ThemeProvider theme={themeObject}>
                <AppStyledAll>
                    <MainStyled />
                    <Header {...useStyleContext} />
                    <h1>Ing. Evgeny Shevchuk</h1>
                    <h2>Frontend Developer Junior</h2>
                    <LatestProjects {...useStyleContext} />
                    <Skills {...useStyleContext} />
                    <Experience {...useStyleContext} />
                    <Education {...useStyleContext} />
                    <h6>Languages</h6>
                    <Languages {...useStyleContext} />
                    <Footer {...useStyleContext} />
                </AppStyledAll>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={themeObject}>
                <AppStyledAll>
                    <MainStyled />
                    <MainInfo {...useStyleContext} />
                    <Geometry {...useStyleContext} />
                    <AllInfo {...useStyleContext} />
                </AppStyledAll>
            </ThemeProvider>
        );
    }
};

App.propTypes = {
    StyleContext: PropTypes.any.isRequired,
};
