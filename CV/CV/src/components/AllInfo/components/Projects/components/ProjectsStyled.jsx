import { styled } from "styled-components";
import { ProjectMixin } from "../../Mixin/ProjectsMixin";

export const ProjectsStyled = styled.div`
    ${ProjectMixin}
    h2 {
        color: #2e2e48;
    }
    .MainProjects {
        .PartOfMainArray {
            background: white;
            .SubProject {
                h3 {
                    color: #2e2e48;
                }
                p {
                    color: #79819a;
                }
                a {
                    .SubArray {
                        img {
                            background: var(--Secondary-Lighter, #e1e7fe);
                        }
                        span {
                            color: #516cf7;
                        }
                    }
                }
            }
        }
    }
`;

export const DarkProjectsStyled = styled.div`
    ${ProjectMixin}
    h2 {
        color: #e2e6ee;
    }
    .MainProjects {
        .PartOfMainArray {
            background: #232339;
            .SubProject {
                h3 {
                    color: #e2e6ee;
                }
                p {
                    color: #acb1c3;
                }
                a {
                    .SubArray {
                        img {
                            background: #2a337e;
                        }
                        span {
                            color: #95aafb;
                        }
                    }
                }
            }
        }
    }
`;
