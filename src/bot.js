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
    commands: new Collection(),
    users: new Collection()
  }

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


