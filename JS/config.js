angular.module( 'config', [ ] )
    .config( function( $routeProvider ){
            $routeProvider
                .when('/',{
                    templateUrl: 'modules/home/home.html',
                    controller: 'generalController'
                })
                .when('/home',{
                    templateUrl: 'modules/home/home.html',
                    controller: 'generalController'
                })
                .when('/error',{
                    templateUrl: 'modules/error/error.html',
                    controller: 'generalController'
                })
                .when('/info/:USER',{
                    templateUrl: 'modules/info/info.html',
                    controller: 'infoController'
                })
                .otherwise({ redirectTo: '/' }); ;
    })