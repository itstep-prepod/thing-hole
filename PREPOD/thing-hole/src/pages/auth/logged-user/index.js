import React from 'react';
import { IconButton } from '../../../components/icon-button';
import {Paragraph} from './index.styles';
import { useSelector } from 'react-redux';
import {getUserEmail} from '../../../redux/selectors';
import { useDispatch } from 'react-redux';
import {userLogout} from '../../../redux/actions';

export const LoggedUser = () => {
    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();

    const onUserLogout = () => {
        dispatch(userLogout());
    };

    return (
        <>
            <h2>You are logged in </h2>
            <Paragraph> as <b>{userEmail}</b> </Paragraph>
            <IconButton iconName="LOGOUT" onClick={onUserLogout}>
                Logout
            </IconButton>
        </>
    );
};

