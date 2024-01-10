import {
    ExperienceStyled,
    DarkExperienceStyled,
} from "./components/ExperienceStyled";
import PropTypes from "prop-types";
import {
    rekomont,
    sipral,
    archcom,
    clean,
    location,
    step,
} from "./components/img/images";

export const Experience = ({ ChangeTheme }) => {
    const ExperienceChangeTheme = ChangeTheme(
        ExperienceStyled,
        DarkExperienceStyled
    );

    return (
        <ExperienceChangeTheme>
            <h2>Experience</h2>
            <ul className="MainArray">
                <a
                    href="https://www.instagram.com/clean_bureau_prague/?hl=cs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="SubMainPart">
                        <ul className="SubMainArray">
                            <li className="ImageLogo">
                                <img
                                    src={clean}
                                    alt="clean bureau"
                                    className="Clean"
                                />
                            </li>
                            <li>
                                <ul className="SubListArray">
                                    <li>
                                        <p>
                                            Fullstack / Web <br />
                                            developer
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Clean Bureau</h3>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="SecondSubListArray">
                                    <li>
                                        <span>Nov 23 - Dec 2023</span>
                                    </li>
                                    <li>
                                        <ul className="LocationArray">
                                            <li>
                                                <img
                                                    src={location}
                                                    alt="location"
                                                />
                                            </li>
                                            <li>
                                                <h5>Prague, Czech Republic</h5>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </a>
                <a
                    href="https://praha.itstep.org/?gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi1IGg7WwzMkQ5UZuZG1qJylWdWbviLY1ogNc95sXPbmy-j0Y5XDCioaAsQFEALw_wcB"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="SubMainPart">
                        <ul className="SubMainArray">
                            <li className="StepImg">
                                <img
                                    src={step}
                                    alt="stepit"
                                    className="StepIt"
                                />
                            </li>
                            <li>
                                <ul className="SubListArray">
                                    <li>
                                        <p>Student</p>
                                    </li>
                                    <li>
                                        <h3>Step IT</h3>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="SecondSubListArray">
                                    <li>
                                        <span>Feb 23 - Dec 2023</span>
                                    </li>
                                    <li>
                                        <ul className="LocationArray">
                                            <li>
                                                <img
                                                    src={location}
                                                    alt="location"
                                                />
                                            </li>
                                            <li>
                                                <h5>Prague, Czech Republic</h5>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </a>
                <a
                    href="https://www.archcom.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="SubMainPart">
                        <ul className="SubMainArray">
                            <li className="ImageLogo">
                                <img
                                    src={archcom}
                                    alt="archcom"
                                    className="Archcom"
                                />
                            </li>
                            <li>
                                <ul className="SubListArray">
                                    <li>
                                        <p>Revit Designer</p>
                                    </li>
                                    <li>
                                        <h3>Archcom</h3>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="SecondSubListArray">
                                    <li>
                                        <span>Jan 22 - Nov 2023</span>
                                    </li>
                                    <li>
                                        <ul className="LocationArray">
                                            <li>
                                                <img
                                                    src={location}
                                                    alt="location"
                                                />
                                            </li>
                                            <li>
                                                <h5>Prague, Czech Republic</h5>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </a>
                <a
                    href="https://www.sipral.cz/cz/jednotka?uid=218"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="SubMainPart">
                        <ul className="SubMainArray">
                            <li className="ImageLogo">
                                <img
                                    src={sipral}
                                    alt="sipral"
                                    className="Sipral"
                                />
                            </li>
                            <li>
                                <ul className="SubListArray">
                                    <li>
                                        <p>Revit Designer</p>
                                    </li>
                                    <li>
                                        <h3>Sipral</h3>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="SecondSubListArray">
                                    <li>
                                        <span>Jan 20 - Dec 2021</span>
                                    </li>
                                    <li>
                                        <ul className="LocationArray">
                                            <li>
                                                <img
                                                    src={location}
                                                    alt="location"
                                                />
                                            </li>
                                            <li>
                                                <h5>Prague, Czech Republic</h5>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li></li>
                        </ul>
                    </li>
                </a>
                <a
                    href="https://www.rekomont.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="SubMainPart">
                        <ul className="SubMainArray">
                            <li className="ImageLogo">
                                <img
                                    src={rekomont}
                                    alt="rekomont"
                                    className="Rekomont"
                                />
                            </li>
                            <li>
                                <ul className="SubListArray">
                                    <li>
                                        <p>Construction preparer</p>
                                    </li>
                                    <li>
                                        <h3>Rekomont</h3>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="SecondSubListArray">
                                    <li>
                                        <span>Jan 18 - Dec 2019</span>
                                    </li>
                                    <li>
                                        <ul className="LocationArray">
                                            <li>
                                                <img
                                                    src={location}
                                                    alt="location"
                                                />
                                            </li>
                                            <li>
                                                <h5>Prague, Czech Republic</h5>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </a>
            </ul>
        </ExperienceChangeTheme>
    );
};

Experience.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
