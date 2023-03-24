import { useContext } from 'react'
import ThemeContext from './ThemeContext';

export function ThemedButton(props) {
    const theme = useContext(ThemeContext)
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => {
                <button onClick={toggleTheme} {...props} style={{ backgroundColor: theme.background }} />
            }}
        </ThemeContext.Consumer>
    );
}
