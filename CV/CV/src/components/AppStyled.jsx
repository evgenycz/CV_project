import { styled } from "styled-components";
import { AppMixin } from "./AppMixin";

export const AppStyled = styled.div`
    ${AppMixin}
    background: var(--Gray-Lightest-2, #F7F9FC);
    @media screen and (min-width: 320px) and (max-width: 768px) {
        h1 {
            color: var(--Gray-Darker, #2e2e48);
        }
        h2 {
            background: var(
                --Gradient-Primary,
                linear-gradient(90deg, #a478e8 0%, #516cf7 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        h6 {
            background: var(
                --Gradient-Primary,
                linear-gradient(90deg, #a478e8 0%, #516cf7 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export const DarkAppStyled = styled.div`
    ${AppMixin}
    @media screen and (min-width: 320px) and (max-width: 768px) {
        h1 {
            color: var(--Gray-Lightest, #e2e6ee);
        }
        h2 {
            background: var(
                --Gradient-Primary,
                linear-gradient(90deg, #a478e8 0%, #516cf7 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        h6 {
            background: var(
                --Gradient-Primary,
                linear-gradient(90deg, #a478e8 0%, #516cf7 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;
