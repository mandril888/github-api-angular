angular.module( 'urlService', [ ] )

	.factory('urlService', function($http) {

        var urlApi = 'https://api.github.com/search/users?q=<SEARCH>';
        function getInfoUser ( userToSearch ) {
            var urlApiWithUser = urlApi.replace( '<SEARCH>', userToSearch )
            return $http.get( urlApiWithUser );
        }

        var urlBio = 'https://api.github.com/users/<SEARCH>';
        function getBioUser ( userToSearch ) {
            var urlBioWithUser = urlBio.replace( '<SEARCH>', userToSearch )
            return $http.get( urlBioWithUser );
        }

        return {
            getInfoUser : getInfoUser,
            getBioUser : getBioUser
        }
        
        
    })