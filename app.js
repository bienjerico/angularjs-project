var app = angular.module('app', []);


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


app.controller('authController', ['$scope','$window','$timeout','$location', function($scope,$window,$timeout,$location) {

	// existing data
	var usersData = [{
			firstname: 'Admin',
			lastname: 'User',
			emailaddress: 'admin@user.com',
			password: 'a'
	}];

	// notification message default
	var messagesData = {
			status : 'danger',
			message : 'Something wrong.',
			result : false
	};

	$scope.users 	= usersData;
	$scope.msg 		= messagesData;


	// submit sign up form
	$scope.submitSignUpForm = function(isValid) {
		// validate
		if (isValid) {
			$scope.users.push($scope.signup); // add to usersData
			console.log($scope.users);
			$scope.signup = '';	 // empty the signup fields
			$scope.signupForm.$setPristine();  // reset the form validation
			$scope.msg = {status : 'success', message: 'Successfully Saved.', result : true};// return message

		}
	};

	// submit sign up form
	$scope.submitSignInForm = function(isValid) {
		// validate
		if (isValid) {

			var validEmailAddress = false;
			var validPassword = false;

			// loop all users data
			for(var i=0;i<$scope.users.length;i++) {
				// check the email address is matched
			    if($scope.users[i].emailaddress==$scope.signin.emailaddress){
			        validEmailAddress = true;
			    }
			    // check the email address is matched
			    if($scope.users[i].password==$scope.signin.password){
			        validPassword = true;
			    }
			}

			// valid email address and password
			if(validEmailAddress && validPassword) {
				$scope.msg = {status : 'success', message: 'Successfully Signed In.', result : true};// return message
				/*
				$timeout(function(){
					 $window.location.href = '/home.html';
				}, 300);
				*/
				
			// valid email address and invalid password	
			} else if (validEmailAddress && !validPassword) {
				$scope.msg = {status : 'warning', message: 'Invalid password.', result : true};// return message
			// invalid
			} else {
				$scope.msg = {status : 'danger', message: 'No Record.', result : true};// return message
			}
		}
	};


}]);