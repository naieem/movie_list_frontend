import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import movieReducer from "./reducers/movieReducer";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        auth: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch