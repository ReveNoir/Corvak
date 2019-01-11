require('dotenv').load()
import Migi from '@popcorn.moe/migi'

const migi = new Migi({
  root: __dirname
})

migi.loadModule()

migi.on('ready', () => console.log(`Connected on ${ migi.user.tag }`))
migi.login(process.env.DISCORD_TOKEN)