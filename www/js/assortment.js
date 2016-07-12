angular.module('starterAssCtrl', [])
	// .config(function ($stateProvider,$urlRouterProvider){
	//   $stateProvider
	//     .state('tabs',{
	//       url:'/tab',
	//       templateUrl:'./assortment/assortment.html'
	//     //  controller:'tabController'
	//     })
	//     .state('tabs.ass',{
	//       url:'/women',
	//       views:{
	//         'women-tab':{
	//           templateUrl:'./assortment/women.html'
	//         }
	//       }
	//     })
	//     .state('tabs.seach',{
	//       url:'/home',
	//       views:{
	//         'home-tab':{
	//           templateUrl:'./assortment/home.html'
	//         }
	//       }
	//     })
	//     .state('tabs.shopping',{
	//       url:'/men',
	//       views:{
	//         'men-tab':{
	//           templateUrl:'./assortment/men.html'
	//         }
	//       }
	//     })
	    
	//     $urlRouterProvider.otherwise('/kid');
	// })
// .controller('kidController', ['$scope', function ($scope) {

//   }])
//   .controller('womenController', ['$scope', function ($scope) {

//   }])
//   .controller('homeController', ['$scope', function ($scope) {

//   }])
.controller("kidCtrl",function($scope){


  var items = [
    {
      title:"婴童护理",
      src:"../img/ass-list1.png"
    },
    {
      title:"婴童卫浴",
      src:"../img/ass-list1.png"
    },
    {
      title:"婴童床品",
      src:"../img/ass-list1.png"
    },
    {
      title:"婴童服装",
      src:"../img/ass-list1.png",
      age:"(1-4岁)"
    },
    {
      title:"婴童服装",
      src:"../img/ass-list1.png",
      age:"(1-4岁)"
    },
    {
      title:"婴童服装",
      src:"../img/ass-list1.png",
      age:"(3-6岁及以上)"
    },
    {
      title:"婴童服饰",
      src:"../img/ass-list1.png"
    }
  ];

  $scope.items = items;
  console.log(items);
  // $scope.showDelete = false;
  // $scope.showReorder = false;
  // $scope.moveItem = function(item, $fromIndex, $toIndex){
  //  items.splice($fromIndex, 1);
  //  items.splice($toIndex , 0, item)
  // }
})
.controller("hotCtrl",function($scope){


  var hots = [
    {
      title:"婴童护理",
      src:"../img/ass-list1.png"
    },
    {
      title:"婴童卫浴",
      src:"../img/ass-list1.png"
    },
    {
      title:"婴童床品",
      src:"../img/ass-list1.png"
    },
    {
      title:"婴童服装",
      src:"../img/ass-list1.png",
      age:"(1-4岁)"
    }
  ];

  $scope.items = items;

 
})
.config(function ($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('assortments',{
			url:'/assortment',
			templateUrl:'./tapls/assortment.html'
		})
		.state('assortment.kid',{
			url:'/kid',
			views:{
				'kid-assortment':{
					templateUrl:'./tapls/assortment/kids.html'
				}
			}
		})
		.state('assortment.women',{
			url:'/women',
			views:{
				'women-assortment':{
					templateUrl:'./tapls/assortment/women.html'
				}
			}
		})
		.state('assortment.ass-home',{
			url:'/assHome',
			views:{
				'assHome-assortment':{
					templateUrl:'./tapls/assortment/ass-home.html'
				}
			}
		})
		.state('assortment.men',{
			url:'/men',
			views:{
				'men-assortment':{
					templateUrl:'./tapls/assortment/men.html'
				}
			}
		})
			
		$urlRouterProvider.otherwise('/tab');  	
})
.controller('assTabCtrl',['$scope',function($scope) {
	$scope.switchTab=function ($this){
		// angular.element("."+class).append('active').siblings().removeClass('active');
		// this.addClass('active').siblings().removeClass('active');
		console.log(this);
	}
}])