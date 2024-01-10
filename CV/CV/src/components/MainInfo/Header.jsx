import { HeaderStyled, DarkHeaderStyled } from "./components/HeaderStyled";
import { myfoto } from "./AboutMe/components/img/images";
import { linkedin } from "./Socials/components/img/images";
import { myMail } from "./Contacts/components/img/images";
import PropTypes from "prop-types";

export const Header = ({ ChangeTheme, handleClick }) => {
    const StyledHeader = ChangeTheme(HeaderStyled, DarkHeaderStyled);

    const ThemeButton = StyledHeader === HeaderStyled ? "Dark" : "Light";

    return (
        <StyledHeader>
            <ul>
                <li>
                    <a
                        href="https://www.instagram.com/sedoycz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={myfoto} alt="foto" />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:evgeny.shevchuk2@gmail.com "
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={myMail} alt="mail" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/evgeny-shevchuk-6b063120a/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </li>
            </ul>
            <button onClick={handleClick}>{ThemeButton}</button>
        </StyledHeader>
    );
};

Header.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
};
