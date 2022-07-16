import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
    userEmail: string;
}
// define initial state
const initialState: IAuthState = {
    userEmail: ""
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLoggedInUserEmail: (state: IAuthState, action) => {
            state.userEmail = action.payload
        }
    },
})

export const { setLoggedInUserEmail } = authSlice.actions

export default authSlice.reducer;
