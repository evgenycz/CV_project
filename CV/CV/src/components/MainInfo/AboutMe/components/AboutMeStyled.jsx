import { styled } from "styled-components";
import { AboutMeMixin } from "../../Mixin/AboutMeMixin";

export const AboutMeStyled = styled.section`
    ${AboutMeMixin}
    border-bottom: 4px solid #e2e6ee;
    padding-bottom: 30px;
    ul {
        li {
            h1 {
                color: var(--Gray-Darker, #2e2e48);
            }
            h3 {
                background: var(
                    --Gradient-Primary,
                    linear-gradient(90deg, #a478e8 0%, #516cf7 100%)
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .Citation {
                p {
                    color: var(--Gray-Dark, #47516b);
                }
            }
        }
    }
    button {
        background: #fff;
        color: #516cf7;
        opacity: 0.9;
    }
`;

export const DarkAboutMeStyled = styled.section`
    ${AboutMeMixin}
    border-bottom: 4px solid #2E2E48;
    padding-bottom: 30px;
    ul {
        li {
            h1 {
                color: var(--Gray-Lightest, #e2e6ee);
            }
            h3 {
                background: var(
                    --Gradient-Primary,
                    linear-gradient(90deg, #a478e8 0%, #516cf7 100%)
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .Citation {
                p {
                    color: var(--Gray-Lighter, #d9dfe8);
                }
            }
        }
    }
    button {
        background: #232339;
        color: #fff;
        backdrop-filter: blur(10px);
        opacity: 0.9;
    }
`;
