import React from 'react';
import {ThingCard} from '../thing-card';
import {Wrapper} from './index.styles.js';
import { useSelector } from 'react-redux';
import {getThings} from '../../redux/selectors';
// import {useThingsContext} from '../../context/things-context/useThingsContext';

export  const ThingsCardList = () => {
    // const {things, deleteThing, onCardClick} = useThingsContext();
    const things = useSelector(getThings);

    const onCardClick = () => {};
    const deleteThing = () => {};

    return (
        <Wrapper>
            {things.map((props) => (
                <ThingCard 
                    {...props}
                    onCardClick={onCardClick}
                    onDelete={deleteThing}
                    key={props.title}
                />
            ))}
        </Wrapper>
    );
};




