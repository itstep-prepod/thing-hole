import React from 'react';
import styled, {css} from 'styled-components';


const MAIN_COLOR = 'salmon';


const titleStyle = {
    dark: css`
        color: white;
        background-color: black;
    `,
    light: css`
        color: black;
        background-color: white;
    `
};


const inputValidate = {
    ok: css`
        border: 1px solid green;
    `,
    notOK: css`
        border: 3px solid red;
    `
};

export const Title = styled.p`
    & {
        padding: 20px;
        transition: all 1s ease;
        ${({isDark}) => isDark ? titleStyle.dark : titleStyle.light}
        
    }

    &:hover {
        color: salmon;
    }


    @media screen and (max-width: ${({breakPointOn}) => breakPointOn}px) {
        color: orange;
    }
`;


export const Input = styled.input`
    & {
        padding: 10px;
        outline: none;
        ${({value}) => value.length > 6 ? inputValidate.notOK : inputValidate.ok}
    }
`;