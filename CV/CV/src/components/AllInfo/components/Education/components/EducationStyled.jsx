import { styled } from "styled-components";
import { EducationMixin } from "../../Mixin/EducationMixin";

export const EducationStyled = styled.div`
    ${EducationMixin}
    h2 {
        color: #2e2e48;
    }
    .Main {
        .MainList {
            background: #fff;
            h3 {
                color: #2e2e48;
            }
            h4 {
                color: #2e2e48;
            }
            p {
                color: #79819a;
            }
        }
    }
`;
export const EducationDarkStyled = styled.div`
    ${EducationMixin}
    h2 {
        color: #e2e6ee;
    }
    .Main {
        .MainList {
            background: #232339;
            h3 {
                color: #e2e6ee;
            }
            h4 {
                color: #e2e6ee;
            }
            p {
                color: #acb1c3;
            }
        }
    }
`;
