import React from 'react';
import {MainMenu} from '../../components/main-menu';
import {ContentWrapper, LeftSide, RightSide} from './index.styles.js';
import {ThingsCardList} from '../../components/things-card-list';

// TODO data model [{ title, descrription, urlImg, coords },{},{}]
// TODO useContext

export const MainPage = () => {
    return <>
        <MainMenu/>
        <ContentWrapper>
            <LeftSide/>
            <RightSide>
                <ThingsCardList/>
            </RightSide>
        </ContentWrapper>
    </>
};