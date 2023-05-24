import React from 'react';
import styled, {css} from 'styled-components';



export const Title = styled.h1`
    color: purple;
    background: no-repeat url(${({bg}) => bg}) ;
    padding: 20px;
    border: 1px solid gray;

    @media screen and (max-width: 600px) {
        color: orange;
    }
`;

