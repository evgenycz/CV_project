import { styled } from "styled-components";
import { HeaderMixin } from "../Mixin/HeaderMixin";

export const HeaderStyled = styled.div`
    ${HeaderMixin}
    background: #FFF;
    button {
        background: #fff;
        color: #516cf7;
        opacity: 0.9;
    }
    ul {
        li {
            &:nth-child(2) {
                img {
                    background: var(--Gray-Lightest, #e2e6ee);
                }
            }
            &:last-child {
                img {
                    background: var(--Social-Linkedin, #0077b5);
                }
            }
        }
    }
`;
export const DarkHeaderStyled = styled.div`
    ${HeaderMixin}
    background: #232339;
    button {
        background: #232339;
        color: #fff;
        backdrop-filter: blur(10px);
        opacity: 0.9;
    }
    ul {
        li {
            &:nth-child(2) {
                img {
                    background: var(--Gray-Darker, #2e2e48);
                }
            }
            &:last-child {
                img {
                    background: var(--Social-Linkedin, #0077b5);
                }
            }
        }
    }
`;
