app.directive('uniqueEmailAddress', function() {
	return {
		restrict: 'AE',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl){
			// watch the attribute every input email
			scope.$watch(attr.ngModel, function(value) {
				// loop all users data
				for(var i=0;i<scope.users.length;i++) {
					// check the email address is matched
				    if(scope.users[i].emailaddress==value){
				        ctrl.$setValidity('uniqueEmailAddress', false);
				 	} else {
				 		 ctrl.$setValidity('uniqueEmailAddress', true);
				 	}
				}
			});
	 	}
	}
});
