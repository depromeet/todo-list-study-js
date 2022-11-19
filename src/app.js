import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

app.use("/api/v1", router);
app.use(cors());

app.listen(3000, () => {
  console.log("Server Start");
});
