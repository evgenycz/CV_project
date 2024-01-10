import { myMail, address, myPhone, website } from "./components/img/images";
import { ContactStyled, DarkContactStyled } from "./components/ContactStyled";
import PropTypes from "prop-types";

export const Contacts = ({ ChangeTheme }) => {
    const StyledContacts = ChangeTheme(ContactStyled, DarkContactStyled);

    return (
        <StyledContacts>
            <ul className="MainArray">
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArray">
                            <img src={myMail} alt="email" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Email</p>
                                </li>
                                <li>
                                    <a
                                        href="mailto:evgeny.shevchuk2@gmail.com "
                                        target="_blank"
                                        rel="noreferrer"
                                        className="TextOfContact"
                                    >
                                        evgeny.shevchuk
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArray">
                            <img src={website} alt="website" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Website</p>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/evgenycz?tab=repositories"
                                        className="TextOfContact"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        evgenycz
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArray">
                            <img src={myPhone} alt="phone" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Phone</p>
                                </li>
                                <li>
                                    <a
                                        href="tel: +420774935979"
                                        className="TextOfContact"
                                    >
                                        +420774935979
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArray">
                            <img src={address} alt="address" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Address</p>
                                </li>
                                <li>
                                    <a
                                        href="https://maps.app.goo.gl/9P5VYmn1ij1NBm8w5"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="TextOfContact"
                                    >
                                        Prague, Czech Republic
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

Contacts.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
