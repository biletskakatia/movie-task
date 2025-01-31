import { Router } from 'express';
import { getMoviesController, getMovieByIdController, addMoviesController, patchMovieController, deleteMovieController } from '../controlers/movieController.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { addMovieSchema,patchMovieSchema } from '../validation/movieValidation.js';
import validateBody from '../utils/validateBody.js';
import isValidId from '../middlewares/isValidId.js';

const moviesRouter = Router();

moviesRouter.get('/', ctrlWrapper(getMoviesController));
moviesRouter.get('/:movieId', isValidId, ctrlWrapper(getMovieByIdController));
moviesRouter.post('/', validateBody(addMovieSchema), ctrlWrapper(addMoviesController));
moviesRouter.patch('/:movieId', isValidId, validateBody(patchMovieSchema), ctrlWrapper(patchMovieController));
moviesRouter.delete('/:movieId', isValidId, ctrlWrapper(deleteMovieController));

export default moviesRouter;