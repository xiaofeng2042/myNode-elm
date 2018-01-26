var AdminModel = require('../../models/admin/admin')
var AddressComponent = require('../../prototype/addressComponent')
var crypto = require('crypto');
var formidable = require('formidable');
var dtime = require('time-formater');

class Admin extends AddressComponent{
	constructor(){
		super()
		this.login = this.login.bind(this);
	}
}