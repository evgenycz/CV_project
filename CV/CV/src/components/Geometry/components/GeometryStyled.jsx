import { styled } from "styled-components";
import { GeometryMixin } from "./Mixin/GeometryMixin";

export const GeometryStyled = styled.section`
    ${GeometryMixin}
    background: #F7F9FC;
    .LineStyle {
        svg {
            rect {
                stroke: #e2e6ee;
            }
        }
    }
    .LineStyleS {
        svg {
            rect {
                stroke: #e2e6ee;
            }
        }
    }
    .LineStyleMin {
        svg {
            rect {
                stroke: #e2e6ee;
            }
        }
    }
    .CircleStyle {
        background: white;
    }
`;
export const DarkGeometryStyled = styled.section`
    ${GeometryMixin}
    background: #2E2E48;
    .LineStyle {
        svg {
            rect {
                stroke: #232339;
            }
        }
    }
    .LineStyleS {
        svg {
            rect {
                stroke: #232339;
            }
        }
    }
    .LineStyleMin {
        svg {
            rect {
                stroke: #232339;
            }
        }
    }
    .CircleStyle {
        background: #232339;
    }
`;
