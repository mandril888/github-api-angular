angular.module( 'infoService', [ ] )

    .factory('infoService', function($http) {

        var urlRepos = 'https://api.github.com/users/<SEARCH>/repos';
        function getReposUser ( userGetRepos ) {
            var urlReposWithUser = urlRepos.replace( '<SEARCH>', userGetRepos );
            return $http.get( urlReposWithUser );
        }

        return {
            getReposUser : getReposUser
        }
        
    })