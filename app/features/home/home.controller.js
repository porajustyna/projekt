export default class HomeController {
  constructor($scope, $firebaseArray) {
   var  ref = new Firebase("https://projektangular1.firebaseio.com");
$scope.lista = $firebaseArray (ref);
  }
}