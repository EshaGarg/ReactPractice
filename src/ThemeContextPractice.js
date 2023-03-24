import { useState } from "react";
import { ThemedButton } from "./ThemeButton";
import { ThemeProvider, themes } from "./ThemeContext";

function Toolbar(props) {
    return (
        <ThemedButton>
            Change Theme
        </ThemedButton>
    );
}

export function ThemeContextPractice() {
    const [theme, setTheme] = useState(themes.light);
    const [toggleTheme, setToggleTheme] = useState(toggleTheme);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeProvider value={theme, }>
            <Content />
        </ThemeProvider>
    )
}