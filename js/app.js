window.jQuery = $ = require('jquery');
var navbarTop = require('./navbarTop.js');
var ajaxRank = require('./ajaxRank.js');
var schedule = require('./schedule.js');
var schedulesNav = require('./scheduleNav.js');
var leagueRankingNav  = require('./leagueRankingNav.js');
var maps  = require('./maps.js');
var mapNav  = require('./mapNav.js');



$(function(){
  navbarTop();
  ajaxRank();
  schedulesNav();
  schedule();
  leagueRankingNav();
  mapNav();
  maps();
});
