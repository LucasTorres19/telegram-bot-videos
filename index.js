import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import initBot from "./src/bot.js"

const bot = initBot();
const app = express();
//what is happening mom
// esta como haciendo el relative import desde el disco P: xd, lo tengo en el P: dea
// salgamonos de la llamda dea
// si pones el mouse arriba del src en el import sale bien xD
//jijijij 
// pero viste tipo intenta P:/src/bot.js  ni idea porque hace eso xD estaba leyendo que puede ser algo del coso que puse en el paquete json

// volvemos al require ? arreglado 😎 pusiste un requiere gordo bobo!!!!!
// hay mil requires en todos lados 
// es que necesito hacer como unis dinamic imports viste 
//no me la contes y bueno si queres volvemos al requiere , oka volvemos al requiere tonce 
// pera voy a intentar con dynamic import ya toy leyendo
//oka 👍 , yo mientras voy a levantar minitas ahre
// es async await el dynamic import :c
//xD ,tonce? que quedamos 😡 ,total poner el requiere es facil y no tenes que hacer quilombo.

// si creoq ue debemos hacer configuraciones y todo para que funque bien ni idea no se de servers
//esto me paso hace un tiempo y no me acuerdo como lo arregle xD
//configs
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto: ${PORT}.`);
});
