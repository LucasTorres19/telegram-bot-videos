const longFile = {
  name: 'longfile',
  description: "Send a long file",
  execute(client, msg, _args, bot){
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "enviando video...");
    bot.sendVideo(
      chatId,
      "D:/Videos/l_OIxrq10f7X6nZg.mp4"
    )
    .then(() => {
    console.log('video enviado')
    bot.sendMessage(chatId, "video enviado 😎");
  })
    .catch(() => console.log('error al enviar video'));
  }
}

export default longFile