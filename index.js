import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import initBot from "./src/bot.js"

const bot = initBot();
const app = express();

dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto: ${PORT}.`);
});
