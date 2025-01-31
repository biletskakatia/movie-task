import createHttpError from "http-errors";

const validateBody = schema => {
    const func = async (req, res, next) => {
        try {
            console.log("Received body:", req.body);
            await schema.validateAsync(req.body, {
                abortEarly: false,
            });
            next();
        } catch (error) {
            console.error("Validation error:", error.details);
            const errors = error.details ? error.details.map(detail => detail.message) : [error.message]; 
            const validateError = createHttpError(400, { message: "Validation Error", errors });
            next(validateError);
        }
    };
    return func;
};
export default validateBody;