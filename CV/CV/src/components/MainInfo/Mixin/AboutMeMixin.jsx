import { css } from "styled-components";

export const AboutMeMixin = css`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        padding-top: 250px;
        margin-left: 15px;
        width: 20vw;
        ul {
            li {
                &:first-child {
                    display: flex;
                    justify-content: center;
                }
                .UserFoto {
                    width: 10vw;
                    margin-bottom: 30px;
                }
                h1 {
                    text-align: center;
                    font-size: 16px;
                }
                h3 {
                    font-size: 14px;
                    line-height: 16px;
                    text-align: center;
                }
                .Citation {
                    width: 18vw;
                    .Quotes {
                        width: 12px;
                    }
                    .QuotesTwo {
                        width: 12px;
                    }
                    p {
                        text-align: center;
                        width: 15vw;
                        font-size: 10px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-top: 250px;
        margin-left: 30px;
        width: 20vw;
        ul {
            li {
                &:first-child {
                    display: flex;
                    justify-content: center;
                }
                .UserFoto {
                    width: 10vw;
                    margin-bottom: 30px;
                }
                h1 {
                    text-align: center;
                    font-size: 16px;
                }
                h3 {
                    font-size: 14px;
                    line-height: 16px;
                    text-align: center;
                }
                .Citation {
                    width: 18vw;
                    .Quotes {
                        width: 12px;
                    }
                    .QuotesTwo {
                        width: 12px;
                    }
                    p {
                        text-align: center;
                        width: 15vw;
                        font-size: 10px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        padding-top: 250px;
        margin-left: 30px;
        width: 20vw;
        ul {
            li {
                .UserFoto {
                    width: 6vw;
                    margin-bottom: 30px;
                }
                h1 {
                    font-size: 22px;
                }
                h3 {
                    font-size: 20px;
                    width: 4035w;
                    line-height: 22px;
                }
                .Citation {
                    width: 22vw;
                    .Quotes {
                        width: 15px;
                    }
                    .QuotesTwo {
                        width: 15px;
                    }
                    p {
                        width: 14vw;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        padding-top: 250px;
        margin-left: 50px;
        width: 20vw;
        ul {
            li {
                .UserFoto {
                    width: 6vw;
                    margin-bottom: 30px;
                }
                h1 {
                    font-size: 22px;
                }
                h3 {
                    font-size: 20px;
                    width: 4035w;
                    line-height: 22px;
                }
                .Citation {
                    width: 22vw;
                    .Quotes {
                        width: 20px;
                    }
                    .QuotesTwo {
                        width: 20px;
                    }
                    p {
                        width: 16vw;
                        font-size: 18px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        padding-top: 250px;
        margin-left: 50px;
        width: 20vw;
        ul {
            li {
                .UserFoto {
                    width: 6vw;
                    margin-bottom: 30px;
                }
                h1 {
                    font-size: 25px;
                }
                h3 {
                    font-size: 22px;
                    width: 4035w;
                    line-height: 25px;
                }
                .Citation {
                    width: 22vw;
                    .Quotes {
                        width: 20px;
                    }
                    .QuotesTwo {
                        width: 20px;
                    }
                    p {
                        width: 14vw;
                        font-size: 18px;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1800px) {
        padding-top: 300px;
        margin-left: 100px;
        width: 20vw;
        ul {
            li {
                .UserFoto {
                    width: 6vw;
                    margin-bottom: 30px;
                }
                h1 {
                    font-size: 30px;
                }
                h3 {
                    font-size: 25px;
                    width: 40vw;
                    line-height: 30px;
                }
                .Citation {
                    width: 22vw;
                    .Quotes {
                        width: 20px;
                    }
                    .QuotesTwo {
                        width: 20px;
                    }
                    p {
                        width: 16vw;
                        font-size: 18px;
                    }
                }
                li {
                    font-size: 30px;
                }
            }
        }
        button {
        }
    }

    ul {
        li {
            h1 {
                font-family: Outfit;
                font-style: normal;
                font-weight: 600;
                line-height: 25px;
                letter-spacing: -0.32px;
                margin-bottom: 10px;
            }
            h3 {
                font-style: normal;
                font-family: Outfit;
                font-weight: 600;
                letter-spacing: 0.12px;
                margin-bottom: 40px;
            }
            .Citation {
                display: flex;
                padding-bottom: 20px;
                width: 22vw;
                position: relative;
                .QuotesTwo {
                    position: absolute;
                    bottom: 0;
                    margin-bottom: 1vh;
                }
                p {
                    font-family: Outfit;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 18px;
                    letter-spacing: 0.18px;
                    margin-left: 1vw;
                }
            }
        }
    }
    button {
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 30px;
        margin-right: 30px;
        border: none;
        padding: 10px;
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
`;
