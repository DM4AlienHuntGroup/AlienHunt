const Scoreboard = require( "./Scoreboard.js" )

module.exports = {
	getScoreboard: ( req, res ) => {
		Scoreboard.find( {}, ( err, scoreboard ) => {
			if ( err ) {
				return res.status( 500 ).json( err )
			}
			else {
				sortByKey = (array, key) => {
				    return array.sort(function(a, b) {
				        var x = a[key]; var y = b[key];
				        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
				    }).reverse().slice(0, 10);
				}
				let sortedArr = sortByKey(scoreboard, "score");
				sortedArr.forEach( ( cv, i, arr ) => {
					arr[i].place = i + 1
				} )
				return res.status( 200 ).json( sortedArr )
			}
		})
	},
	putScoreboard: ( req, res ) => {
		Scoreboard.find( {}, ( err, scoreboard ) => {
			if ( err ) {
				return res.status( 500 ).json( err )
			}
			else {
				sortByKey = (array, key) => {
				    return array.sort(function(a, b) {
				        var x = a[key]; var y = b[key];
				        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
				    }).reverse().slice(0, 10);
				}
				let sortedArr = sortByKey(scoreboard, "score");
				for (let i = 0; i < sortedArr.length; i++) {
					if (sortedArr[i].score < req.body.score) {
						Scoreboard.findByIdAndRemove( sortedArr[i]._id, ( err, deletedScore ) => {
							if (err) {
								return res.status(500).json(err)
							}
							else {
								new Scoreboard( req.body ).save( ( err, score ) => {
									if ( err ) {
										return res.status( 500 ).json( err )
									}
									else {
										return res.status( 200 ).json( score )
									}
								} )
							}
						} )
						break;
					}
				}
			}
		})
	}
}
