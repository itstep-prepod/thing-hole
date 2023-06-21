import {createSlice} from '@reduxjs/toolkit';
import {userRegister,userLogin} from './actions';

const userAuthFulfilled = (state, {payload}) => {
    state.isLoading = false;
    state.userCreds = payload;
}

const userAuthPending = (state) => {
    state.isLoading = true;
};

const userAuthRejected = (state) => {
    state.isLoading = false;
};



const userSlice = createSlice({
    name: 'user',
    initialState: {
        userCreds: null,
        userDoc: null,
        isLoading: false,
        things: []
    },
    reducers: {
        setUserLogged (state, action) {
            state.isLoggedIn = action.payload;
        },
        setUserLogout (state) {
            state.userCreds = null;
            state.userDoc = null;
            state.things = [];
        },
        setUserDoc (state, action) {
            state.userDoc = action.payload;
        },
        setUserThings (state, action) {
            state.things = action.payload.things;
        },
        addThing (state, action) {
            state.things = [...state.things, action.payload]
        }
    },
    extraReducers: (builder) => 
        builder.addCase(
            userRegister.fulfilled,
            userAuthFulfilled
        )
        .addCase(
            userRegister.pending,
            userAuthPending
        )
        .addCase(
            userRegister.rejected,
            userAuthRejected
        )
        .addCase(
            userLogin.fulfilled,
            userAuthFulfilled
        )
        .addCase(
            userLogin.pending,
            userAuthPending
        )
        .addCase(
            userLogin.rejected,
            userAuthRejected
        )
});


export const {setUserLogged, setUserLogout, setUserDoc, setUserThings, addThing} = userSlice.actions;

export default userSlice.reducer;


