/**
 * Created by mgonzalez on 06/02/15.
 */


angular.module('crudTest', ['CRUD'])
    .config(['letrestConfigProvider', function(letrestConfigProvider) {
    letrestConfigProvider.$get().URLS.REST =  {
        'BASE': {
            URL: 'http://54.187.139.96:8080/'
        }
    };
}
]);

angular.module('crudTest').controller('mainCtrl', function(){
    this.message = 'Hello CRUD user';
    debugger;
});
