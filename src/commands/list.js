const list = {
    name: 'list',
    description: "sends the user a complete list of videos",
    async execute(client, msg, _args, bot){
      
      const chatId = msg.chat.id;
    
      const array_videos = [

        {
            url:"https://i.ytimg.com/vi/hb-znms6Ch4/maxresdefault.jpg",
            name:"Destapando trucos visuales en juegos de Super Mario"
        },
        {
            url:"https://kemono.party/data/8d/6e/8d6e814d53b9fc35d1b3a557e5297d0b51ce42b1b3abac92b7d10022d48a62b5.jpg?f=mmmmmmmmmm.jpg",
            name:"Metallica - Orion (Lead Guitar Backing Track with Tabs)"
        },
        {
            url:"https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg",
            name:"Las 20 cosas de MÚSICA que todo MÚSICO debería saber"
        },
        {
            url:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AKPZU27GMFBEPODD4ABENRZP74.jpg",
            name:"¿Qué es el HORROR CÓSMICO? y como reconocerlo en el cine, videojuegos, literatura, etc."
        }
      ]
      try{
        for await (const video of array_videos) {
          await bot.sendPhoto(chatId, video.url, {caption: video.name});
        }
      }catch(err){
        console.log({err})
      }
    

    }
  }
  
  export default list