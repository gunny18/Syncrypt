const whitelist = [
  "http://localhost:3000",
  "https://wondrous-pastelito-f7c630.netlify.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
