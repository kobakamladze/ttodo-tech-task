import express from "express";
import cors from "cors";

import sequelize from "../db/db.js";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  console.log(JSON.stringify(req.body));
  console.log(req.query);
  console.log(req.params);
  next();
});

app.use("/api", router);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, (err) =>
      err ? console.log(err) : console.log(`Listening on PORT: ${PORT}...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
