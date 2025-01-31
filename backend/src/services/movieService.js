import { Movies } from '../db/models/Movies.js';

export const getMoviesService = async () => {
    const movies = await Movies.find();
    return movies;
};

export const findMovieByIdService = async (movieId) => {
    return Movies.findById(movieId);
};

export const createMovieService = payload => Movies.create(payload);

export const updateMovieService = async (filter, data, options = {}) => {
    const updateMovie = await Movies.findOneAndUpdate(filter, data, {
        new: true,
        ...options,
    });

    if (!updateMovie) return null;
    return {
        data: updateMovie,
        isNew: Boolean(options.upsert)
    };
};
export const deleteMovieServices = filter => Movies.findByIdAndDelete(filter);