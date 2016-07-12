angular.module('starter.home', [])

  .controller('homeController', ['$scope', '$ionicTabsDelegate','$ionicListDelegate', function ($scope, $ionicTabsDelegate, $ionicListDelegate) {

    var items = [
      {
        title: '脸部清洁护理专用',
        description: '下单即赠婴幼儿纯棉柔巾',
        newprice:'142',
        oldprice:'237.2'
      },
      {
        title: '脸部清洁护理专用',
        description: '下单即赠婴幼儿纯棉柔巾',
        newprice:'142',

        oldprice:'237.2'
      }
    ];
    var hotitems = [[{
          title: '袋装婴儿面部加厚加绒专用',
          newprice:'142'
        },
        {
          title: '脸部脸部清洁护理专用',
          newprice:'142'
        }],
        [{
          title: '袋装婴儿面部加厚加绒专用',
          newprice:'142'
        },
        {
          title: '脸部清脸部洁护理专用',
          newprice:'142'
        }],
        [{
            title: '袋装婴儿面部加厚加绒专用',
            newprice:'142'
          },
          {
            title: '脸部清脸部洁护理专用',
            newprice:'142'
          }]

    ];
    $scope.items = items;
    $scope. hotitems =  hotitems;
    $scope.isShowTabs = true;
    // $scope.getIndex = function () {
    //   var i = $ionicTabsDelegate.selectedIndex();
    //
    //   console.log(i);
    // };
    $scope.gotoTab = function (index) {
       $ionicTabsDelegate.select(index);
     };

    // $scope.showHideTabs = function () {
    //   $ionicTabsDelegate.$getByHandle('myTabs').showBar($scope.isShowTabs = !$scope.isShowTabs);
    // }
  }])
