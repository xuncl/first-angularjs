 var app = angular.module('myapp', []); // 模块是M\V\C\指令\过滤器的集合

 // 应该把公共的部分抽取成service
 app.controller('CommonController', ['$scope', function($scope) { // 注入$scope？
     $scope.commonFn = function() {
         alert("This is common function.");
     };
     $scope.world = "World";
     // $rootScope.department = "先生"; // 新版本已经没有rootScope了
     $scope.department = "先生";
 }]);

 app.controller('HelloAngular', function($scope) {
     $scope.greeting = {
         text: "Hello1"
     };
     $scope.test1 = function() {
         alert("test1");
     };
 });
 app.controller('HelloAngular2', function($scope) {
     $scope.greeting = {
         text: "Hello2"
     };
     $scope.test2 = function() {
         alert("test2");
     };
 });

// 视图的复用靠directive
app.directive("hello", function(){
	return {
		restrict: 'E',
		template: '<div>Hi Everyone!</div>',
		replace: true
	};
});

// scope
app.controller('ListCtrl', function($scope) {
	$scope.names = ['Liuxu', 'Xunchenlong', 'Liuxingchi'];
});

// event
app.controller('EventCtrl', function($scope) {
	$scope.count=0;
	$scope.$on('MyEvent', function(){ // 注册事件
		$scope.count++;
		console.log(""+angular.element(0).scope());
	});
});


