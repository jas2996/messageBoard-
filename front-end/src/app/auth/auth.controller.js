export class AuthController{

	constructor($auth){
		'ngInject';
		this.$auth = $auth;
	}
	register(){
		console.log("works")
		this.$auth.signup({email: 'contact@jaslamba.me'})
	}
	
}