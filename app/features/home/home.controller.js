export default class HomeController {
  constructor($scope, $firebaseArray) {
   var  ref = new Firebase("https://projektangular1.firebaseio.com");
$scope.lista = $firebaseArray (ref);

$scope.dodajtaska = function() {
              var message_ref = new Firebase('https://projektangular1.firebaseio.com/Zadania');
              var newMessageRef = message_ref.push();
              newMessageRef.set({
                  'Email': $scope.email,
                  'Tresc': $scope.task,
                  'Status': 'w realizacji'
              
});

};

}
}