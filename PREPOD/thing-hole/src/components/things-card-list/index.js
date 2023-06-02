import React from 'react';
import {ThingCard} from '../thing-card';
import {Wrapper} from './index.styles.js';
import {useThingsContext} from '../../context/things-context/useThingsContext';

export  const ThingsCardList = () => {
    const {things} = useThingsContext();

    return (
        <Wrapper>
            {things.map((props) => (
                <ThingCard {...props} key={props.title} />
            ))}
        </Wrapper>
    );
};




