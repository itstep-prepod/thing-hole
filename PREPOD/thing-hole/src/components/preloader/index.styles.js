import styled from 'styled-components';


export const Preloader = styled.span`
    & {
      
            width: 28px;
            height: 28px;
            line-heigth: 10px;
            border: 5px solid #FFF;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
           
        
            @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
            } 
    }
`;
