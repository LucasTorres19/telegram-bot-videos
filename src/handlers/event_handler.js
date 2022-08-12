import fs from 'fs'

const setEvents = (client, bot) => {
  const event_files = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'))

  for (const file of event_files){
    console.log({file})
    import(`../events/${file}`)
    .then(({default: event}) => {
      const event_name = file.split('.')[0]
      bot.on(event_name, event.bind(null, bot, client))
    })
    .catch(err => console.log(err))
  }
}

export default setEvents;