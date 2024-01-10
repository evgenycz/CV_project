import { styled } from "styled-components";
import { ContactsMixin } from "../../Mixin/ContactsMixin";

export const ContactStyled = styled.section`
    ${ContactsMixin}
    border-bottom: 4px solid #E2E6EE;
    padding-bottom: 30px;
    .ImageArray {
        img {
            background: var(--Gray-Lightest, #e2e6ee);
        }
    }
    .NameOfContact {
        color: var(--Gray-Default, #79819a);
    }
    .TextOfContact {
        color: var(--Gray-Dark, #47516b);
    }
`;
export const DarkContactStyled = styled.section`
    ${ContactsMixin}
    border-bottom: 4px solid #2E2E48;
    padding-bottom: 30px;
    .ImageArray {
        img {
            background: var(--Gray-Darker, #2e2e48);
        }
    }
    .NameOfContact {
        color: var(--Gray-Light, #acb1c3);
    }
    .TextOfContact {
        color: var(--Gray-Lighter, #d9dfe8);
    }
`;
