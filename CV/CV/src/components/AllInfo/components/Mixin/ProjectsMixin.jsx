import { css } from "styled-components";

export const ProjectMixin = css`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        padding-top: 60px;
        width: 100%;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainProjects {
            margin: 0 auto;
            margin-top: 30px;
            width: 80vw;
            flex-direction: column;
            align-items: center;
            .PartOfMainArray {
                height: 350px;
                width: 100%;
                &:first-child {
                    margin-bottom: 20px;
                }
                .SubProject {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    height: 100%;
                    .BigImage {
                        height: 40vw;
                    }
                    li {
                        &:nth-child(2) {
                            height: 20px;
                        }
                        &:nth-child(3) {
                            height: 60px;
                        }
                        p {
                            font-size: 12px;
                            line-height: 14px;
                            text-align: center;
                            height: 60px;
                        }
                        h3 {
                            text-align: center;
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                }
                .SubArray {
                    margin-bottom: 20px;
                    justify-content: space-between;
                    margin-left: 5vw;
                    margin-right: 5vw;
                    span {
                        font-size: 16px;
                        line-height: 18px;
                    }
                    img {
                        padding: 3px 3px;
                        width: 4.5vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-top: 60px;
        width: 100%;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainProjects {
            margin: 0 auto;
            margin-top: 30px;
            width: 80vw;
            flex-direction: column;
            align-items: center;
            .PartOfMainArray {
                height: 450px;
                width: 100%;
                &:first-child {
                    margin-bottom: 20px;
                }
                .SubProject {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    height: 100%;
                    .BigImage {
                        height: 35vw;
                    }
                    li {
                        &:nth-child(2) {
                            height: 20px;
                        }
                        &:nth-child(3) {
                            height: 60px;
                        }
                        p {
                            font-size: 12px;
                            line-height: 14px;
                            text-align: center;
                            height: 60px;
                        }
                        h3 {
                            text-align: center;
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                }
                .SubArray {
                    margin-bottom: 20px;
                    justify-content: space-between;
                    margin-left: 3vw;
                    margin-right: 3vw;
                    span {
                        font-size: 16px;
                        line-height: 18px;
                    }
                    img {
                        padding: 3px 3px;
                        width: 3.5vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        padding-top: 62px;
        padding-left: 15px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainProjects {
            margin-top: 30px;
            width: 60vw;
            .PartOfMainArray {
                height: 450px;
                width: 48%;
                .SubProject {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    height: 100%;
                    .BigImage {
                        height: 15vw;
                    }
                    li {
                        &:nth-child(2) {
                            height: 20px;
                        }
                        &:nth-child(3) {
                            height: 60px;
                        }
                        p {
                            font-size: 12px;
                            line-height: 14px;
                            text-align: center;
                            height: 60px;
                        }
                        h3 {
                            text-align: center;
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                }
                .SubArray {
                    margin-bottom: 20px;
                    justify-content: space-between;
                    margin-left: 1.5vw;
                    margin-right: 1.5vw;
                    span {
                        font-size: 16px;
                        line-height: 18px;
                    }
                    img {
                        padding: 3px 3px;
                        width: 2vw;
                    }
                }
                &:hover {
                    transform: scale(1.04);
                    transition: 0.5s;
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        padding-top: 62px;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainProjects {
            align-items: center;
            margin-top: 30px;
            width: 60vw;
            .PartOfMainArray {
                width: 48%;
                height: 440px;
                .SubProject {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    height: 100%;
                    .BigImage {
                        height: 15vw;
                    }
                    li {
                        &:nth-child(2) {
                            height: 20px;
                        }
                        &:nth-child(3) {
                            height: 60px;
                        }
                        p {
                            font-size: 12px;
                            line-height: 14px;
                            text-align: center;
                            height: 60px;
                        }
                        h3 {
                            text-align: center;
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                }
                .SubArray {
                    margin-bottom: 20px;
                    justify-content: space-between;
                    margin-left: 1.5vw;
                    margin-right: 1.5vw;
                    span {
                        font-size: 16px;
                        line-height: 18px;
                    }
                    img {
                        padding: 3px 3px;
                        width: 2vw;
                    }
                }
                &:hover {
                    transform: scale(1.04);
                    transition: 0.5s;
                }
            }
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        padding-top: 65px;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainProjects {
            margin-top: 40px;
            width: 60vw;
            .PartOfMainArray {
                width: 48%;
                height: 440px;
                .SubProject {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    height: 100%;
                    .BigImage {
                        height: 15vw;
                    }
                    li {
                        &:nth-child(2) {
                            height: 20px;
                        }
                        &:nth-child(3) {
                            height: 60px;
                        }
                        p {
                            font-size: 12px;
                            line-height: 14px;
                            text-align: center;
                            height: 60px;
                        }
                        h3 {
                            text-align: center;
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                }
                .SubArray {
                    margin-bottom: 20px;
                    justify-content: space-between;
                    margin-left: 1.5vw;
                    margin-right: 1.5vw;
                    span {
                        font-size: 16px;
                        line-height: 18px;
                    }
                    img {
                        padding: 3px 3px;
                        width: 1.5vw;
                    }
                }
                &:hover {
                    transform: scale(1.04);
                    transition: 0.5s;
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        padding-top: 67px;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        .MainProjects {
            margin-top: 50px;
            height: 25vw;
            width: 60vw;
            .PartOfMainArray {
                width: 48%;
                .SubProject {
                    .BigImage {
                        height: 15vw;
                    }
                    h3 {
                        padding-left: 1vw;
                        margin-top: 10px;
                        font-size: 18px;
                        line-height: 20px;
                    }
                    p {
                        height: 5vw;
                        font-size: 14px;
                        line-height: 16px;
                        width: 85%;
                        margin-top: 10px;
                    }
                }
                .SubArray {
                    padding-left: 1vw;
                    width: 90%;
                    justify-content: space-between;
                    span {
                        font-size: 18px;
                        line-height: 20px;
                    }
                    img {
                        padding: 5px 5px;
                        width: 1.5vw;
                    }
                }
                &:hover {
                    transform: scale(1.04);
                    transition: 0.5s;
                }
            }
        }
    }

    h2 {
        font-family: Outfit;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .MainProjects {
        display: flex;
        justify-content: space-between;
        .PartOfMainArray {
            border-radius: 30px;
            box-shadow: 0px 0px 0px 0.5px #5531a7;
            .SubProject {
                .BigImage {
                    width: 100%;
                    border-radius: 30px 30px 0 0;
                }
                p {
                    padding-left: 1vw;
                    padding-right: 1vw;
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
                li {
                    a {
                        text-decoration: none;
                        .SubArray {
                            display: flex;
                            align-items: center;
                            img {
                                border-radius: 50%;
                            }
                            span {
                                text-decoration: none;
                                font-family: DM Sans;
                                font-style: normal;
                                font-weight: 500;
                            }
                        }
                    }
                }
                h3 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
            }
        }
    }
`;
