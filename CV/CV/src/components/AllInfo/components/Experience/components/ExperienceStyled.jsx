import { ExperienceMixin } from "../../Mixin/ExperienceMixin";
import { styled } from "styled-components";

export const ExperienceStyled = styled.div`
    ${ExperienceMixin}
    h2 {
        color: #2e2e48;
    }
    .MainArray {
        .SubMainPart {
            background: white;
            .SubListArray {
                p {
                    color: #79819a;
                }
                h3 {
                    color: #2e2e48;
                }
            }
            .SecondSubListArray {
                span {
                    color: #47516b;
                }
                .LocationArray {
                    h5 {
                        color: #79819a;
                    }
                }
            }
        }
    }
`;
export const DarkExperienceStyled = styled.div`
    ${ExperienceMixin}
    h2 {
        color: #e2e6ee;
    }
    .MainArray {
        .SubMainPart {
            background: #232339;
            .SubListArray {
                p {
                    color: #acb1c3;
                }
                h3 {
                    color: #e2e6ee;
                }
            }
            .SecondSubListArray {
                span {
                    color: #d9dfe8;
                }
                .LocationArray {
                    h5 {
                        color: #acb1c3;
                    }
                }
            }
        }
    }
`;
