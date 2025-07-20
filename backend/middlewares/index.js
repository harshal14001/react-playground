import fs from 'fs';

// middleware - logs request and response info
const logReqRes = (filename) => {
  return (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
};
export default logReqRes;
