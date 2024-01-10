import { css } from "styled-components";

export const AppMixin = css`
    display: flex;
    height: 100%;
    @media screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        h1 {
            text-align: center;
            margin: 20px 0 10px 0;
            font-family: Outfit;
            font-style: normal;
            font-weight: 600;
            letter-spacing: -0.32px;
        }
        h2 {
            text-align: center;
            font-family: Outfit;
            font-weight: 600;
            letter-spacing: 0.12px;
        }
        h6 {
            margin-top: 60px;
            text-align: center;
            font-size: 20px;
            text-align: center;
            font-family: Outfit;
            font-weight: 600;
            letter-spacing: 0.12px;
        }
    }
`;
