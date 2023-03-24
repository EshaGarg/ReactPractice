import React from "react";

export const themes = {
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    }
}

const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { }
});
export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;