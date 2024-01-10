import { styled } from "styled-components";
import { FooterMixin } from "../Mixin/FooterMixin";

export const FooterStyled = styled.div`
    ${FooterMixin}
    background: #FFF;
    ul {
        li {
            a {
                .Contacts {
                    img {
                        background: var(--Gray-Lightest, #e2e6ee);
                    }
                    span {
                        color: var(--Gray-Dark, #47516b);
                    }
                }
                .Socials {
                    .Twiter {
                        img {
                            background: var(--Social-Twitter, #00acee);
                        }
                    }
                    .Link {
                        img {
                            background: var(--Social-Linkedin, #0077b5);
                        }
                    }
                    span {
                        color: var(--Gray-Dark, #47516b);
                    }
                }
            }
        }
    }
`;
export const DarkFooterStyled = styled.div`
    ${FooterMixin}
    background: #232339;
    ul {
        li {
            a {
                .Contacts {
                    img {
                        background: var(--Gray-Darker, #2e2e48);
                    }
                    span {
                        color: var(--Gray-Lighter, #d9dfe8);
                    }
                }
                .Socials {
                    .Twiter {
                        img {
                            background: var(--Social-Twitter, #00acee);
                        }
                    }
                    .Link {
                        img {
                            background: var(--Social-Linkedin, #0077b5);
                        }
                    }
                    span {
                        color: var(--Gray-Lighter, #d9dfe8);
                    }
                }
            }
        }
    }
`;
