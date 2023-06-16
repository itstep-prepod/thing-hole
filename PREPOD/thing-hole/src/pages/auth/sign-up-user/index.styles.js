import styled from 'styled-components';


export const Title = styled.h2`
    & {
        font-size: 30px;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
`;

export const Buttons = styled.div`
    & {
        display: flex;
        margin-top: 50px;
        
        * {
            flex-basis: 50%;
        }
    }
`;