function schedule(){
  $.ajax({
    headers: { 'X-Auth-Token': '69e49cf35c7346fcb819f023cf0b98d4' },
    dataType: 'json',
    type: 'GET',
    url: 'http://api.football-data.org/v1/soccerseasons/398/fixtures?matchday',
  }).done(function(response) {
    for (i = 218; i < 380; i++) {
      $('#tbodySchedule').append('<tr id="trSchedule">' + '<td>' + response.fixtures[i].date.substring(0, 10) + " " + response.fixtures[i].date.substring(11, 16)  + '</td>' +
      '<td>' + response.fixtures[i].homeTeamName + '</td>'+ '<td>' + "vs" + '</td>' +
      '<td>' + response.fixtures[i].awayTeamName + '</td>'+
      '<td id="scheduleStatus">' + response.fixtures[i].status + '</td>'+
      '<td>' + '<a href="#" id="'+ response.fixtures[i].homeTeamName.substring(0, 3) +'">' + response.fixtures[i].homeTeamName +'</a>' + '</td>'+ '</tr>');

      $("tr td:contains('FINISHED')").each(function(){
        $(this).parent().remove();
      });

      $("tr td:contains('IN_PLAY')").each(function(){
        $(this).parent().remove();
      });

      $("tr td:contains('POSTPONED')").each(function(){
        $(this).parent().remove();
      });
    }
    var stadiumChangeName = require('./stadiumChangeName.js');
    stadiumChangeName();
  });
}

module.exports = schedule;
