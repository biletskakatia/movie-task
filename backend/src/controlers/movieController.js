import { getMoviesService, findMovieByIdService, createMovieService, updateMovieService,deleteMovieServices } from '../services/movieService.js';
import createHttpError from 'http-errors';

export const getMoviesController = async (req, res) => {
    const movies = await getMoviesService();
    res.status(200).json({
        status: 200,
        message: "Successfully found movie!",
        data: movies,
    });
};

export const getMovieByIdController = async (req, res) => {
    const { movieId } = req.params;
    const movies = await findMovieByIdService(movieId);

    if (!movies) {
        throw createHttpError(404, "Movie not found");
    }
    res.status(200).json({
        status: 200,
        message: `Successfully found movie with id ${movieId}!`,
        data: movies,
    });
};

export const addMoviesController = async (req, res) => {
    const movies = await createMovieService(req.body);
    res.status(201).json({
        status: 201,
        message: "Successfully created movie!",
        data: movies,
    });
};

export const patchMovieController = async (req, res) => {
    const { movieId } = req.params;
    const result = await updateMovieService({_id:movieId},req.body);

    if (!result) {
        throw createHttpError(404, "Movie not found");
    }
    res.status(200).json({
        status: 200,
        message: `Successfully patch a movie with id ${movieId}!`,
        data: result.data,
    });
};

export const deleteMovieController = async (req, res) => {
    const { movieId } = req.params;
    const data = await deleteMovieServices({_id:movieId});

    if (!data) {
        throw createHttpError(404, "Movie not found");
    }
    res.status(200).json({
        status: 200,
        message: "Successfully deleted movie!",
        id: movieId,
    });
};