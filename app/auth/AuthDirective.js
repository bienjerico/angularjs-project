auth.directive('uniqueEmailAddress', function() {

	return {
		restrict: 'AE',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl){
			// watch the attribute every input email
			scope.$watch(attr.ngModel, function(value) {
				// console.log(scope.users);
				for(var i=0;i<scope.users.length;i++) {
					// check the email address is matched
				    if(scope.users[i].emailaddress==value){
				        ctrl.$setValidity('uniqueEmailAddress', false);
				        break;
				 	} else {
				 		 ctrl.$setValidity('uniqueEmailAddress', true);
				 	}
				}
			});
	 	}
	}
});
