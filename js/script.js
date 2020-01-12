setTimeout( function () {
	location.href='rocket.html'
}, 1000 );

	// changes class name
var doStuff = function () {
	var currentClassName = document.getElementById('cool').className;
	if( currentClassName == 'cool' ){
		document.getElementById( 'cool' ).className = 'cool red';
	} else {
		document.getElementById( 'cool' ).className = 'cool';
	}
}

var car = {
	make: 'vw',
	type: 'golf',
	isTurnedOn : false,
	engine : {
		'type' : 'petrol',
		'displacement' : '1800',
		'cylinders': 4
	},
	fly: function(){
		alert('fly');
	},
	carState : function() {
		return this.isTurnedOn;
	},
	switchCar : function() {
		this.isTurnedOn = !this.isTurnedOn;
	}
}
console.log('hello world')