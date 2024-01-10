import { instagram, twiter, linkedin, facebook } from "./components/img/images";
import PropTypes from "prop-types";
import { SocialStyled, DarkSocialStyled } from "./components/SocialsStyled";

export const Socials = ({ ChangeTheme }) => {
    const StyledContacts = ChangeTheme(SocialStyled, DarkSocialStyled);

    return (
        <StyledContacts>
            <ul className="MainArray">
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayInst">
                            <img src={instagram} alt="instagram" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Instagram</p>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/sedoycz/"
                                        className="TextOfContact"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        @sedoycz
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayFB">
                            <img src={facebook} alt="facebook" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Facebook</p>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/evzen.sevcuk"
                                        className="TextOfContact"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        @evzen.sevcuk
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayX">
                            <img src={twiter} alt="twiter" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Twiter</p>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/evgeny_she93737"
                                        className="TextOfContact"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        @evgeny_she93737
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayLink">
                            <img src={linkedin} alt="linkedin" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Linkedin</p>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/evgeny-shevchuk-6b063120a/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="TextOfContact"
                                    >
                                        @evgeny-shevchuk
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledContacts>
    );
};

Socials.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
