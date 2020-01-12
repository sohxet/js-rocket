var timer = null;
var countdown = 10;
var changeState = function ( newState ) {
	document.body.className = 'body-state' + newState;
	clearInterval( timer );
	var countdown = 10;
	document.getElementById( 'countdown' ).innerHTML = countdown;
	// reset state 1
	if ( newState == 1 ) {
		document.getElementById('nervous').className='nervous';
		document.getElementById('cant-wait').className='cant-wait';
	}

	// countdown
	if ( newState == 2 ){
		timer = setInterval( function () {
			countdown -= 1;
			document.getElementById( 'countdown' ).innerHTML = countdown;
			if( countdown == 0 ) {
				changeState( 3 );
			}
			if ( countdown > 4 && countdown < 8 ) {
				document.getElementById('nervous').className='nervous show';
			} else {
				document.getElementById('nervous').className='nervous';
			}
			if ( countdown > 1 && countdown <= 4 ) {
				document.getElementById('cant-wait').className='cant-wait show';
			} else {
				document.getElementById('cant-wait').className='cant-wait';
			}
		}, 300 );	
	}

	// launched
	else if ( newState == 3 ) {
		var success = setTimeout( function () {
			var randmonNum = Math.round( Math.random() * 10 );
			console.log( randmonNum );
			if ( randmonNum > 1 ){
				changeState( 4 );
			} else {
				changeState( 5 );
			}
		}, 2000 )
	}

	// crash
	else if ( newState == 5 ) {

	}
}