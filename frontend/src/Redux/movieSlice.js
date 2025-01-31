import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieById, addMovie, updateMovie, deleteMovie } from './moviesOps.js';
import{ selectNameFilter} from './filterSlice.js';

const initialState = {
    items: [],
    currentMovie: null,
    isLoading: false,
    error: null,
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchMovieById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentMovie = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addMovie.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(addMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateMovie.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateMovie.fulfilled, (state, action) => {
                console.log("Payload in fulfilled:", action.payload);
                state.isLoading = false;
                state.items = state.items.map((movie) =>
            movie._id === action.payload?.movieId 
            ? { ...movie, ...action.payload.updatedMovie }
            : movie
            );
})
            .addCase(updateMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteMovie.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter(movie => movie._id !== action.payload.id);
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const selectMovie = state => state.movies.items|| [];
export const selectCurrentMovie = (state) => state.movies.currentMovie;
export const selectLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;
export default movieSlice.reducer;

export const selectFilteredMovies = createSelector(
    [selectMovie, selectNameFilter], (movies, namefilter) => {
        if (!Array.isArray(movies)) return [];
        return movies.filter(movie => movie.title?.toLowerCase().includes((namefilter || "").toLowerCase()));
}
)