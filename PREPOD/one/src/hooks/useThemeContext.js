import React, {useContext} from 'react';
import {themeContext} from '../context/themeContext';


export const useThemeContext = () => {
    const data = useContext(themeContext);

    // some additional logic

    return data;
};