import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = 'https://movie-task-1-g6q8.onrender.com';

export const fetchMovies = createAsyncThunk(
    'movies/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/movies');
        return response.data.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchMovieById = createAsyncThunk(
    'movies/fetchById',
    async (movieId, thunkAPI) => {
        try {
            const response = await axios.get(`/movies/${movieId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addMovie = createAsyncThunk(
    'movies/addMovie',
    async (newMovie, thunkAPI) => {
        try {
            console.log("Sending data to API:", newMovie);
            const response = await axios.post('/movies', newMovie);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateMovie = createAsyncThunk(
    'movies/updateMovie',
    async ({movieId, updatedMovie}, thunkAPI) => {
        try {
            const response = await axios.patch(`/movies/${movieId}`, updatedMovie);
            return response.data.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteMovie = createAsyncThunk(
    'movies/deleteMovie',
    async (movieId, thunkAPI) => {
        try {
            await axios.delete(`/movies/${movieId}`);
            return { id: movieId };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);