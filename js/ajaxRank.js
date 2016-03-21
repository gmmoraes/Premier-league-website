function ajaxRank(){
  var $orders = $('#orders');

  $.ajax({
    headers: { 'X-Auth-Token': '69e49cf35c7346fcb819f023cf0b98d4' },
    url: 'http://api.football-data.org/v1/soccerseasons/398/leagueTable',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    var regex = /.*?$/;
    for (i = 0; i < 20; i++) {
      $('#tbodyRank').append('<tr>' + '<td>' + response.standing[i].position + '</td>'
      +'<td><img id="logo" src="../style/img/' + response.standing[i].teamName +'.png"' +  'alt="description here" /></td>'
       + '<td>' + response.standing[i].teamName + '</td>' +
      '<td>' + response.standing[i].playedGames + '</td>'+
      '<td>' + response.standing[i].points + '</td>' +
      '<td>' + response.standing[i].goals + '</td>' +
      '<td>' + response.standing[i].goalsAgainst + '</td>' +
      '<td>' + response.standing[i].goalDifference + '</td>' +
      '<td>' + response.standing[i].wins + '</td>' +
      '<td>' + response.standing[i].draws + '</td>' +
      '<td>' + response.standing[i].losses + '</td>' + '</tr>' );
    }
  });
}

module.exports = ajaxRank;
