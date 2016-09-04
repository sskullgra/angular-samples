var app = angular.module("app",['ui.bootstrap']);

app.controller("SingleInputCtrl",function($scope,$uibModal){
    $scope.name = "YourName";
    
    $scope.showPopup = function(){
        $uibModal.open({
            templateUrl: "templates/single-input.template.html",
            controller: "SingleInputPopupCtrl",
            resolve: {
                name: function(){ return $scope.name; }
            }
        }).result.then(
            function(result){
                $scope.name = result+v;
            },
            function(reason){
                console.log(reason);
            }
        );
    }
});


app.controller("SingleInputPopupCtrl",function($scope,$uibModalInstance,name){
    $scope.name = name;
    
    $scope.ok = function(){
		$uibModalInstance.close($scope.name);	
    }
    
    $scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
    }
    
});


