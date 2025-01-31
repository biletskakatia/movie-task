import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice.js';
import filterReducer from './filterSlice.js';

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        filters: filterReducer,
    },
});