window.jQuery = $ = require('jquery');
//window.handlebars = require('handlebars');
var navbarTop = require('./navbarTop.js');
var ajaxRank = require('./ajaxRank.js');
var schedule = require('./schedule.js');
var schedulesNav = require('./scheduleNav.js');
var leagueRankingNav  = require('./leagueRankingNav.js');
var maps  = require('./maps.js');
var mapNav  = require('./mapNav.js');
var tableFilter  = require('./tableFilter.js');
page = require('page');
//var routes  = require('./routes.js');




$(function(){
  navbarTop();
  ajaxRank();
  schedulesNav();
  schedule();
  leagueRankingNav();
  mapNav();
  maps();
  tableFilter();
  //routes();
});
