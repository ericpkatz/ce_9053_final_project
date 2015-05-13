angular.module("myWorld")
  .controller("ThingsCtrl", function($scope, ThingsSvc, NavSvc){
    NavSvc.setTab("Things");
    $scope.message = "I am the things control";
    ThingsSvc.getThings().then(function(things){
      $scope.things = things;
    })
  })
  .factory("ThingsSvc", function($http, $q){
    return {
      getThings: getThings
    };
    
    function getThings(){
      var dfd = $q.defer();
      $http.get("/api/things").then(function(result){
        dfd.resolve(result.data);
      });
      return dfd.promise; 
    }
  });

