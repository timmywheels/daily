console.log('linked')

var carRental = {

	sedan: {
		rentalPrice: 80,
		numAvailable: 18,

	},

	suv: {
		rentalPrice: 100,
		numAvailable: 0,

	},

	sports: {
		rentalPrice: 150,
		numAvailable: 6,

    },

    adjustAvailability: function(){

    	this[carType].numAvailable--;

    },

	checkAvailability: function(carType){

		if(this[carType].numAvailable > 0)
			adjustAvailability();
			
			return(`Would you like to rent a ${carType} for $${this[carType].rentalPrice} per day?`);


		// else{
		// 	return `Unfortunately we're all out of ${carType}'s, please select another type of vehicle `;
		// }
	},

}

carRental.checkAvailability('sedan')