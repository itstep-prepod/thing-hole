import React from 'react';
import {User} from './user';
import {Product} from './product';
import { themeContext, ThemeProvider } from './context/themeContext';
import { AnotherContextProvider } from './context/anotherContext';

export const App = () => {

    const themeContextValue = {
        themeType: 'dark'
    };

    const context2 = {
        chtotoDrugoe: 'ok'
    };

    return (
        <ThemeProvider value={themeContextValue}>
            <AnotherContextProvider value={context2}>
                    <h1>App</h1>
                    <Product />
            </AnotherContextProvider>
        </ThemeProvider>
    );
};