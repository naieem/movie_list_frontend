import { createSlice } from '@reduxjs/toolkit'

import { Movie } from "../interfaces/app.interface";

export interface IMovieState {
    PageSize: number;
    sortBy: string
    sortStatus: string,
    sortOrder: string,
    currentPage: number,
    currentMovie: Movie[],
    totalMovie: number;
}
// define initial state
const initialState: IMovieState = {
    PageSize: 10,
    sortBy: "",
    sortStatus: "",
    sortOrder: "",
    currentPage: 1,
    currentMovie: [],
    totalMovie: 0
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setCurrentPage: (state: IMovieState,action) => {
            state.currentPage= action.payload
        },
        setCurrentMovie: (state: IMovieState,action) => {
            state.currentMovie= action.payload
        },
        setTotalMovie: (state: IMovieState,action) => {
            state.totalMovie= action.payload
        },
    },
})

export const { setCurrentPage, setCurrentMovie,setTotalMovie } = movieSlice.actions

export default movieSlice.reducer;
