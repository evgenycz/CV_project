import { styled } from "styled-components";
import { SocialMixin } from "../../Mixin/SocialMixin";

export const SocialStyled = styled.section`
    ${SocialMixin}
    border-bottom: 4px solid #E2E6EE;
    padding-bottom: 30px;
    .ImageArrayX {
        img {
            background: var(--Social-Twitter, #00acee);
        }
    }
    .ImageArrayLink {
        img {
            background: var(--Social-Linkedin, #0077b5);
        }
    }
    .NameOfContact {
        color: var(--Gray-Default, #79819a);
    }
    .TextOfContact {
        color: var(--Gray-Dark, #47516b);
    }
`;
export const DarkSocialStyled = styled.section`
    ${SocialMixin}
    border-bottom: 4px solid #2E2E48;
    padding-bottom: 30px;
    .ImageArrayX {
        img {
            background: var(--Social-Twitter, #00acee);
        }
    }
    .ImageArrayLink {
        img {
            background: var(--Social-Linkedin, #0077b5);
        }
    }
    .NameOfContact {
        color: var(--Gray-Light, #acb1c3);
    }
    .TextOfContact {
        color: var(--Gray-Lighter, #d9dfe8);
    }
`;
