import React, {useState} from 'react';
import {useThemeContext} from '../hooks/useThemeContext';
import {anotherContext} from '../context/anotherContext';
import {Title, Input} from './index.styles.jsx';


export const Product = () => {
    const [isDarkThemeOn, setIsDarkThemeOn] = useState(false);
    const [text, setText] = useState('');
    const {themeType} = useThemeContext();
    const data = useContext(anotherContext);

    const onInputChange = (event) => {
        setIsDarkThemeOn(event.target.checked);
    };

    return (
        <> 
            <h2>{themeType}</h2>
            <span>Dark theme</span>
            <input 
                type='checkbox'
                checked={isDarkThemeOn}
                onChange={onInputChange}
            />
            
            <Title isDark={isDarkThemeOn}>Product</Title>
            <Input 
                type='text' 
                value={text}
                breakPointOn={400}
                onChange={({target: {value}}) => setText(value)}
            />
        </>
    );
};