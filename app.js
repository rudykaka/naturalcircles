var app = angular.module('ngemailApp', []);
app.controller('ngemailCtrl', function ($scope) {
$scope.sendForm = function () {
$scope.msg = "Thank you! Email Validated";
};
});