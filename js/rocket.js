var timer = null;
var countdown = 10;
var changeState = function (newState) {
	document.body.className = 'body-state' + newState;
	clearInterval( timer );
	var countdown = 10;
	document.getElementById( 'countdown' ).innerHTML = countdown;

	// countdown
	if ( newState == 2 ){
		timer = setInterval( function () {
			countdown -= 1;
			document.getElementById( 'countdown' ).innerHTML = countdown;
			if( countdown == 0 ) {
				changeState( 3 );
			}
		}, 300 );	
	}

	// launched
	else if ( newState == 3 ) {
		var success = setTimeout( function () {
			var randmonNum = Math.round( Math.random() * 10 );
			console.log( randmonNum );
			if ( randmonNum > 5 ){
				changeState( 4 );
			} else {
				changeState( 5 );
			}
		}, 2000 )
	}

	// crash
	else if ( newState == 5 ) {

	}

	// countdown aborted
	else if ( newState == 6 ){

	}
}