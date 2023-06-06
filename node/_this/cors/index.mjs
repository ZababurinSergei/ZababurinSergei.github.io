import { white } from '../list/index.mjs';

const corsOptions =  {
  origin: function (origin, callback) {
    if (white.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

export { corsOptions };

export default corsOptions;
