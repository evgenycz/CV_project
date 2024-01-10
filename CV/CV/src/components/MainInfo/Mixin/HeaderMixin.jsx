import { css } from "styled-components";

export const HeaderMixin = css`
    width: 100%;
    button {
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 10px;
        margin-right: 10px;
        border: none;
        padding: 5px;
        border-radius: 10px;
        box-shadow: 0px 0px 0px 0.5px #5531a7;
        &:hover {
            transform: scale(1.1);
            transition: 0.5s;
        }
        &:active {
            transform: scale(0.9);
            transition: 0.2s;
        }
    }
    ul {
        margin: 30px auto;
        display: flex;
        width: 70vw;
        justify-content: space-between;
        align-items: center;
        li {
            &:nth-child(2) {
                img {
                    width: 8vw;
                }
            }
            &:last-child {
                img {
                    width: 7vw;
                }
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 480px) {
        ul {
            li {
                &:first-child {
                    img {
                        width: 18vw;
                    }
                }
                &:nth-child(2) {
                    img {
                        padding: 5vw;
                        border-radius: 50%;
                    }
                }
                &:last-child {
                    img {
                        padding: 5.152vw 5.5vw;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        ul {
            li {
                &:first-child {
                    img {
                        width: 11.997vw;
                    }
                }
                &:nth-child(2) {
                    img {
                        padding: 2vw;
                        border-radius: 50%;
                    }
                }
                &:last-child {
                    img {
                        padding: 2.15vw 2.5vw;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
`;
