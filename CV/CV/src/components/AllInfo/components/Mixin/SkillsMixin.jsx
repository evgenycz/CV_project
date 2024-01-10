import { css } from "styled-components";

export const SkillsMixin = css`
    h2 {
        font-family: Outfit;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.12px;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        .FirstSection {
            display: flex;
            align-items: center;
            .Main {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .MainImage {
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                p {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
            }
            .SubArray {
                display: flex;
                margin-right: 1vw;
                border-radius: 20px 0 0 20px;
                li {
                    width: 5vw;
                }
                h5 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                    text-align: center;
                }
            }
            h5 {
                font-family: DM Sans;
                font-style: normal;
                font-weight: 500;
                text-align: center;
                border-radius: 0 20px 20px 0;
            }
        }
        .SecondSection {
            display: flex;
            align-items: center;
            .Main {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .MainImage {
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                p {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
            }
            .SubArray {
                display: flex;
                margin-left: 5vw;
                margin-right: 1vw;
                border-radius: 20px 0 0 20px;
                h5 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                    text-align: center;
                }
            }
            h5 {
                font-family: DM Sans;
                font-style: normal;
                font-weight: 500;
                text-align: center;
                border-radius: 0 20px 20px 0;
            }
        }
        .ThirdSection {
            display: flex;
            align-items: center;
            .MainList {
                height: 100%;
                display: flex;
                flex-direction: column;
                .MainImage {
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .ImageSVG {
                        width: 1.5vw;
                    }
                }
                p {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                }
            }
            .FrontStyle {
                li {
                    h5 {
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: 500;
                        text-align: center;
                    }
                    &:nth-child(2) {
                        margin: 2px 0;
                    }
                }
            }
            .FrontStyleSec {
                li {
                    h5 {
                        font-family: DM Sans;
                        font-style: normal;
                        font-weight: 500;
                        text-align: center;
                    }
                    &:nth-child(2) {
                        margin: 2px 0;
                    }
                }
            }
            .SubArray {
                display: flex;
                justify-content: center;
                h5 {
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: 500;
                    text-align: center;
                }
            }
            h5 {
                font-family: DM Sans;
                font-style: normal;
                font-weight: 500;
                text-align: center;
            }
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        padding-top: 60px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        div {
            padding-top: 30px;
            width: 80vw;
            margin: 0 auto;
            flex-wrap: nowrap;
            justify-content: space-around;
            .FirstSection {
                flex-direction: column;
                width: 20vw;
                .Main {
                    height: 40px;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .ImageSVG {
                            width: 3.5vw;
                            margin-left: 0.5px;
                        }
                    }
                }
                .SubArray {
                    border-radius: 10px 10px 0 0;
                    width: 20vw;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0;
                    align-items: center;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    li {
                        width: 13vw;
                        &:first-child {
                            border: none;
                            margin-bottom: 5px;
                        }
                    }
                }
                .TextAlone {
                    width: 20vw;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    border-radius: 0 0 10px 10px;
                }
            }
            .SecondSection {
                flex-direction: column;
                width: 20vw;
                .Main {
                    height: 40px;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .BuildingImage {
                            width: 2.5vw;
                        }
                    }
                }
                .SubArray {
                    border-radius: 10px 10px 0 0;
                    width: 20vw;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0;
                    align-items: center;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    li {
                        &:first-child {
                            border: none;
                        }
                    }
                }
                .TextAlone {
                    width: 20vw;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    border-radius: 0 0 10px 10px;
                }
            }
            .ThirdSection {
                width: 20vw;
                flex-direction: column;
                ul {
                    &:nth-child(2) {
                        border-radius: 10px 10px 0 0;
                    }
                }
                .MainList {
                    align-items: center;
                    height: 40px;
                    justify-content: space-between;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .ImageSVG {
                            width: 3.5vw;
                            margin-left: 0.5px;
                        }
                    }
                }
                .SubArray {
                    margin-top: 5px;
                    margin-bottom: 5px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    flex-direction: column;
                    width: 20vw;
                    li {
                        &:first-child {
                            border: none;
                            margin-bottom: 5px;
                        }
                    }
                }
                h5 {
                    border-radius: 0 0 10px 10px;
                }
                .FrontStyle {
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 20vw;
                    margin-bottom: 5px;
                }
                .FrontStyleSec {
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 20vw;
                }
                .TextAlone {
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 20vw;
                    white-space: nowrap;
                }
            }
        }
        h5 {
            font-size: 10px;
            line-height: 12px;
        }
        p {
            font-size: 10px;
            line-height: 12px;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-top: 60px;
        padding-left: 10px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        div {
            padding-top: 30px;
            flex-direction: column;
            width: 80vw;
            margin: 0 auto;
            .FirstSection {
                height: 50px;
                margin-bottom: 20px;
                margin-right: 40px;
                .Main {
                    justify-content: space-between;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .ImageSVG {
                            width: 1.8vw;
                            margin-left: 0.5px;
                        }
                    }
                }
                .SubArray {
                    padding: 17px 13px 17px 10px;
                    width: 15vw;
                    margin-left: 30px;
                    li {
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 23px 15px;
                }
            }
            .SecondSection {
                height: 50px;
                margin-bottom: 20px;
                margin-right: 40px;
                .Main {
                    justify-content: space-between;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .BuildingImage {
                            width: 1.3vw;
                        }
                    }
                }
                .SubArray {
                    padding: 21px 25px 21px 10px;
                    width: 15vw;
                    margin-left: 25px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 21px 15px;
                }
            }
            .ThirdSection {
                height: 50px;
                margin-bottom: 20px;
                width: 80vw;
                ul {
                    &:nth-child(2) {
                        border-radius: 20px 0 0 20px;
                    }
                }
                .MainList {
                    justify-content: space-around;
                    align-items: flex-start;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .ImageSVG {
                            width: 1.8vw;
                            margin-left: 0.5px;
                        }
                    }
                }
                .SubArray {
                    margin-left: 3px;
                    margin-right: 3px;
                    padding: 21px 6px 21px 1px;
                    width: 18vw;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 5px;
                            padding-right: 7px;
                        }
                    }
                }
                h5 {
                    border-radius: 0 20px 20px 0;
                }
                .FrontStyle {
                    padding: 7px 2px;
                }
                .FrontStyleSec {
                    margin-left: 3px;
                    padding: 7px 2px;
                    li {
                    }
                }
                .TextAlone {
                    padding: 21px 5px;
                    white-space: nowrap;
                }
            }
        }
        h5 {
            font-size: 10px;
            line-height: 12px;
        }
        p {
            font-size: 10px;
            line-height: 12px;
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        padding-top: 33px;
        padding-left: 15px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        div {
            flex-direction: column;
            padding-top: 30px;
            .FirstSection {
                height: 70px;
                margin-right: 40px;
                .Main {
                    justify-content: space-around;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .ImageSVG {
                            width: 1.5vw;
                            padding-left: 2px;
                        }
                    }
                }
                .SubArray {
                    width: 10vw;
                    margin-left: 35px;
                    padding: 18px 15px;
                    li {
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .SecondSection {
                height: 70px;
                margin-bottom: 20px;
                margin-right: 40px;
                .Main {
                    justify-content: space-around;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .BuildingImage {
                            width: 1.1vw;
                        }
                    }
                }
                .SubArray {
                    width: 10vw;
                    margin-left: 30px;
                    padding: 25px 15px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .ThirdSection {
                height: 70px;
                margin-bottom: 20px;
                width: 60vw;
                ul {
                    &:nth-child(2) {
                        border-radius: 20px 0 0 20px;
                    }
                }
                .MainList {
                    justify-content: space-around;
                    align-items: flex-start;
                    .MainImage {
                        width: 20px;
                        height: 20px;
                        .ImageSVG {
                            width: 1.5vw;
                            padding-left: 1px;
                        }
                    }
                }
                .SubArray {
                    margin-left: 5px;
                    margin-right: 5px;
                    padding: 25px 4px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                h5 {
                    border-radius: 0 20px 20px 0;
                }
                .FrontStyle {
                    padding: 9px 5px;
                }
                .FrontStyleSec {
                    margin-left: 5px;
                    padding: 9px 5px;
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
        }
        h5 {
            font-size: 9px;
            line-height: 14px;
        }
        p {
            font-size: 10px;
            line-height: 14px;
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        padding-left: 30px;
        padding-top: 33px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        div {
            padding-top: 30px;
            flex-direction: column;
            .FirstSection {
                height: 70px;
                .Main {
                    justify-content: space-around;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .ImageSVG {
                            width: 1.3vw;
                        }
                    }
                }
                .SubArray {
                    padding: 17px 20px 17px 10px;
                    width: 10vw;
                    margin-left: 50px;
                    li {
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .SecondSection {
                height: 70px;
                margin-bottom: 20px;
                .Main {
                    justify-content: space-around;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .BuildingImage {
                            width: 1vw;
                        }
                    }
                }
                .SubArray {
                    width: 10vw;
                    margin-left: 45px;
                    padding: 25px 20px 25px 10px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .ThirdSection {
                height: 70px;
                width: 60vw;
                margin-bottom: 20px;
                ul {
                    &:nth-child(2) {
                        border-radius: 20px 0 0 20px;
                    }
                }
                .MainList {
                    justify-content: space-around;
                    align-items: flex-start;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .ImageSVG {
                            width: 1.3vw;
                        }
                    }
                }
                .SubArray {
                    margin-left: 10px;
                    margin-right: 10px;
                    padding: 25px 8px 25px 5px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 5px;
                        }
                    }
                }
                h5 {
                    border-radius: 0 20px 20px 0;
                }
                .FrontStyle {
                    padding: 7px 5px;
                }
                .FrontStyleSec {
                    margin-left: 1vw;
                    padding: 7px 5px;
                }
                .TextAlone {
                    padding: 25px 15px;
                    white-space: nowrap;
                }
            }
        }
        h5 {
            font-size: 14px;
            line-height: 16px;
        }
        p {
            font-size: 14px;
            line-height: 16px;
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        padding-top: 38px;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        div {
            padding-top: 50px;
            .FirstSection {
                height: 70px;
                margin-left: 50px;
                .Main {
                    justify-content: space-around;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .ImageSVG {
                            width: 1.3vw;
                        }
                    }
                }
                .SubArray {
                    padding: 17px 15px;
                    width: 10vw;
                    margin-left: 65px;
                    li {
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .SecondSection {
                height: 70px;
                .Main {
                    justify-content: space-around;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .BuildingImage {
                            width: 1vw;
                        }
                    }
                }
                .SubArray {
                    padding: 25px 15px;
                    width: 10vw;
                    margin-left: 50px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .ThirdSection {
                width: 60vw;
                height: 70px;
                margin-bottom: 60px;
                ul {
                    &:nth-child(2) {
                        border-radius: 20px 0 0 20px;
                    }
                }
                .MainList {
                    justify-content: space-around;
                    align-items: flex-start;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .ImageSVG {
                            width: 1.3vw;
                        }
                    }
                }
                .SubArray {
                    margin-left: 15px;
                    margin-right: 15px;
                    padding: 25px 5px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                h5 {
                    border-radius: 0 20px 20px 0;
                }
                .FrontStyle {
                    padding: 7px 10px;
                }
                .FrontStyleSec {
                    margin-left: 15px;
                    padding: 7px 10px;
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
        }
        h5 {
            font-size: 14px;
            line-height: 16px;
        }
        p {
            font-size: 14px;
            line-height: 16px;
        }
    }
    @media screen and (min-width: 1800px) {
        margin-top: 3vw;
        padding-left: 30px;
        h2 {
            font-size: 20px;
            line-height: 22px;
        }
        div {
            padding-top: 60px;
            .FirstSection {
                height: 70px;
                margin-left: 50px;
                .Main {
                    justify-content: space-between;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .ImageSVG {
                            width: 1vw;
                        }
                    }
                }
                .SubArray {
                    padding: 15px 15px;
                    li {
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                    width: 10vw;
                    margin-left: 80px;
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .SecondSection {
                height: 70px;
                .Main {
                    justify-content: space-between;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .BuildingImage {
                            width: 0.7vw;
                        }
                    }
                }
                .SubArray {
                    padding: 25px 15px;
                    width: 10vw;
                    margin-left: 80px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            .ThirdSection {
                height: 70px;
                margin-bottom: 60px;
                width: 60vw;
                ul {
                    &:nth-child(2) {
                        border-radius: 20px 0 0 20px;
                    }
                }
                .MainList {
                    justify-content: space-between;
                    align-items: flex-start;
                    .MainImage {
                        width: 30px;
                        height: 30px;
                        .ImageSVG {
                            width: 1vw;
                        }
                    }
                }
                .SubArray {
                    margin-left: 25px;
                    margin-right: 25px;
                    padding: 25px 4px;
                    li {
                        width: 5vw;
                        &:first-child {
                            margin-right: 10px;
                            padding-right: 10px;
                        }
                    }
                }
                h5 {
                    border-radius: 0 20px 20px 0;
                }
                .FrontStyle {
                    padding: 3px 10px;
                    margin-right: 25px;
                }
                .FrontStyleSec {
                    padding: 3px 10px;
                }
                .TextAlone {
                    padding: 25px 15px;
                }
            }
            h5 {
                font-size: 18px;
                line-height: 20px;
            }
            p {
                font-size: 18px;
                line-height: 20px;
            }
        }
    }
`;
