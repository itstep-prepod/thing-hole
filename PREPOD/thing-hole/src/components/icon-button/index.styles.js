import styled from 'styled-components';


export const Wrapper = styled.div`
    & {
        padding: 10px 0;
        display: flex;
        align-items: center;
        line-height: 10px;
        justify-content: flex-start;
        cursor: pointer;

        * {
            display: block;

            &:not(:last-child) {
                margin-right: 5px;
            }
        }
    }
`;