import { ComponentsAll } from "./components";
import { AllInfoStyled, DarkAllInfoStyled } from "./components/AllInfoStyled";

export const AllInfo = ({ ChangeTheme }) => {
    const AllInfoChangeStyle = ChangeTheme(AllInfoStyled, DarkAllInfoStyled);

    const { LatestProjects, Experience, Skills, Education } = ComponentsAll;

    return (
        <AllInfoChangeStyle>
            <LatestProjects ChangeTheme={ChangeTheme} />
            <Experience ChangeTheme={ChangeTheme} />
            <Skills ChangeTheme={ChangeTheme} />
            <Education ChangeTheme={ChangeTheme} />
        </AllInfoChangeStyle>
    );
};
