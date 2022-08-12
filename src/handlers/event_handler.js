import fs from 'fs'

const setEvents = (client, bot) => {
  const load_dir = (dir) => {
    const event_files = fs.readdirSync(`./src/events/${dir}`).filter(file => file.endsWith('.js'))
    for (const file of event_files){
      const event = import(`../events/${dir}/${file}`)
      .then(({default: event}) => {
        const event_name = file.split('.')[0]
        bot.on(event_name, event.bind(null, bot, client))
      })
      .catch(err => console.log(err))
    }
  }
  const events_dirs = ['guild']
  events_dirs.forEach(dir => load_dir(dir))
}

export default setEvents;