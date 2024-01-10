import { Components } from ".";
import {
    MainInfoStyled,
    DarkMainInfoStyled,
} from "./components/MainInfoStyled";
import PropTypes from "prop-types";

export const MainInfo = ({ ChangeTheme, handleClick }) => {
    const { AboutMe, Contacts, Languages, Socials } = Components;
    const StyledMain = ChangeTheme(MainInfoStyled, DarkMainInfoStyled);

    return (
        <StyledMain>
            <AboutMe ChangeTheme={ChangeTheme} handleClick={handleClick} />
            <Contacts ChangeTheme={ChangeTheme} />
            <Socials ChangeTheme={ChangeTheme} />
            <Languages ChangeTheme={ChangeTheme} />
        </StyledMain>
    );
};

MainInfo.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
};
