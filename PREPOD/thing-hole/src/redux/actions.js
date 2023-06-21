import { createAsyncThunk } from "@reduxjs/toolkit";
import {registerUser, signIn, logOut, getUserDoc, addThingToUserDB, getUserThings} from '../firebase';
import {setUserLogout, setUserDoc, setUserThings, addThing} from './userSlice';


export const addLostThingToUserDB = createAsyncThunk(
    'user/thingAddToDB',
    async (thing, thunkApi) => {

        const {user: {userDoc}} = thunkApi.getState();
        const result = await addThingToUserDB(userDoc, thing);
        
        thunkApi.dispatch(addThing(thing));

        return result;
    }
);

export const userRegister = createAsyncThunk(
    'user/register',
    async ({email, password}, {dispatch}) => {

        const {user} = await registerUser(email, password);
        const userData = {
            email: user.email,
            uid: user.uid
        };

        const userDoc = await getUserDoc(userData);
        dispatch(setUserDoc(userDoc));

        // async stuff

        // thunkApi.dispatch({type, payload});

        // thunkApi.fulfillWithValue();

        // thunkApi.rejectWithValue({text: 'vse ploo'});

        return userData;
    }
); 

export const userLogin = createAsyncThunk(
    'user/login',
    async ({email, password}, {dispatch}) => {

        const {user} = await signIn(email, password);

        const userAuthData = {
            email: user.email,
            uid: user.uid
        };
        const userDoc = await getUserDoc(userAuthData);
        dispatch(setUserDoc(userDoc));

        const userData = await getUserThings(user.uid);
        dispatch(setUserThings(userData));

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