import TelegramBot from "node-telegram-bot-api";
import Collection from "./classes/collection";
import dotenv from "dotenv";
dotenv.config();


const initBot = () => {
  const options = {
    polling: true,
    baseApiUrl: "http://localhost:8081",
  };
  
  const token = process.env.BOT_TOKEN;
  const bot = new TelegramBot(token, options);
  
  const client = {
    commands: new Collection()
  }
  
  //tas lucas ?+
  //volvi xD estaba en una jojo
  // proba si funca
  //ni bola el bot :()
  // estas hosteando ya en local la api de telegram ?si estoy abriendo telegram
  // messages.
  // delete bot.on message in the future
  // bot.on("message", (msg) => {
  //   if (msg.text === "/longfile") {
  //     const chatId = msg.chat.id;
  //     bot.sendMessage(chatId, "enviando video...");
  //     bot.sendVideo(
  //       chatId,
  //       "C:/Users/liqui/Desktop/videos guitarra/2022-01-01 17-25-30.mp4"
  //     );
  //   }
  // });
  
  // pasa que no se esta ejecutando bot.js xd
  // xD hay que llamarlo en index
  //que pendejada hiciste !!!! dea
  //watafac xD
  // hay mas require :c
  //ya fue , volvemos al require :D
  const handlers = ['command_handler', 'event_handler']
  
  handlers.forEach(handler => {
    import(`./handlers/${handler}`)
    .then(module => {
      module.default(client, bot)
    })
    .catch(err => console.log(err))
  })
  
  return bot
}

export default initBot


