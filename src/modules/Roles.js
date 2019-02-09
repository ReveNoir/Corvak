import { command, autodelete } from '@popcorn.moe/migi'

export default class Roles {

	constructor () {
		this.ranks = [
			'Humain', 'Trépassé', 'Golem', 'Obscur', 'Fée', 
			"Chercheur d'or", 'Forestier', 'Exploitant', 'Trappeur', 'Tavernier', 'Erudit', 'Armurier',
			'Marchand', 'Mage', 'Combattant', 'Mercenaire', 'Prêtre', 'Celestrier', 'Roleplay', 'Druide',
			'Ping'
		]
		this.ids = [
			'504323391373967371', '504323472755785748', '504323469228507136', '504323471170600961', '504323465940303875',
			'532230700041109505', '532231325785260063', '532231542278455298', '532231674021412904', '532231719902904330',
			'532231805277962261', '532231848185692182', '498930866077171728', '498931135179522049', '534328924013068288',
			'498930964572012565', '532233625635258368', '532233657952239617', '495948176537419779', '534327864330420234',
			'543823276745424906'
		]

		this.message = {
			text: `Kroaa! Action effectuée!`,
			time: 5000
		}
		
	}

	@autodelete()
  @command(/^role(?: (.*))?$/)
	async role ({ channel, member, guild }, args) {
		await member.addRoles(this.getRanks(args.split(','))).catch(error => {})
		channel.send(this.message.text).then(message => message.delete(this.message.time)).catch(console.error)
	}

	@autodelete()
	@command(/^retrait(?: (.*))?$/)
	async retrait ({ channel, member }, args) {
		await member.removeRoles(this.getRanks(args.split(','))).catch(error => {})
		channel.send(this.message.text).then(message => message.delete(this.message.time)).catch(console.error)
	}

	getRanks (values) {
		return values.filter(e => this.ranks.includes(e.trim()))
			.map(e => e.trim())
			.map(e => this.ids[this.ranks.indexOf(e.trim())])
	}

}
