import fs from 'fs'

const setCommands = (client, bot) => {
  const command_files = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'))

  for (const file of command_files){
    console.log({file})
    import(`../commands/${file}`)
    .then(({default: command}) => {
      if(command?.name){
        client.commands.set(command.name, command)
      }
    })
    .catch(err => console.log(err))
  }

}

export default setCommands;
