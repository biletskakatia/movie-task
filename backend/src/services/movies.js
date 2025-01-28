import { Movies } from '../db/models/Movies.js';

export const getMoviesService = async () => {
    const movies = await Movies.find();
    return movies;
};

export const findMovieById = async (movieId) => {
    return Movies.findById(movieId);
};

export const createMovie = payload => Movies.create(payload);

export const updateMovie = async (filter, data, options = {}) => {
    const updateMovie = await Movies.findOneAndUpdate(filter, data, {
        new: true,
        ...options,
    });

    if (!updateMovie) return null;
    return {
        data: updateMovie,
        isNew: Boolean(options.upserted)
    };
};
export const deleteMovieServices = filter => Movies.findByIdAndDelete(filter);