import express from "express";
import cors from "cors";
import db from "./models";
import { apiRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((error: Error) => console.log(error));
