import migi, { on } from '@popcorn.moe/migi'

export default class Roles {

	constructor (client) {
		this.client = client
	}

	@on('messageReactionAdd')
	reactionAdd (reaction, user) {
		this.emojis(reaction.emoji.name, id => {
			reaction.message.channel.guild.fetchMember(user).then(member => {
				member.addRole(id).catch(console.error)
			}).catch(console.error)
		})
	}	

	@on('messageReactionRemove')
	reactionRemove (reaction, user) {
		this.emojis(reaction.emoji.name, id => {
			reaction.message.channel.guild.fetchMember(user).then(member => {
				member.removeRole(id).catch(console.error)
			}).catch(console.error)
		})
	}

	emojis (name, callback) {
		switch(name) {
			case '😃': callback('504323391373967371'); break;
			case '😵': callback('504323472755785748'); break;
			case '😤': callback('504323469228507136'); break;
			case '😱': callback('504323471170600961'); break;
			case '😪': callback('504323465940303875'); break;

			case '⛏': callback('532230700041109505'); break;
			case '🌲': callback('532231325785260063'); break;
			case '🚜': callback('532231542278455298'); break;
			case '🦊': callback('532231674021412904'); break;
			case '🍺': callback('532231719902904330'); break;
			case '🍵': callback('532231805277962261'); break;
			case '🛡': callback('532231848185692182'); break;

			case '💎': callback('498930866077171728'); break;
			case '💗': callback('498931135179522049'); break;
			case '🏹': callback('533427845335220224'); break;
			case '🤠': callback('498930964572012565'); break;
			case '💚': callback('532233625635258368'); break;
			case '🐎': callback('532233657952239617'); break;
			case '👮': callback('495948176537419779'); break;
			case '✉': callback('543823276745424906'); break;
			default: break;
		}
	}

	@on('ready')
	role () {
		this.client.guilds.filter(({ id }) => id === '492926234913669131').forEach(({ channels }) => {
			channels.filter(({ id }) => id === '532230432201244692').forEach(channel => { //532230432201244692 => Demande de role
				channel.fetchMessages({ around: "544254508801196032", limit: 1 }).then(messages => {
					messages.first().react("😃").catch(console.error)
					messages.first().react("😵").catch(console.error)
					messages.first().react("😤").catch(console.error)
					messages.first().react("😱").catch(console.error)
					messages.first().react("😪").catch(console.error)
				}).catch(console.error)

				channel.fetchMessages({ around: "544254510206418959", limit: 1 }).then(messages => {
					messages.first().react("⛏").catch(console.error)
					messages.first().react("🌲").catch(console.error)
					messages.first().react("🚜").catch(console.error)
					messages.first().react("🦊").catch(console.error)
					messages.first().react("🍺").catch(console.error)
					messages.first().react("🍵").catch(console.error)
					messages.first().react("🛡").catch(console.error)
				}).catch(console.error)

				channel.fetchMessages({ around: "544254511200468993", limit: 1 }).then(messages => {
					messages.first().react("💎").catch(console.error)
					messages.first().react("💗").catch(console.error)
					messages.first().react("🏹").catch(console.error)
					messages.first().react("🤠").catch(console.error)
					messages.first().react("💚").catch(console.error)
					messages.first().react("🐎").catch(console.error)
					messages.first().react("👮").catch(console.error)
					messages.first().react("✉").catch(console.error)
				}).catch(console.error)
			})
		})
	}

}
