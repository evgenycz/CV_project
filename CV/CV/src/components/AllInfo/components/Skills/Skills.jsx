import { SkillsStyled, SkillsDarkStyled } from "./components/SkillsStyled";
import PropTypes from "prop-types";
import { design, development, building } from "./components/images/images";

export const Skills = ({ ChangeTheme }) => {
    const ChangeSkillsTheme = ChangeTheme(SkillsStyled, SkillsDarkStyled);

    return (
        <ChangeSkillsTheme>
            <h2>Skills</h2>
            <div>
                <section className="ThirdSection">
                    <ul className="MainList">
                        <li className="MainImage">
                            <img
                                src={development}
                                alt="development"
                                className="ImageSVG"
                            />
                        </li>
                        <li>
                            <p>Development</p>
                        </li>
                    </ul>
                    <ul className="SubArray">
                        <li>
                            <h5>JS</h5>
                        </li>
                        <li>
                            <h5>Python</h5>
                        </li>
                    </ul>
                    <ul className="FrontStyle">
                        <li>
                            <h5>HTML</h5>
                        </li>
                        <li>
                            <h5>CSS</h5>
                        </li>
                        <li>
                            <h5>SCSS</h5>
                        </li>
                    </ul>
                    <ul className="FrontStyleSec">
                        <li>
                            <h5>SQL</h5>
                        </li>
                        <li>
                            <h5>SQLite</h5>
                        </li>
                        <li>
                            <h5>PostgreSQL</h5>
                        </li>
                    </ul>
                    <ul className="SubArray">
                        <li>
                            <h5>React</h5>
                        </li>
                        <li>
                            <h5>Django</h5>
                        </li>
                    </ul>
                    <h5 className="TextAlone">Node JS</h5>
                </section>
                <section className="SecondSection">
                    <ul className="Main">
                        <li className="MainImage">
                            <img
                                src={building}
                                alt="building"
                                className="BuildingImage"
                            />
                        </li>
                        <li>
                            <p>Building</p>
                        </li>
                    </ul>
                    <ul className="SubArray">
                        <li>
                            <h5>Revit</h5>
                        </li>
                        <li>
                            <h5>AutoCad</h5>
                        </li>
                    </ul>
                    <h5 className="TextAlone">Kros</h5>
                </section>
                <section className="FirstSection">
                    <ul className="Main">
                        <li className="MainImage">
                            <img
                                src={design}
                                alt="design"
                                className="ImageSVG"
                            />
                        </li>
                        <li>
                            <p>Design</p>
                        </li>
                    </ul>
                    <ul className="SubArray">
                        <li>
                            <h5>
                                Web <br />
                                Design
                            </h5>
                        </li>
                        <li>
                            <h5>Mobile Design</h5>
                        </li>
                    </ul>
                    <h5 className="TextAlone">Figma</h5>
                </section>
            </div>
        </ChangeSkillsTheme>
    );
};

Skills.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
