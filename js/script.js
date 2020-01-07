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