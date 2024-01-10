import {
    ProjectsStyled,
    DarkProjectsStyled,
} from "./components/ProjectsStyled";
import { clean, CV, web } from "./components/img/images";
import PropTypes from "prop-types";

export const LatestProjects = ({ ChangeTheme }) => {
    const ProjectChangeStyled = ChangeTheme(ProjectsStyled, DarkProjectsStyled);

    return (
        <ProjectChangeStyled>
            <h2>Latest Projects</h2>
            <ul className="MainProjects">
                <li className="PartOfMainArray">
                    <ul className="SubProject">
                        <li>
                            <img
                                src={clean}
                                alt="cleanproject"
                                className="BigImage"
                            />
                        </li>
                        <li>
                            <h3>Clean Bureau Web</h3>
                        </li>
                        <li>
                            <p>
                                For this project, I used React for the Front-end
                                and Django for the Back-end. Additionally, the
                                project utilized external libraries such as
                                useForm, framer-motion, styled-components,
                                toast, and spinner-loader.
                            </p>
                        </li>
                        <li>
                            <a
                                href="https://github.com/evgenycz/clean-bureau"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ul className="SubArray">
                                    <li>
                                        <img src={web} alt="web" />
                                    </li>
                                    <li>
                                        <span>Git</span>
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="PartOfMainArray">
                    <ul className="SubProject">
                        <li>
                            <img
                                src={CV}
                                alt="CVproject"
                                className="BigImage"
                            />
                        </li>
                        <li>
                            <h3>CV project</h3>
                        </li>
                        <li>
                            <p>
                                For this CV I used only React, SCSS and couple
                                external libraries: framer-motion,
                                styled-components and svgr.
                            </p>
                        </li>
                        <li>
                            <a
                                href="https://github.com/evgenycz/CV_project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ul className="SubArray">
                                    <img src={web} alt="web" />
                                    <li>
                                        <span>CV</span>
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </ProjectChangeStyled>
    );
};

LatestProjects.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
