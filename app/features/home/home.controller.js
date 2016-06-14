export default class HomeController {
  constructor($scope, $firebaseArray, $rootScope) {
   var  ref = new Firebase("https://projektangular1.firebaseio.com/Zadania");

$scope.lista = $firebaseArray (ref);

 $rootScope.sprmail = false;
 $rootScope.FiltrEmail="";
 
 
 
$rootScope.zrobione = false;
$rootScope.wszystkie = true;
$rootScope.dowykonania = false;




$scope.zalogujsie = function() {
     var walidacja = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
      if ($scope.email == '' || !walidacja.test($scope.email)){
          $rootScope.FiltrEmail = "";
    alert("Błąd ! Wpisz poprawny adres email");
     $rootScope.sprmail = false;
   
}
else{
     $scope.emailwer=$scope.email;
    $rootScope.sprmail = true;
     
}

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





$scope.doneTask = function(message) {

            var ref = new Firebase('https://projektangular1.firebaseio.com/Zadania/' + message.$id)
            ref.update({
                Status: 'Wykonane'
            });
}




$scope.deleteTask= function(message) {
$scope.lista.$remove(message)

}



 $scope.ZatwierdzoneFiltracja = function() {
            $rootScope.zrobione = true
            $rootScope.wszystkie = false
            $rootScope.dowykonania = false

};



 $scope.ListazadanFiltracja = function() {
            $rootScope.zrobione = false
            $rootScope.wszystkie = true
            $rootScope.dowykonania = false
            
          

};



 $scope.DoZrobieniaFiltracja = function() {
            $rootScope.zrobione = false
            $rootScope.wszystkie = false
            $rootScope.dowykonania = true
            
          

};


 $scope.Mojezad = function() {
            $rootScope.FiltrEmail =$scope.email;
            
};




 $scope.Zadaniawszy = function() {
            $rootScope.FiltrEmail = "";
};



}
}