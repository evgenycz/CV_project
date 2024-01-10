import { en, cz, ru } from "./components/img/images";

import {
    LanguageStyled,
    DarkLanguageStyled,
} from "./components/LanguagesStyled";
import PropTypes from "prop-types";

export const Languages = ({ ChangeTheme }) => {
    const StyledLanguage = ChangeTheme(LanguageStyled, DarkLanguageStyled);

    return (
        <StyledLanguage>
            <ul className="MainArray">
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayCZ">
                            <img src={cz} alt="language" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Czech</p>
                                </li>
                                <li>
                                    <p className="TextOfContact">
                                        Professional working
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayEN">
                            <img src={en} alt="language" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">English</p>
                                </li>
                                <li>
                                    <p className="TextOfContact">
                                        Intermediate
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="TextArray">
                    <ul className="ContactArray">
                        <li className="ImageArrayRU">
                            <img src={ru} alt="language" />
                        </li>
                        <li className="TextSubArray">
                            <ul>
                                <li>
                                    <p className="NameOfContact">Russian</p>
                                </li>
                                <li>
                                    <p className="TextOfContact">Native</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledLanguage>
    );
};

Languages.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
