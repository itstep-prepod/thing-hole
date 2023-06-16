import { createAsyncThunk } from "@reduxjs/toolkit";
import {registerUser, signIn, logOut} from '../firebase';
import {setUserLogout} from './userSlice';

export const userRegister = createAsyncThunk(
    'user/register',
    async ({email, password}, thunkApi) => {

        const {user} = await registerUser(email, password);

        // async stuff

        // thunkApi.dispatch({type, payload});

        // thunkApi.fulfillWithValue();

        // thunkApi.rejectWithValue({text: 'vse ploo'});

        return {
            email: user.email,
            uid: user.uid
        }
    }
); 

export const userLogin = createAsyncThunk(
    'user/login',
    async ({email, password}, thunkApi) => {

        const {user} = await signIn(email, password);

        const userData = {
            email: user.email,
            uid: user.uid
        };

        return userData;
    }
); 

export const userLogout = createAsyncThunk(
    'user/logout',
    async (_, {dispatch}) => {
        await logOut();

        dispatch(setUserLogout())
    }
);