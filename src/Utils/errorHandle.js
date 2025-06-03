const handleSucces = (res, message, statusCode, data = null) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
        status: statusCode,
    });
};
const handleError = (err, res, message, statusCode = 500, data = null) => {
    res.status(statusCode).json({
        success: false,
        message,
        data,
        status: statusCode,
        err,
    });
};
export { handleSucces, handleError };
