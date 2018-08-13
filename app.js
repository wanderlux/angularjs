var app = angular.module('githubApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {

  $scope.color1a = 'btn-primary';
  $scope.color1b = 'btn-primary';
  $scope.color2 = 'btn-default';
  $scope.color3 = 'btn-secondary';
  $scope.color4 = 'success-color';

  $scope.rounded = '';
  $scope.colors = false;

  var styles = ['default','gradient','outline'];
  var current = 0;
  var color = 'purple';

  //loop through styles
  $scope.style = function() {

    (current == 2) ? current = 0 : current++;

    switch(current) {
      case 0: //default
        eraseStyle();
        $scope.color1a = 'btn-primary';
        $scope.color1b = 'btn-primary';
        $scope.color2 = 'btn-default';
        $scope.color3 = 'btn-secondary';
        $scope.color4 = 'btn-success';
        break;
      case 1: //gradient
        eraseStyle();
        $scope.gradient1 = 'peach-gradient';
        $scope.gradient2 = 'purple-gradient';
        $scope.gradient3 = 'blue-gradient';
        $scope.gradient4 = 'aqua-gradient';
        break;
      case 2:
        eraseStyle();
        $scope.colors = true;
        $scope.color1a = color + ' lighten-4';
        $scope.color1b = color + ' lighten-3';
        $scope.color2 = color  + ' lighten-2';
        $scope.color3 = color  + ' lighten-1';
        $scope.color4 = color;
        break;
      case 3: //outline
        eraseStyle();
        $scope.color1a = 'btn-outline-primary';
        $scope.color1b = 'btn-outline-primary';
        $scope.color2 = 'btn-outline-default';
        $scope.color3 = 'btn-outline-secondary';
        $scope.color4 = 'btn-outline-success';
        break;
    }

  };

  $scope.changeColor = function(c) {
    color = c;
    recolor();
  }

  $scope.roundit = function() {
    ($scope.rounded == '') ? $scope.rounded = 'btn-rounded' : $scope.rounded = '';
  };

  eraseStyle = function () {
    $scope.colors = false;
    $scope.color1a = $scope.color1b = $scope.color2 = $scope.color3 = $scope.color4 = '';
    $scope.gradient1 = $scope.gradient2 = $scope.gradient3 = $scope.gradient4 = '';
  };

  recolor = function() {
    $scope.color1a = color + ' lighten-4';
    $scope.color1b = color + ' lighten-3';
    $scope.color2 = color  + ' lighten-2';
    $scope.color3 = color  + ' lighten-1';
    $scope.color4 = color;
  };

}]);
