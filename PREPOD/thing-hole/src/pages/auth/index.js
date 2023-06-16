import React from 'react';
import {Wrapper, WrapperForm} from './index.styles.js';
import {SignUpUser} from './sign-up-user';
import { useNavigate } from 'react-router-dom';
import {LoggedUser} from './logged-user';
import { IconButton } from '../../components/icon-button';
import {getIsLoggedIn} from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const AuthPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(getIsLoggedIn);

    const onBackButtonClick = () => {
        navigate('/');
    };

    // TODO validation esli uspeem
    return (
        <Wrapper>
            <WrapperForm>
                <IconButton onClick={onBackButtonClick}>На главную</IconButton>
                { isLoggedIn ?<LoggedUser/> : <SignUpUser/> }
            </WrapperForm>
        </Wrapper>
    );
};