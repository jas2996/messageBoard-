export class AuthController {

    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }
    register() {
        //console.log("works")
        var vm = this;
        this.$auth.signup(this.user).then(function(token) {
            vm.$auth.setToken(token)
        });
    }
}
