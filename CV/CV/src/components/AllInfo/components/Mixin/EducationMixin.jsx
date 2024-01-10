import { css } from "styled-components";

export const EducationMixin = css`
    h2 {
        font-family: Outfit;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.12px;
    }
    .Main {
        display: flex;
        justify-content: space-between;
        .FirstList {
            .MainList {
                border-radius: 30px 0 0 30px;
            }
        }
        .ThirdList {
            .MainList {
                border-radius: 0 15px 15px 0;
                .StyleEducation {
                    .StepStyle {
                        border-radius: 0.5vw;
                    }
                }
            }
        }
        .MainList {
            h3 {
                font-family: DM Sans;
                font-style: normal;
                font-weight: 500;
            }
            p {
                font-family: DM Sans;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.05px;
            }
            .StyleEducation {
                display: flex;
                align-items: center;
                h4 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
            }
            .StyleEducationCvut {
                display: flex;
                align-items: center;
                h4 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
            }
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        padding-top: 60px;
        width: 80vw;
        margin: 0 auto;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .Main {
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            margin-top: 30px;
            width: 80vw;
            height: 300px;
            .FirstList {
                display: flex;
                width: 50vw;
                .MainList {
                    width: 100%;
                    padding: 5px 5px 5px 5px;
                    border-radius: 15px 15px 0 0;
                    h3 {
                        margin: 0 auto;
                        margin-top: 10px;
                        margin-bottom: 5px;
                        width: 70%;
                    }
                    .StyleEducation {
                        margin: 0 auto;
                        margin-top: 5px;
                        justify-content: center;
                        width: 80%;
                        li {
                            &:first-child {
                                display: flex;
                                justify-content: center;
                            }
                        }
                        .UjopStyle {
                            width: 8vw;
                            margin-right: 2vw;
                        }
                    }
                }
            }
            .SecondList {
                width: 50vw;
                .MainList {
                    padding: 5px 5px 5px 5px;
                }
                .StyleEducationCvut {
                    width: 50%;
                    margin: 0 auto;
                    justify-content: center;
                    li {
                        display: flex;
                        justify-content: center;
                    }
                    .CvutStyle {
                        margin-top: 1px;
                        width: 8vw;
                        height: 8vw;
                        margin-right: 2vw;
                    }
                    h4 {
                        margin-top: 0.1vw;
                        font-size: 10px;
                        line-height: 10px;
                    }
                    margin-top: 5px;
                    margin-bottom: 0.75vw;
                }
                h3 {
                    margin: 0 auto;
                    width: 80%;
                    margin-top: 10px;
                    margin-bottom: 5px;
                }
                p {
                    text-align: center;
                }
            }
            .MainList {
                height: 80px;
                p {
                    font-size: 10px;
                    white-space: wrap;
                    text-align: center;
                }
                h3 {
                    font-size: 10px;
                    line-height: 10px;
                    white-space: wrap;
                    text-align: center;
                }
                .StyleEducation {
                    h4 {
                        font-size: 10px;
                        line-height: 10px;
                    }
                }
            }
            .ThirdList {
                width: 50vw;
                .MainList {
                    padding: 5px 5px 5px 5px;
                    border-radius: 0 0 15px 15px;
                    h3 {
                        margin: 0 auto;
                        width: 60%;
                        margin-top: 10px;
                        margin-bottom: 5px;
                    }
                }
                .StyleEducation {
                    margin: 0 auto;
                    margin-top: 5px;
                    justify-content: center;
                    width: 50%;
                    li {
                        display: flex;
                        justify-content: center;
                    }
                    .StepStyle {
                        height: 8vw;
                        margin-right: 2vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-top: 60px;
        width: 80vw;
        margin: 0 auto;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .Main {
            margin: 0 auto;
            margin-top: 30px;
            width: 80vw;
            li {
                width: 25vw;
            }
            .FirstList {
                display: flex;
                width: 25vw;
                .MainList {
                    width: 100%;
                    padding: 5px 5px 5px 5px;
                    border-radius: 15px 0 0 15px;
                    h3 {
                        margin: 0 auto;
                        margin-top: 5px;
                        width: 80%;
                    }
                    .StyleEducation {
                        margin: 0 auto;
                        margin-top: 10px;
                        justify-content: center;
                        width: 80%;
                        li {
                            &:first-child {
                                display: flex;
                                justify-content: center;
                            }
                        }
                        .UjopStyle {
                            width: 4.2vw;
                        }
                    }
                }
            }
            .SecondList {
                width: 25vw;
                .MainList {
                    width: 100%;
                    padding: 5px 5px 5px 5px;
                }
                .StyleEducationCvut {
                    width: 50%;
                    margin: 0 auto;
                    justify-content: center;
                    li {
                        display: flex;
                        justify-content: center;
                    }
                    .CvutStyle {
                        margin-top: 1px;
                        width: 4.2vw;
                        height: 4.2vw;
                    }
                    h4 {
                        margin-top: 0.1vw;
                        font-size: 9px;
                        line-height: 9px;
                    }
                    margin-top: 10px;
                    margin-bottom: 0.75vw;
                }
                h3 {
                    margin: 0 auto;
                    width: 80%;
                }
                p {
                    text-align: center;
                }
            }
            .MainList {
                height: 90px;
                p {
                    font-size: 10px;
                    white-space: wrap;
                    text-align: center;
                }
                h3 {
                    font-size: 10px;
                    line-height: 12px;
                    white-space: wrap;
                    text-align: center;
                }
                .StyleEducation {
                    h4 {
                        font-size: 9px;
                        line-height: 9px;
                    }
                }
            }
            .ThirdList {
                width: 25vw;
                .MainList {
                    width: 100%;
                    padding: 5px 5px 5px 5px;
                    h3 {
                        margin: 0 auto;
                        margin-top: 4px;
                        width: 60%;
                    }
                }
                .StyleEducation {
                    margin: 0 auto;
                    margin-top: 10px;
                    justify-content: center;
                    width: 50%;
                    li {
                        display: flex;
                        justify-content: center;
                    }
                    .StepStyle {
                        height: 4.5vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        padding: 32px 15px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .Main {
            margin-top: 30px;
            width: 60vw;
            .FirstList {
                .MainList {
                    .StyleEducation {
                        margin-top: 2px;
                        .UjopStyle {
                            width: 4.2vw;
                            margin-right: 2vw;
                        }
                    }
                }
            }
            .SecondList {
                .StyleEducationCvut {
                    justify-content: center;
                    .CvutStyle {
                        margin-right: 2vw;
                    }
                    h4 {
                        margin-top: 0.1vw;
                        font-size: 9px;
                        line-height: 10px;
                    }
                    margin-top: 0.2vw;
                    .CvutStyle {
                        margin-top: 1px;
                        margin-right: 2vw;
                        width: 4.2vw;
                        height: 4.2vw;
                    }
                }
                h3 {
                    text-align: center;
                }
                p {
                    text-align: center;
                }
            }
            .MainList {
                width: 15vw;
                padding: 10px 15px;
                height: 8vw;
                p {
                    font-size: 9px;
                }
                h3 {
                    font-size: 9px;
                    line-height: 12px;
                    white-space: nowrap;
                }
                .StyleEducation {
                    h4 {
                        font-size: 9px;
                        line-height: 10px;
                    }
                }
            }
            .ThirdList {
                .StyleEducation {
                    .StepStyle {
                        height: 4.5vw;
                        margin-right: 2vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        padding: 32px 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .Main {
            margin-top: 30px;
            width: 60vw;
            .FirstList {
                .MainList {
                    .StyleEducation {
                        margin-bottom: 0.5vw;
                        margin-top: 2px;
                        .UjopStyle {
                            width: 4.2vw;
                            margin-right: 2vw;
                        }
                    }
                }
            }
            .SecondList {
                .StyleEducationCvut {
                    justify-content: center;
                    .CvutStyle {
                        margin-right: 2vw;
                    }
                    h4 {
                        margin-top: 0.1vw;
                        font-size: 10px;
                        line-height: 12px;
                    }
                    margin-top: 0.1vw;
                    margin-bottom: 0.5vw;
                    .CvutStyle {
                        margin-top: 1px;
                        margin-right: 2vw;
                        width: 4.2vw;
                        height: 4.2vw;
                    }
                }
                h3 {
                    text-align: center;
                }
                p {
                    text-align: center;
                }
            }
            .MainList {
                padding: 10px 20px;
                height: 8vw;
                width: 15vw;
                p {
                    font-size: 10px;
                }
                h3 {
                    font-size: 12px;
                    line-height: 14px;
                }
                .StyleEducation {
                    h4 {
                        font-size: 10px;
                        line-height: 14px;
                    }
                }
            }
            .ThirdList {
                .StyleEducation {
                    margin-top: 0.15vw;
                    margin-bottom: 0.5vw;
                    .StepStyle {
                        width: 4.2vw;
                        height: 4.2vw;
                        margin-right: 2vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        padding: 76px 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .Main {
            margin-top: 60px;
            width: 60vw;
            .FirstList {
                .MainList {
                    .StyleEducation {
                        margin-bottom: 1.15vw;
                        margin-top: 10px;
                        .UjopStyle {
                            width: 4.2vw;
                            margin-right: 2vw;
                        }
                    }
                }
            }
            .SecondList {
                .StyleEducationCvut {
                    justify-content: center;
                    .CvutStyle {
                        margin-right: 2vw;
                    }
                    h4 {
                        margin-top: 0.4vw;
                        font-size: 12px;
                        line-height: 14px;
                    }
                    margin-top: 0.1vw;
                    margin-bottom: 1.15vw;
                    .CvutStyle {
                        margin-top: 8px;
                        margin-right: 2vw;
                        width: 4.2vw;
                        height: 4.2vw;
                    }
                }
                h3 {
                    text-align: center;
                }
                p {
                    text-align: center;
                }
            }
            .MainList {
                width: 15vw;
                padding: 20px 20px;
                height: 8vw;
                p {
                    font-size: 12px;
                }
                h3 {
                    font-size: 14px;
                    line-height: 16px;
                }
                .StyleEducation {
                    h4 {
                        font-size: 12px;
                        line-height: 18px;
                    }
                }
            }
            .ThirdList {
                .StyleEducation {
                    margin-bottom: 1.15vw;
                    margin-top: 5px;
                    .StepStyle {
                        margin-right: 2vw;
                        margin-top: 5px;
                        height: 4.2vw;
                        width: 4.2vw;
                    }
                    h4 {
                        margin-top: 0.2vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        padding: 2.8vw 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .Main {
            margin-top: 60px;
            width: 60vw;
            .FirstList {
                .MainList {
                    .StyleEducation {
                        margin-bottom: 1vw;
                        margin-top: 0.1vw;
                        .UjopStyle {
                            width: 4.2vw;
                            margin-top: 10px;
                            margin-right: 2vw;
                        }
                    }
                }
            }
            .SecondList {
                .StyleEducationCvut {
                    justify-content: center;
                    margin-top: 0.1vw;
                    .CvutStyle {
                        margin-top: 8px;
                        margin-right: 2vw;
                        width: 4.2vw;
                        height: 4.2vw;
                    }
                    h4 {
                        font-size: 16px;
                        line-height: 18px;
                    }
                    margin-top: 5px;
                    margin-bottom: 0.95vw;
                }
                h3 {
                    text-align: center;
                }
                p {
                    text-align: center;
                }
            }
            .MainList {
                width: 15vw;
                height: 8vw;
                padding: 20px 20px;
                p {
                    font-size: 14px;
                }
                h3 {
                    font-size: 18px;
                    line-height: 20px;
                }
                .StyleEducation {
                    h4 {
                        font-size: 16px;
                        line-height: 18px;
                    }
                }
            }
            .ThirdList {
                .MainList {
                    .StyleEducation {
                        margin-bottom: 0.8vw;
                        .StepStyle {
                            margin-top: 0.7vw;
                            height: 4.2vw;
                            width: 4.2vw;
                            margin-right: 2vw;
                        }
                        h4 {
                            margin-top: 0.1vw;
                        }
                    }
                }
            }
        }
    }
`;
