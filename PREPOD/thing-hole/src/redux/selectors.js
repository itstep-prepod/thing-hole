import {createSelector} from '@reduxjs/toolkit';



export const getStateUser = (state) => state.user;

export const getUserEmail = createSelector(
    getStateUser,
    ({userCreds: {email}}) => email
);

export const getIsLoggedIn = createSelector(
    getStateUser,
    (user) =>  !!user.userCreds
);

export const getIsLoading = createSelector(
    getStateUser,
    ({isLoading}) => isLoading
);

