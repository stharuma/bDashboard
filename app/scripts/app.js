'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3',
    'chart.js'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/shell', {
        templateUrl: 'views/shell.html',
        controller: 'ShellCtrl',
        controllerAs: 'shell'
      })
      .when('/resource', {
        templateUrl: 'views/resource.html',
        controller: 'ResourceCtrl',
        controllerAs: 'resource'
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',
        controllerAs: 'service'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/welxome', {
        templateUrl: 'views/welxome.html',
        controller: 'WelxomeCtrl',
        controllerAs: 'welxome'
      })
      .when('/goal', {
        templateUrl: 'views/goal.html',
        controller: 'GoalCtrl',
        controllerAs: 'goal'
      })
      .when('/learner', {
        templateUrl: 'views/learner.html',
        controller: 'LearnerCtrl',
        controllerAs: 'learner'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })
      .when('/case_report', {
        templateUrl: 'views/case_report.html',
        controller: 'CaseReportCtrl',
        controllerAs: 'caseReport'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/case', {
        templateUrl: 'views/case.html',
        controller: 'CaseCtrl',
        controllerAs: 'case'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');
  }).run(['$rootScope', '$location', function($rootScope, $location){
   var path = function() { return $location.path();};
   $rootScope.$watch(path, function(newVal, oldVal){
     $rootScope.activetab = newVal;
     oldVal =newVal;
   });
}]);
