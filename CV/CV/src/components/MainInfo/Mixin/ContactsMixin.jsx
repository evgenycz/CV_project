import { css } from "styled-components";

export const ContactsMixin = css`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        margin-left: 15px;
        .MainArray {
            .ImageArray {
                width: 20%;
                img {
                    border-radius: 100px;
                    width: 1.3vw;
                    padding: 3px 3px;
                }
            }
            .TextArray {
                .ContactArray {
                    .TextSubArray {
                        margin-left: 5px;
                        width: 85%;
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 8px;
                        }
                        .TextOfContact {
                            font-size: 8px;
                            line-height: 8px;
                            word-break: break-word;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        margin-left: 30px;
        .MainArray {
            .ImageArray {
                width: 20%;
                img {
                    border-radius: 100px;
                    width: 1.3vw;
                    padding: 3px 3px;
                }
            }
            .TextArray {
                .ContactArray {
                    .TextSubArray {
                        width: 85%;
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 12px;
                        }
                        .TextOfContact {
                            font-size: 10px;
                            line-height: 12px;
                            word-break: break-word;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        margin-left: 30px;
        .MainArray {
            .ImageArray {
                width: 20%;
                img {
                    border-radius: 100px;
                    width: 1.3vw;
                    padding: 3px 3px;
                }
            }
            .TextArray {
                .ContactArray {
                    .TextSubArray {
                        width: 85%;
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 12px;
                        }
                        .TextOfContact {
                            font-size: 10px;
                            line-height: 12px;
                            word-break: break-word;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        margin-left: 50px;
        .MainArray {
            .ImageArray {
                width: 20%;
                img {
                    border-radius: 100px;
                    width: 1.5vw;
                    padding: 5px 5px;
                }
            }
            .TextArray {
                .ContactArray {
                    .TextSubArray {
                        width: 85%;
                        .NameOfContact {
                            font-size: 10px;
                            line-height: 12px;
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
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        margin-left: 50px;
        .MainArray {
            .ImageArray {
                width: 20%;
                img {
                    border-radius: 100px;
                    width: 1.5vw;
                    padding: 5px 5px;
                }
            }
            .TextArray {
                .ContactArray {
                    .TextSubArray {
                        width: 85%;
                        .NameOfContact {
                            font-size: 12px;
                            line-height: 14px;
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
    @media screen and (min-width: 1800px) {
        margin-left: 100px;
        .MainArray {
            .ImageArray {
                width: 20%;
                img {
                    border-radius: 100px;
                    width: 1.5vw;
                    padding: 10px 10px;
                }
            }
            .TextArray {
                .ContactArray {
                    .TextSubArray {
                        width: 80%;
                        .NameOfContact {
                            font-size: 14px;
                            line-height: 16px;
                        }
                        .TextOfContact {
                            font-size: 16px;
                            line-height: 18px;
                        }
                    }
                }
            }
        }
    }

    margin-top: 50px;
    width: 20vw;
    .MainArray {
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        .TextArray {
            .ContactArray {
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;
                height: 53.5px;
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
