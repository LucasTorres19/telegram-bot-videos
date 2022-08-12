const longFile = {
  name: 'longfile',
  description: "Send a long file",
  execute(client, msg, _args, bot){
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "enviando video...");
    bot.sendVideo(
      chatId,
      "D:/Videos/l_OIxrq10f7X6nZg.mp4"
    );
  }
}

export default longFile