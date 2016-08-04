angular.module( 'infoModule', [ ] )

    .controller( 'infoController' , function ( $scope, $routeParams, $rootScope, infoService, urlService, $location ) {

    	$scope.resultsSearchedRepos = '';
    	var userName = $routeParams.USER;

    	infoService.getReposUser( userName )
    		.then( function( dataReposSearched ) {
				$scope.resultsSearchedRepos = dataReposSearched.data;
			})


    	$scope.resultsSearchedUser = '';

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