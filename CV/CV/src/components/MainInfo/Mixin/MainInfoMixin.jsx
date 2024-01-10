import { css } from "styled-components";

export const MainInfoMixin = css`
    margin-top: -200px;

    @media screen and (min-width: 1800px) {
        width: 30vw;
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        width: 30vw;
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        width: 30vw;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: 30vw;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 30vw;
    }
    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 30vw;
    }
`;
