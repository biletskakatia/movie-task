

const errorHandler = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    const errors = error.errors ? error.errors : [message];

    res.status(status).json({
        status,
        message,
        data: errors,
    });
};
export default errorHandler;