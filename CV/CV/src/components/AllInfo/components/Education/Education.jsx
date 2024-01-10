import {
    EducationStyled,
    EducationDarkStyled,
} from "./components/EducationStyled";
import { cvut, step, ujop } from "./components/images/images";
import PropTypes from "prop-types";

export const Education = ({ ChangeTheme }) => {
    const EducationChangeTheme = ChangeTheme(
        EducationStyled,
        EducationDarkStyled
    );

    return (
        <EducationChangeTheme>
            <h2>Education</h2>
            <ul className="Main">
                <li className="FirstList">
                    <ul className="MainList">
                        <li>
                            <ul className="StyleEducation">
                                <li>
                                    <img
                                        src={ujop}
                                        alt="ujop"
                                        className="UjopStyle"
                                    />
                                </li>
                                <li>
                                    <h4>UJOP Podebrady</h4>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Czech technical language</h3>
                        </li>
                        <li>
                            <p>Sep 2013 - May 2014</p>
                        </li>
                    </ul>
                </li>
                <li className="SecondList">
                    <ul className="MainList">
                        <li>
                            <ul className="StyleEducationCvut">
                                <li>
                                    <img
                                        src={cvut}
                                        alt="cvut"
                                        className="CvutStyle"
                                    />
                                </li>
                                <li>
                                    <h4>CTU</h4>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Faculty of Civil Engineering</h3>
                        </li>
                        <li>
                            <p>Sep 2014 - Feb 2020</p>
                        </li>
                    </ul>
                </li>
                <li className="ThirdList">
                    <ul className="MainList">
                        <li>
                            <ul className="StyleEducation">
                                <li>
                                    <img
                                        src={step}
                                        alt="step"
                                        className="StepStyle"
                                    />
                                </li>
                                <li>
                                    <h4>StepIT</h4>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Full Stack Developer</h3>
                        </li>
                        <li>
                            <p>Feb 2023 - Dec 2023</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </EducationChangeTheme>
    );
};

Education.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
