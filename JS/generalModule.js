angular.module( 'generalModule', [ ] )

    .controller( 'generalController' , function ( $scope, $rootScope, $http, urlService, $location ) {

    	$scope.resultsSearchedUser = '';
    	$rootScope.bioUser = '';

    	$scope.submit = function() {

	    	urlService.getInfoUser( $scope.memberToSearch )
				.then( function( dataUserSearched ) {
					$scope.resultsSearchedUser = dataUserSearched.data.items[0];
					if($scope.resultsSearchedUser === undefined){
						$location.path( "/error" );
					} else {
						urlService.getBioUser( $scope.memberToSearch )
							.then( function( dataBioSearched ) {
								$rootScope.bioUser = dataBioSearched.data;
								$location.path( "/info/" + dataBioSearched.data.login );
							})
					}
				})
		}

    })