import React from 'react';
import {Wrapper, Title, Description, Image} from './index.styles.js';


export const ThingCard = ({title, description, imgUrl, coords}) => {
    return (
        <Wrapper>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            <Image src={imgUrl}/>
        </Wrapper>
    );
};