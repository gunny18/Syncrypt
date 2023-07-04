const whitelist = [
  "http://localhost:3000",
  "https://64a3b5fb57067b1fe293f538--ephemeral-starlight-a6128b.netlify.app"
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
