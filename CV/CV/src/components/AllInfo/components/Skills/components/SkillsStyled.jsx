import { styled } from "styled-components";
import { SkillsMixin } from "../../Mixin/SkillsMixin";

export const SkillsStyled = styled.div`
    ${SkillsMixin}
    h2 {
        color: #2e2e48;
    }
    .FirstSection {
        .Main {
            .MainImage {
                background: #efe2f9;
            }
            p {
                color: #2e2e48;
            }
        }
        .SubArray {
            background: #fff;
            color: #9251f7;
            li {
                &:first-child {
                    border-right: 2px solid #8e8eff;
                }
            }
        }
        .TextAlone {
            padding: 25px 15px;
            background: #fff;
            color: #9251f7;
        }
    }
    .SecondSection {
        .Main {
            .MainImage {
                background: #e7c9ff;
            }
            p {
                color: #2e2e48;
            }
        }
        .SubArray {
            background: #fff;
            color: #c35af3;
            li {
                &:first-child {
                    border-right: 2px solid #8e8eff;
                }
            }
        }
        .TextAlone {
            background: #fff;
            color: #c35af3;
        }
    }
    .ThirdSection {
        .MainList {
            .MainImage {
                background: #e1e7fe;
            }
            p {
                color: #2e2e48;
            }
        }

        .SubArray {
            background: #fff;
            color: #516cf7;
            li {
                &:first-child {
                    border-right: 2px solid #8e8eff;
                }
            }
        }
        .TextAlone {
            background: #fff;
            color: #516cf7;
        }
    }

    .FrontStyle {
        background: #fff;
        color: #516cf7;
    }
    .FrontStyleSec {
        background: #fff;
        color: #516cf7;
    }
`;

export const SkillsDarkStyled = styled.div`
    ${SkillsMixin}
    h2 {
        color: #e2e6ee;
    }
    .FirstSection {
        .Main {
            .MainImage {
                background: #5531a7;
            }
            p {
                color: #e2e6ee;
            }
        }
        .SubArray {
            background: #232339;
            color: #c696fc;
            li {
                &:first-child {
                    border-right: 2px solid #8e8eff;
                }
            }
        }
        .TextAlone {
            background: #232339;
            color: #c696fc;
        }
    }
    .SecondSection {
        .Main {
            .MainImage {
                background: #6039c4;
            }
            p {
                color: #e2e6ee;
            }
        }
        .SubArray {
            background: #232339;
            color: #c696fc;
            li {
                &:first-child {
                    border-right: 2px solid #8e8eff;
                }
            }
        }
        .TextAlone {
            background: #232339;
            color: #c696fc;
        }
    }
    .ThirdSection {
        .MainList {
            .MainImage {
                background: #2a337e;
            }
            p {
                color: #e2e6ee;
            }
        }

        .SubArray {
            background: #232339;
            color: #95aafb;
            li {
                &:first-child {
                    border-right: 2px solid #8e8eff;
                }
            }
        }
        .TextAlone {
            background: #232339;
            color: #95aafb;
        }
    }

    .FrontStyle {
        background: #232339;
        color: #95aafb;
    }
    .FrontStyleSec {
        background: #232339;
        color: #95aafb;
    }
`;
