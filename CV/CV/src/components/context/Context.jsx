import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
    const initialTheme = JSON.parse(localStorage.getItem("theme")) ?? true;
    const [turnOn, setTurnOn] = useState(initialTheme);

    const handleClick = () => {
        setTurnOn(!turnOn);
    };

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(turnOn));
    }, [turnOn]);

    const ChangeTheme = (themeF, themeS) => {
        const StyledComponent = turnOn ? themeF : themeS;
        return StyledComponent;
    };

    return (
        <StyleContext.Provider value={{ handleClick, turnOn, ChangeTheme }}>
            {children}
        </StyleContext.Provider>
    );
};

StyleProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
