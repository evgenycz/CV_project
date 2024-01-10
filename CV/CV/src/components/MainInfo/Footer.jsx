import { FooterStyled, DarkFooterStyled } from "./components/FooterStyled";
import {
    myMail,
    website,
    myPhone,
    address,
} from "./Contacts/components/img/images";
import {
    instagram,
    twiter,
    linkedin,
    facebook,
} from "./Socials/components/img/images";
import PropTypes from "prop-types";

export const Footer = ({ ChangeTheme }) => {
    const FooterChangeStyle = ChangeTheme(FooterStyled, DarkFooterStyled);

    return (
        <FooterChangeStyle>
            <ul>
                <li>
                    <a
                        href="mailto:evgeny.shevchuk2@gmail.com "
                        target="_blank"
                        rel="noreferrer"
                        className="TextOfContact"
                    >
                        <ul className="Contacts">
                            <li>
                                <img src={myMail} alt="email" />
                            </li>
                            <li>
                                <span> evgeny.shevchuk</span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/evgenycz?tab=repositories"
                        className="TextOfContact"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ul className="Contacts">
                            <li>
                                <img src={website} alt="website" />
                            </li>
                            <li>
                                <span>evgenycz</span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="tel: +420774935979" className="TextOfContact">
                        <ul className="Contacts">
                            <li>
                                <img src={myPhone} alt="phone" />
                            </li>
                            <li>
                                <span>+420774935979</span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a
                        href="https://maps.app.goo.gl/9P5VYmn1ij1NBm8w5"
                        target="_blank"
                        rel="noreferrer"
                        className="TextOfContact"
                    >
                        <ul className="Contacts">
                            <li>
                                <img src={address} alt="address" />
                            </li>
                            <li>
                                <span>Prague, Czech Republic</span>
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a
                        href="https://www.instagram.com/sedoycz/"
                        className="TextOfContact"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ul className="Socials">
                            <li className="Instagram">
                                <img src={instagram} alt="instagram" />
                            </li>
                            <li>
                                <span>@sedoycz</span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/evzen.sevcuk"
                        className="TextOfContact"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ul className="Socials">
                            <li className="Facebook">
                                <img src={facebook} alt="facebook" />
                            </li>
                            <li>
                                <span>@evzen.sevcuk</span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/evgeny_she93737"
                        className="TextOfContact"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ul className="Socials">
                            <li className="Twiter">
                                <img src={twiter} alt="twiter" />
                            </li>
                            <li>
                                <span>@evgeny_she93737</span>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/evgeny-shevchuk-6b063120a/"
                        target="_blank"
                        rel="noreferrer"
                        className="TextOfContact"
                    >
                        <ul className="Socials">
                            <li className="Link">
                                <img src={linkedin} alt="linkedin" />
                            </li>
                            <li>
                                <span>@evgeny-shevchuk</span>
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
        </FooterChangeStyle>
    );
};

Footer.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
};
