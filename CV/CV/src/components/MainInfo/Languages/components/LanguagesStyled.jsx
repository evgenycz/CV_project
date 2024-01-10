import { styled } from "styled-components";
import { LanguageMixin } from "../../Mixin/LanguageMixin";

export const LanguageStyled = styled.section`
    ${LanguageMixin}
    .MainArray {
        .TextArray {
            .ContactArray {
                .ImageArrayCZ {
                    img {
                        border: 1px solid #e2e2e2;
                    }
                }
                .ImageArrayRU {
                    img {
                        border: 1px solid #e2e2e2;
                    }
                }
                .ImageArrayEN {
                    img {
                        border: 1px solid #e2e2e2;
                    }
                }
                .TextSubArray {
                    .NameOfContact {
                        color: var(--Gray-Lighter, #47516b);
                    }
                    .TextOfContact {
                        color: var(--Gray-Light, #79819a);
                    }
                }
            }
        }
    }
`;
export const DarkLanguageStyled = styled.section`
    ${LanguageMixin}
    .MainArray {
        .TextArray {
            .ContactArray {
                .TextSubArray {
                    .NameOfContact {
                        color: var(--Gray-Lighter, #d9dfe8);
                    }
                    .TextOfContact {
                        color: var(--Gray-Light, #acb1c3);
                    }
                }
            }
        }
    }
`;
