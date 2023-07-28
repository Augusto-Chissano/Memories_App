import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db_connect from "./database/db.js";

import postRoutes from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

db_connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
