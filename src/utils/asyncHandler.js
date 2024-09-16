import { error } from "console";

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};

// const asyncHandler = (fn) => async (req, res, nesxt) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
