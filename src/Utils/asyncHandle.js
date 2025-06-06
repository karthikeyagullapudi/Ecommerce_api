import { handleError } from "./errorHandle.js";

const asyncPromise = (RequestHandle) => {
  return (req, res, next) => {
    Promise.resolve(RequestHandle(req, res, next)).catch((err) => {
      handleError(err, res, "something went wrong", 500);
    });
  };
};
export default asyncPromise;
