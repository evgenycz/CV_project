import { css } from "styled-components";

export const FooterMixin = css`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 60px;
    padding-top: 30px;
    padding-bottom: 30px;
    ul {
        li {
            height: 30px;
            a {
                text-decoration: none;
                .Contacts {
                    display: flex;
                    height: 30px;
                    li {
                        display: flex;
                        align-items: center;
                    }
                    img {
                        border-radius: 50%;
                    }
                }
                .Socials {
                    height: 30px;
                    display: flex;
                    li {
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 480px) {
        ul {
            li {
                a {
                    .Contacts {
                        margin-top: 5px;
                        img {
                            width: 3.5vw;
                            padding: 0.4vw 0.4vw;
                            margin-right: 10px;
                        }
                        span {
                            font-size: 10px;
                        }
                    }
                    .Socials {
                        margin-top: 5px;
                        .Instagram {
                            margin-right: 10px;
                            img {
                                width: 4.3vw;
                                height: 4.3vw;
                            }
                        }
                        .Facebook {
                            margin-right: 10px;
                            img {
                                width: 5vw;
                                margin-left: -0.27vw;
                            }
                        }
                        .Twiter {
                            margin-right: 10px;
                            img {
                                width: 3.5vw;
                                height: 3.5vw;
                                padding: 0.4vw 0.4vw;
                                border-radius: 50%;
                            }
                        }
                        .Link {
                            margin-right: 10px;
                            img {
                                width: 3.5vw;
                                height: 3.5vw;
                                padding: 0.4vw 0.4vw;
                                border-radius: 50%;
                            }
                        }
                        span {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        ul {
            li {
                a {
                    .Contacts {
                        margin-top: 10px;
                        img {
                            width: 3vw;
                            padding: 0.27vw 0.27vw;
                            margin-right: 20px;
                        }
                        span {
                            font-size: 12px;
                        }
                    }
                    .Socials {
                        margin-top: 10px;
                        .Instagram {
                            margin-right: 20px;
                            img {
                                width: 3.53vw;
                                height: 3.53vw;
                            }
                        }
                        .Facebook {
                            margin-right: 20px;
                            img {
                                width: 3.9vw;
                                margin-left: -0.27vw;
                            }
                        }
                        .Twiter {
                            margin-right: 20px;
                            img {
                                width: 3vw;
                                height: 3vw;
                                padding: 0.27vw 0.27vw;
                                border-radius: 50%;
                            }
                        }
                        .Link {
                            margin-right: 20px;
                            img {
                                width: 3vw;
                                height: 3vw;
                                padding: 0.27vw 0.27vw;
                                border-radius: 50%;
                            }
                        }
                        span {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
`;
