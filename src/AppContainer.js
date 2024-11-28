import { ThemeContext } from './contexts/ThemeContext';
import { withLoading } from './HOC/withLoading';
import App from './App';
import { getLanguages } from './const/languages';
import { useState } from 'react';
import { THEMES } from './contexts/ThemeContext';

const AppComponent = withLoading(App, getLanguages);

export const AppContainer = () => {
    const [theme, setTheme] = useState(THEMES.dark);

    const toggleTheme = () => {
        const nextTheme = (theme===THEMES.dark) ? THEMES.light : THEMES.dark;
        setTheme(nextTheme);
    }
    
    return(
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            <AppComponent />
        </ThemeContext.Provider>
    )
}