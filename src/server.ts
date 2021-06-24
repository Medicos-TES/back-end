import express from "express";
import cors from "cors";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

const app = express();
mongoose;

app.use(cors());
app.use(express.json());
app.use(router);

console.clear();

app.listen(1234, () => {
  console.log("Server OK");
});
