import config from '../../config.json'
console.log({config})

const onMessage = (bot, client, message) => {
  const prefix = config.prefix
  console.log({message})
  //|| message.author.bot
  if(!message.text.startsWith(prefix) ) return;

  const args = message.text.slice(prefix.length).split(/ +/)
  const cmd = args.shift().toLowerCase()

  const command = client.commands.get(cmd);
  console.log({command})
  if(command) command.execute(client, message, args, bot);
}
onMessage.bind()
export default onMessage