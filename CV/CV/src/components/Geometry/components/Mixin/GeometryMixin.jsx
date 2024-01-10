import { css } from "styled-components";

export const GeometryMixin = css`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        padding-left: 5px;
        padding-top: 68px;
        width: 5vw;
        .CircleStyle {
            width: 15px;
            height: 15px;
            svg {
                width: 1vw;
                padding: 2px 6px;
                path {
                    width: 2px;
                    stroke-width: 2;
                }
            }
        }
        .LineStyle {
            width: 5px;
            height: 778px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleS {
            width: 5px;
            height: 505px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleMin {
            padding: 30px 0;
            width: 5px;
            height: 250px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-left: 5px;
        padding-top: 68px;
        width: 5vw;
        .CircleStyle {
            width: 20px;
            height: 20px;
            svg {
                width: 1vw;
                padding: 2px 8px;
                path {
                    width: 2px;
                    stroke-width: 2;
                }
            }
        }
        .LineStyle {
            width: 5px;
            height: 778px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleS {
            width: 5px;
            height: 505px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleMin {
            padding: 30px 0;
            width: 5px;
            height: 250px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        margin-left: 10px;
        padding-top: 60px;
        width: 5vw;
        .CircleStyle {
            width: 25px;
            height: 25px;
            svg {
                width: 2vw;
                padding: 5px 5px;
                path {
                    width: 2px;
                    stroke-width: 2;
                }
            }
        }
        .LineStyle {
            width: 5px;
            height: 500px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleS {
            width: 5px;
            height: 500px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleMin {
            padding: 30px 0;
            width: 5px;
            height: 250px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        margin-left: 10px;
        padding-top: 60px;
        width: 5vw;
        .CircleStyle {
            width: 25px;
            height: 25px;
            svg {
                width: 2vw;
                padding: 5px 5px;
                path {
                    width: 2px;
                    stroke-width: 2;
                }
            }
        }
        .LineStyle {
            width: 5px;
            height: 500px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleS {
            width: 5px;
            height: 500px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleMin {
            padding: 30px 0;
            width: 5px;
            height: 250px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
    }
    @media screen and (min-width: 1201px) and (max-width: 1799px) {
        padding-top: 60px;
        width: 5vw;
        .CircleStyle {
            width: 40px;
            height: 40px;
            svg {
                width: 3vw;
                padding: 15px 15px;
            }
        }
        .LineStyle {
            width: 5px;
            height: 500px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleS {
            width: 5px;
            height: 500px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleMin {
            padding: 30px 0;
            width: 5px;
            height: 250px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        padding-top: 60px;
        width: 5vw;
        .CircleStyle {
            width: 40px;
            height: 40px;
            svg {
                width: 3vw;
                padding: 15px 15px;
            }
        }
        .LineStyle {
            width: 5px;
            height: 28.7vw;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleS {
            width: 5px;
            height: 28.7vw;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
        .LineStyleMin {
            padding: 30px 0;
            width: 5px;
            height: 250px;
            svg {
                rect {
                    width: 1px;
                    stroke-width: 1;
                }
            }
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .CircleStyle {
        border-radius: 50%;
        display: flex;
        align-items: center;
    }
    .LineStyle {
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .LineStyleS {
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .LineStyleMin {
        svg {
            width: 100%;
            height: 100%;
        }
    }
`;
