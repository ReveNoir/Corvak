require('dotenv').load()

import Migi from '@popcorn.moe/migi'
import { Roles, Message } from './modules'

const migi = new Migi({ root: __dirname })
const loadModules = modules => modules.forEach(module => migi.loadModule(module))

migi.on('ready', () => {
  migi.settings.prefix = ['+']
  migi.user.setActivity('EdeniaCraft', { type: 'PLAYING' })

  /*migi.guilds.filter(({ id }) => id === '492926234913669131').forEach(({ channels }) => {
    channels.filter(({ id }) => id === '532230432201244692').forEach(channel => { //532230432201244692 => Demande de role
      channel.send({
        embed: {
          color: 3447003,
          title: 'Ajout de Races',
          description: 'Pour vous ajouter un role il suffit juste d\'accepter la reactions',
          fields: [
            { name: 'Humain', value: ':smiley:', inline: true },
            { name: 'Trépassé ', value: ':dizzy_face:', inline: true },
            { name: 'Golem', value: ':triumph:', inline: true },
            { name: 'Obscur', value: ':scream:', inline: true},
            { name: 'Triton', value: ':sleepy:', inline: true }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: migi.user.avatarURL,
            text: 'Made By Ahkrin_ [L\'imposteur]'
          }
        }
      })

      channel.send({
        embed: {
          color: 3447003,
          title: 'Ajout de Metiers',
          description: 'Pour vous ajouter un role il suffit juste d\'accepter la reactions',
          fields: [
            { name: 'Chercheur d\'or', value: ':pick:', inline: true },
            { name: 'Forestier', value: ':evergreen_tree:', inline: true },
            { name: 'Exploitant', value: ':tractor:', inline: true },
            { name: 'Trappeur', value: ':fox:', inline: true },
            { name: 'Tavernier', value: ':beers:', inline: true },
            { name: 'Erudit', value: ':tea:', inline: true },
            { name: 'Armurier', value: ':shield:', inline: true }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: migi.user.avatarURL,
            text: 'Made By Ahkrin_ [L\'imposteur]'
          }
        }
      }).catch(console.error)

      channel.send({
        embed: {
          color: 3447003,
          title: 'Ajout de Autres',
          description: 'Pour vous ajouter un role il suffit juste d\'accepter la reactions',
          fields: [
            { name: 'Marchand', value: ':gem:', inline: true },
            { name: 'Mage', value: ':heartpulse:', inline: true },
            { name: 'Combattant', value: ':bow_and_arrow:', inline: true },
            { name: 'Mercenaire', value: ':cowboy:', inline: true },
            { name: 'Prêtre', value: ':green_heart:', inline: true },
            { name: 'Celestrier', value: ':horse:', inline: true },
            { name: 'Roleplay', value: ':cop:', inline: true },
            { name: 'Ping', value: ':envelope:', inline: true }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: migi.user.avatarURL,
            text: 'Made By Ahkrin_ [L\'imposteur]'
          }
        }
      }).catch(console.error)
    })
  })*/

  console.log(`Connected on ${ migi.user.tag }`)
})

loadModules([Roles])
migi.login(process.env.DISCORD_TOKEN).catch(_ => console.log('Bad Credentials'))