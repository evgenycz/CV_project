import { css } from "styled-components";

export const ExperienceMixin = css`
    h2 {
        font-family: Outfit;
        font-size: 20px;
        line-height: 22px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.12px;
    }
    .MainArray {
        display: flex;
        flex-direction: column;
        width: 100%;
        a {
            &:first-child {
                .SubMainPart {
                    border-radius: 20px 20px 0 0;
                }
            }
            &:last-child {
                .SubMainPart {
                    border-radius: 0 0 20px 20px;
                }
            }
        }
        .SubMainPart {
            height: 122px;
            display: flex;
            justify-content: start;
            align-items: center;
            &:not(:first-child) {
                margin-top: 10px;
            }
            .ImageLogo {
                width: 3vw;
            }
            .Clean {
                border-radius: 40%;
            }
            .StepIt {
                border-radius: 40%;
            }
            .Archcom {
                border-radius: 40%;
            }
            .Sipral {
                border-radius: 40%;
            }
            .Rekomont {
                border-radius: 40%;
            }
            .SubMainArray {
                display: flex;
                justify-content: start;
                align-items: center;
                height: 100%;
                .SubListArray {
                    margin-left: 2vw;
                    p {
                        margin-bottom: 5px;
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: 400;
                        letter-spacing: 0.07px;
                    }
                    h3 {
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: 600;
                    }
                }
                .SecondSubListArray {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    li {
                        span {
                            font-family: DM Sans;
                            font-style: normal;
                            font-weight: 400;
                            letter-spacing: 0.06px;
                        }
                        .LocationArray {
                            display: flex;
                            align-items: center;
                            img {
                                margin-right: 5px;
                            }
                            h5 {
                                font-family: DM Sans;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                                letter-spacing: 0.05px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        padding-top: 60px;
        margin: 0 auto;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainArray {
            margin-top: 30px;
            width: 80vw;
            a {
                width: 80vw;
                height: 88px;
            }
            .SubMainPart {
                height: 80px;
                width: 100%;
            }
            .ImageLogo {
                width: 3vw;
                margin-left: 4vw;
            }
            .StepImg {
                width: 3vw;
                margin-left: 4vw;
            }
            .Clean {
                width: 3vw;
            }
            .StepIt {
                width: 3vw;
                height: 3vw;
            }
            .Archcom {
                width: 3vw;
                height: 3vw;
            }
            .Sipral {
                width: 3vw;
            }
            .Rekomont {
                width: 3vw;
            }
            .SubMainArray {
                width: 80vw;
                .SubListArray {
                    width: 25vw;
                    p {
                        font-size: 10px;
                        line-height: 12px;
                        white-space: nowrap;
                    }
                    h3 {
                        font-size: 12px;
                        line-height: 14px;
                    }
                }
                .SecondSubListArray {
                    width: 42vw;
                    margin-right: 10px;
                    li {
                        span {
                            font-size: 12px;
                            line-height: 14px;
                            white-space: nowrap;
                        }
                        .LocationArray {
                            margin-top: 5px;
                            img {
                                width: 2.6vw;
                            }
                            h5 {
                                font-size: 9px;
                                white-space: nowrap;
                                margin-top: -2px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-top: 60px;
        margin: 0 auto;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainArray {
            margin-top: 30px;
            width: 80vw;
            a {
                width: 80vw;
                height: 88px;
            }
            .SubMainPart {
                height: 80px;
                width: 100%;
            }
            .ImageLogo {
                width: 3vw;
                margin-left: 4vw;
            }
            .StepImg {
                width: 3vw;
                margin-left: 4vw;
            }
            .Clean {
                width: 3vw;
            }
            .StepIt {
                width: 3vw;
                height: 3vw;
            }
            .Archcom {
                width: 3vw;
                height: 3vw;
            }
            .Sipral {
                width: 3vw;
            }
            .Rekomont {
                width: 3vw;
            }
            .SubMainArray {
                width: 80vw;
                .SubListArray {
                    width: 25vw;
                    p {
                        font-size: 10px;
                        line-height: 12px;
                    }
                    h3 {
                        font-size: 12px;
                        line-height: 14px;
                    }
                }
                .SecondSubListArray {
                    width: 42vw;
                    margin-right: 10px;
                    li {
                        span {
                            font-size: 12px;
                            line-height: 14px;
                            white-space: nowrap;
                        }
                        .LocationArray {
                            margin-top: 5px;
                            img {
                                width: 1.5vw;
                            }
                            h5 {
                                font-size: 9px;
                                white-space: nowrap;
                                margin-top: -2px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        padding-top: 24px;
        padding-left: 15px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainArray {
            margin-top: 30px;
            a {
                width: 60vw;
                height: 88px;
            }
            .SubMainPart {
                height: 80px;
                width: 60vw;
            }
            .ImageLogo {
                width: 3vw;
                margin-left: 30px;
            }
            .StepImg {
                width: 3vw;
                margin-left: 30px;
            }
            .Clean {
                width: 3vw;
            }
            .StepIt {
                width: 3vw;
                height: 3vw;
            }
            .Archcom {
                width: 3vw;
                height: 3vw;
            }
            .Sipral {
                width: 3vw;
            }
            .Rekomont {
                width: 3vw;
            }
            .SubMainArray {
                width: 60vw;
                .SubListArray {
                    width: 30vw;
                    p {
                        font-size: 12px;
                        line-height: 14px;
                    }
                    h3 {
                        font-size: 14px;
                        line-height: 16px;
                    }
                }
                .SecondSubListArray {
                    width: 20vw;
                    margin-left: -20px;
                    li {
                        span {
                            font-size: 12px;
                            line-height: 14px;
                        }
                        .LocationArray {
                            margin-top: 5px;
                            img {
                                width: 1vw;
                            }
                            h5 {
                                font-size: 10px;
                                margin-top: -3px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        padding-top: 33px;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainArray {
            margin-top: 30px;
            a {
                width: 60vw;
                height: 88px;
                &:hover {
                    transform: translateX(10px);
                    transition: 0.5s;
                }
            }
            .SubMainPart {
                height: 80px;
                width: 60vw;
            }
        }
        .ImageLogo {
            width: 3vw;
            margin-left: 30px;
        }
        .StepImg {
            width: 3vw;
            margin-left: 30px;
        }
        .Clean {
            width: 3vw;
        }
        .StepIt {
            width: 3vw;
            height: 3vw;
        }
        .Archcom {
            width: 3vw;
            height: 3vw;
        }
        .Sipral {
            width: 3vw;
        }
        .Rekomont {
            width: 3vw;
        }
        .SubMainArray {
            width: 60vw;
            .SubListArray {
                width: 30vw;
                p {
                    font-size: 14px;
                    line-height: 16px;
                }
                h3 {
                    font-size: 16px;
                    line-height: 18px;
                }
            }
            .SecondSubListArray {
                width: 20vw;
                li {
                    span {
                        font-size: 14px;
                        line-height: 16px;
                    }
                    .LocationArray {
                        margin-top: 5px;
                        img {
                            width: 1vw;
                        }
                        h5 {
                            margin-top: -5px;
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        padding-top: 42px;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainArray {
            margin-top: 40px;
            width: 60vw;
            a {
                width: 60vw;
                height: 88px;
                &:hover {
                    transform: translateX(10px);
                    transition: 0.5s;
                }
            }
            .SubMainPart {
                height: 80px;
            }
        }
        .ImageLogo {
            width: 2vw;
            margin-left: 30px;
        }
        .StepImg {
            width: 3vw;
            margin-left: 30px;
        }
        .Clean {
            width: 2vw;
        }
        .StepIt {
            width: 2vw;
            height: 2vw;
        }
        .Archcom {
            width: 2vw;
            height: 30px;
        }
        .Sipral {
            width: 2vw;
        }
        .Rekomont {
            width: 2vw;
        }
        .SubMainArray {
            width: 60vw;
            .SubListArray {
                width: 30vw;
                p {
                    font-size: 14px;
                    line-height: 16px;
                }
                h3 {
                    font-size: 16px;
                    line-height: 18px;
                }
            }
            .SecondSubListArray {
                width: 20vw;
                li {
                    span {
                        font-size: 14px;
                        line-height: 16px;
                    }
                    .LocationArray {
                        margin-top: 5px;
                        img {
                            width: 1vw;
                        }
                        h5 {
                            margin-top: -5px;
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        padding-top: 2.3vw;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainArray {
            margin-top: 2.3vw;
            a {
                width: 60vw;
                height: 4.85vw;
                &:hover {
                    transform: translateX(10px);
                    transition: 0.5s;
                }
            }
            .SubMainPart {
                height: 4.5vw;
                width: 60vw;
            }
        }
        .ImageLogo {
            width: 2vw;
            margin-left: 30px;
        }
        .StepImg {
            width: 3vw;
            margin-left: 30px;
        }
        .Clean {
            width: 2vw;
        }
        .StepIt {
            width: 2vw;
            height: 2vw;
        }
        .Archcom {
            width: 2vw;
            height: 2vw;
        }
        .Sipral {
            width: 2vw;
        }
        .Rekomont {
            width: 2vw;
        }
        .SubMainArray {
            width: 60vw;
            .SubListArray {
                width: 30vw;
                p {
                    font-size: 14px;
                    line-height: 16px;
                }
                h3 {
                    font-size: 16px;
                    line-height: 18px;
                }
            }
            .SecondSubListArray {
                width: 20vw;
                li {
                    span {
                        font-size: 14px;
                        line-height: 16px;
                    }
                    .LocationArray {
                        margin-top: 5px;
                        img {
                            width: 0.6vw;
                        }
                        h5 {
                            font-size: 10px;
                            margin-top: -4px;
                        }
                    }
                }
            }
        }
    }
`;
