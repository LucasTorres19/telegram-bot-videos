import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

//configs
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto: ${PORT}.`);
});
