import Joi from 'joi';

export const addMovieSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    actors: Joi.string().required(),
    director: Joi.string().required(),
    genre: Joi.string().valid('Action', 'Comedy', 'Drama', 'Horror', 'Romance').required(),
    rating: Joi.number().min(0).max(10).optional(),
    releaseDate: Joi.date().iso().required() ,
    image: Joi.string().uri().optional(),
    favorite: Joi.boolean().optional(),
});
export const patchMovieSchema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    actors: Joi.string().optional(),
    director: Joi.string().optional(),
    genre: Joi.string().valid('Action', 'Comedy', 'Drama', 'Horror', 'Romance').optional(),
    rating: Joi.number().min(0).max(10).optional(),
    releaseDate: Joi.date().iso().optional() ,
    image: Joi.string().uri().optional(),
    favorite: Joi.boolean().optional(),
});
