/* -------------------------------------------------------------------------- */
/*                            FUNCIONES EN OBJETOS                            */
/* -------------------------------------------------------------------------- */

const band = {
	name: 'The Beatles',
	genre: 'Rock',
	songs: ["I'll Be Back", "Maxwell's Silver Hammer", "Revolution 9"],
	members: {
		john: 'john',
		paul: 'paul',
		george: 'george',
		ringo: 'ringo'
	},
	/*
    Antes
	answerInterview: function() {
		return `We were just a band, it was me ${this.members.john}, then ${this.members.paul}, then ${this.members.george} and then ${this.members.ringo}`
    }
    */
	/* CON ES6 también: */
	answerInterview() {
		return `We were just a band, it was me ${this.members.john}, then ${this.members.paul}, then ${this.members.george} and then ${this.members.ringo}`
	}
}

console.log(band.answerInterview());