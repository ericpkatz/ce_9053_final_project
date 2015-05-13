angular.module("myWorld")
  .controller("ThingsCtrl", function($scope, ThingsSvc, NavSvc){
    NavSvc.setTab("Things");
    $scope.message = "I am the things control";
    ThingsSvc.getThings().then(function(things){
      $scope.things = things;
    })
  })
  .controller("ThingCtrl", function($scope, $routeParams, ThingsSvc, NavSvc){
    NavSvc.setTab("Things");
    ThingsSvc.getThing($routeParams.id).then(function(thing){
      $scope.thing = thing;
    })
  })
  .factory("ThingsSvc", function($http, $q){
    return {
      getThings: getThings,
      getThing: getThing
    };
    
    function getThings(){
      var dfd = $q.defer();
      $http.get("/api/things").then(function(result){
        dfd.resolve(result.data);
      });
      return dfd.promise; 
    }
    
    function getThing(id){
      var dfd = $q.defer();
      $http.get("/api/things/" + id).then(function(result){
        dfd.resolve(result.data); 
      });
      return dfd.promise;
    }
  });

