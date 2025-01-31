import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";

const isValidId = (req, res, next) => {
    const { movieId } = req.params;
    if (!isValidObjectId(movieId)) {
        return next(createHttpError(404, `${movieId} not valid id`));
    }
    next();
};

export default isValidId;