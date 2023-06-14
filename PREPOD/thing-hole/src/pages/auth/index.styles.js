import styled from 'styled-components';



export const Wrapper = styled.section`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #2d2d2d;
`;

export const WrapperForm = styled.div`
    border-radius: 8px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    padding: 30px;
    background: #fff;
`;

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