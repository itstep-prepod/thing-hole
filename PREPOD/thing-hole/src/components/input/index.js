import React from 'react';
import {Input as StyledInput, InputLabel,InputError} from './index.styles.js';


export const Input = ({label, error, ...props}) => {
    return (
        <label>
            {label && <InputLabel>{label}</InputLabel>}
            <StyledInput {...props} />
            {error && <InputError>{error}</InputError>}
        </label>
    );
};