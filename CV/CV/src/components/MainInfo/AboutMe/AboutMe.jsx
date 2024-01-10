import { AboutMeStyled, DarkAboutMeStyled } from "./components/AboutMeStyled";
import { myfoto, quotesbottom, quotesup } from "./components/img/images";
import PropTypes from "prop-types";

export const AboutMe = ({ handleClick, ChangeTheme }) => {
    const StyledComponentAboutMe = ChangeTheme(
        AboutMeStyled,
        DarkAboutMeStyled
    );

    const ThemeButton =
        StyledComponentAboutMe === AboutMeStyled ? "Dark" : "Light";

    return (
        <StyledComponentAboutMe>
            <ul>
                <li>
                    <img className="UserFoto" src={myfoto} alt="userfoto" />
                </li>
                <li>
                    <h1>Ing. Evgeny Shevchuk</h1>
                </li>
                <li>
                    <h3>Frontend Developer Junior</h3>
                </li>
                <li>
                    <ul className="Citation">
                        <li>
                            <img
                                className="Quotes"
                                src={quotesup}
                                alt="quotes"
                            />
                        </li>
                        <li>
                            <p>You can always become better than you are</p>
                        </li>
                        <li>
                            <img
                                className="QuotesTwo"
                                src={quotesbottom}
                                alt="quotes"
                            />
                        </li>
                    </ul>
                </li>
            </ul>
            <button onClick={handleClick}>{ThemeButton}</button>
        </StyledComponentAboutMe>
    );
};

AboutMe.propTypes = {
    handleClick: PropTypes.func.isRequired,
    ChangeTheme: PropTypes.func.isRequired,
};
