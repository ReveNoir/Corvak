require('dotenv').load()

import Migi from '@popcorn.moe/migi'
import { Roles, Message } from './modules'

const migi = new Migi({ root: __dirname })
const loadModules = modules => modules.forEach(module => migi.loadModule(module))

migi.on('ready', () => {
  migi.settings.prefix = ['+']
  migi.user.setActivity('EdeniaCraft', { type: 'PLAYING' })
  console.log(`Connected on ${ migi.user.tag }`)

  migi.guilds.forEach(guild => {
    guild.roles.forEach(role => {
      console.log(`${ role.id } -> ${ role.name }`)
    })
  })
})



loadModules([Roles])

migi.login(process.env.DISCORD_TOKEN).catch(_ => console.log('Error, with Login'))