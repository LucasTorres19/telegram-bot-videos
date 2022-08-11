import TelegramBot  from "node-telegram-bot-api"
import dotenv from "dotenv";

dotenv.config()

const options = {
   
    polling: true,
    baseApiUrl: 'http://localhost:8081'
   };

   const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, options);

// messages.

bot.on("message", (msg) => {

    if(msg.text === "/longfile"){

    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, "enviando video...");
        
    bot.sendVideo(chatId,"C:/Users/liqui/Desktop/videos guitarra/2022-01-01 17-25-30.mp4")

    }

  });
  