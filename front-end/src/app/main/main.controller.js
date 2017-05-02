 export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.getMessages();

  }

  	getMessages(){
  		var vm = this; //vm means view model 
  		this. $http.get('http://localhost:5000/api/message').then(function(result){
  			vm.messages = result.data;
  			//sconsole.log(result);
  		});
  	}

    postMessage(){
    	this. $http.post('http://localhost:5000/api/message', {msg: this.message})
    }

}
