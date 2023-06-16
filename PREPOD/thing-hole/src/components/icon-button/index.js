import React from 'react';
import {IoMdArrowBack, IoMdExit} from 'react-icons/io';
import {Wrapper} from './index.styles';

export const ICON_NAMES = {
    ARROW_BACK: IoMdArrowBack,
    LOGOUT: IoMdExit
}

export const IconButton = ({iconName = 'ARROW_BACK', children, onClick}) => {
    const Icon = ICON_NAMES[iconName];

    return (
        <Wrapper onClick={onClick}>
            <Icon/>
            <span>
                {children}
            </span>
        </Wrapper>
    );
}
