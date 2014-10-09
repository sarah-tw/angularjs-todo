var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoController', ['$scope', function($scope){
	$scope.todos = JSON.parse(localStorage.todos || "[]");
	$scope.date = new Date();
	$scope.toggle = false;
	$scope.myname = "";
	$scope.addTodo = function(){
		$scope.todos.push({text: $scope.todoText, done: false});
		localStorage.todos = JSON.stringify($scope.todos)
		$scope.todoText = '';
	};
	$scope.remaining = function(){
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count += todo.done? 0 : 1;
		});
		return count;
	};
}]);