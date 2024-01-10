import { css } from "styled-components";

export const LanguageMixin = css`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        margin: 0 auto;
        margin-top: 30px;
        .MainArray {
            width: 80vw;
            height: 60px;
            .TextArray {
                .ContactArray {
                    flex-direction: column;
                    width: 25vw;
                    height: 60px;
                    .ImageArrayCZ {
                        img {
                            width: 5vw;
                        }
                    }
                    .ImageArrayRU {
                        img {
                            width: 5vw;
                        }
                    }
                    .ImageArrayEN {
                        img {
                            width: 5vw;
                        }
                    }
                    .TextSubArray {
                        width: 20vw;
                        margin-top: 5px;
                        ul {
                            height: 35px;
                        }
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 10px;
                            text-align: center;
                        }
                        .TextOfContact {
                            font-size: 10px;
                            line-height: 10px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        margin: 0 auto;
        margin-top: 30px;
        .MainArray {
            width: 80vw;
            .TextArray {
                .ContactArray {
                    height: 53.5px;
                    width: 100%;
                    flex-direction: column;
                    width: 20vw;
                    .ImageArrayCZ {
                        img {
                            width: 5vw;
                        }
                    }
                    .ImageArrayRU {
                        img {
                            width: 5vw;
                        }
                    }
                    .ImageArrayEN {
                        img {
                            width: 5vw;
                        }
                    }
                    .TextSubArray {
                        width: 20vw;
                        margin-top: 5px;
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 12px;
                            text-align: center;
                        }
                        .TextOfContact {
                            font-size: 10px;
                            line-height: 12px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        margin-left: 30px;
        width: 20vw;
        .MainArray {
            height: 200px;
            flex-direction: column;
            width: 100%;
            .TextArray {
                .ContactArray {
                    height: 53.5px;
                    width: 100%;
                    .ImageArrayCZ {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayRU {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayEN {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .TextSubArray {
                        width: 80%;
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 12px;
                        }
                        .TextOfContact {
                            font-size: 10px;
                            line-height: 12px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        margin-left: 50px;
        width: 20vw;
        .MainArray {
            height: 200px;
            flex-direction: column;
            width: 100%;
            .TextArray {
                .ContactArray {
                    height: 53.5px;
                    width: 100%;
                    .ImageArrayCZ {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayRU {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayEN {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .TextSubArray {
                        width: 80%;
                        .NameOfContact {
                            font-size: 12px;
                            line-height: 14px;
                        }
                        .TextOfContact {
                            font-size: 10px;
                            line-height: 12px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        margin-left: 50px;
        width: 20vw;
        .MainArray {
            flex-direction: column;
            height: 200px;
            width: 100%;
            .TextArray {
                .ContactArray {
                    height: 53.5px;
                    width: 100%;
                    .ImageArrayCZ {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayRU {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayEN {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .TextSubArray {
                        width: 80%;
                        .NameOfContact {
                            font-size: 14px;
                            line-height: 16px;
                        }
                        .TextOfContact {
                            font-size: 12px;
                            line-height: 14px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        margin-left: 100px;
        width: 20vw;
        .MainArray {
            flex-direction: column;
            height: 200px;
            width: 100%;
            .TextArray {
                .ContactArray {
                    height: 53.5px;
                    width: 100%;
                    .ImageArrayCZ {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayRU {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .ImageArrayEN {
                        width: 20%;
                        img {
                            width: 2.5vw;
                        }
                    }
                    .TextSubArray {
                        width: 80%;
                        .NameOfContact {
                            font-size: 16px;
                            line-height: 18px;
                        }
                        .TextOfContact {
                            font-size: 14px;
                            line-height: 16px;
                        }
                    }
                }
            }
        }
    }
    margin-top: 50px;
    .MainArray {
        display: flex;
        justify-content: space-between;
        .TextArray {
            .ContactArray {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .ImageArrayCZ {
                    img {
                        border-radius: 10px;
                    }
                }
                .ImageArrayRU {
                    img {
                        border-radius: 10px;
                    }
                }
                .ImageArrayEN {
                    img {
                        border-radius: 10px;
                    }
                }
                .TextSubArray {
                    .NameOfContact {
                        margin-bottom: 5px;
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: 500;
                        letter-spacing: 0.06px;
                    }
                    .TextOfContact {
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: 500;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`;
