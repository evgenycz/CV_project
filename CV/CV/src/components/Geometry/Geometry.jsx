import { Circle, Line } from "./components/img/images";
import {
    GeometryStyled,
    DarkGeometryStyled,
} from "./components/GeometryStyled";
import PropTypes from "prop-types";

export const Geometry = ({ ChangeTheme }) => {
    const StyledGeometry = ChangeTheme(GeometryStyled, DarkGeometryStyled);
    return (
        <StyledGeometry>
            <div className="CircleStyle">
                <Circle />
            </div>
            <div className="LineStyle">
                <Line />
            </div>
            <div className="CircleStyle">
                <Circle />
            </div>
            <div className="LineStyleS">
                <Line />
            </div>
            <div className="CircleStyle">
                <Circle />
            </div>
            <div className="LineStyleMin">
                <Line />
            </div>
            <div className="CircleStyle">
                <Circle />
            </div>
        </StyledGeometry>
    );
};

Geometry.propTypes = {
    ChangeTheme: PropTypes.func.isRequired,
};
