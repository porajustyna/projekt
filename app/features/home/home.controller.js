export default class HomeController {
  constructor($scope, $firebaseArray, $rootScope) {
   var  ref = new Firebase("https://projektangular1.firebaseio.com");
$scope.lista = $firebaseArray (ref);

 $rootScope.sprmail = false;


$scope.zalogujsie = function() {
    $rootScope.sprmail = true;

};


$scope.dodajtaska = function() {
             if( $rootScope.sprmail === true){
              var message_ref = new Firebase('https://projektangular1.firebaseio.com/Zadania');
              var newMessageRef = message_ref.push();
              newMessageRef.set({
                  'Email': $scope.email,
                  'Tresc': $scope.task,
                  'Status': 'w realizacji'
              
});
}
else{
    alert("Aby dodać zadanie musisz być zalogowany")
}


};

}
}