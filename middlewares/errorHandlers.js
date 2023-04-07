const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.Validation_Error:
      res.json({
        success: false,
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UnAuthorized:
      res.json({
        success: false,
        title: "UNAUTHORIZED",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.Forbidden:
      res.json({
        success: false,
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.Not_Found:
      res.json({
        success: false,
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.Server_Error:
      res.json({
        success: false,
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("All Good---->");
      break;
  }
};

module.exports = errorHandler;
