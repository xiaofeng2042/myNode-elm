var mongoose = require('mongoose')
var paymentsData = require('../../InitData/payments')

const Schema = mongoose.Schema;

const paymentsSchema = new Schema({
	description: String,
	disabled_reason: String,
	id: Number,
	is_online_payment: Boolean,
	name: String,
	promotion: [],
	select_state: Number,
})

const Payments = mongoose.model('Payments', paymentsSchema);

Payments.findOne((err, data) => {
	if (!data) {
		paymentsData.forEach(item => {
			Payments.create(item);
		})
	}
})	

module.exports = Payments