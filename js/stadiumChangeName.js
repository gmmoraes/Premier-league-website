function stadiumChangeName(){
  stadiums = ['Emirates Stadium', 'Villa Park', 'Dean Court', 'Stamford Bridge', 'Selhurst Park', 'Goodison Park', 'King Power Stadium', 'Anfield', 'Etihad Stadium', 'Old Trafford',
'St. Jamess Park', 'Carrow Road', 'St Marys Stadium', 'Britannia Stadium', 'Stadium of Light', 'Liberty Stadium', '	White Hart Lane', 'Vicarage Road',
'The Hawthorns', 'Boleyn Ground'];
  $( "a:contains('Sunderland AFC')" ).text(stadiums[14]).click(function(){
    //window.location.href= 'https://www.google.com.br/maps/place/' + stadiums[14] + '/';

    window.location.href='maps.html';
  });
  $( "a:contains('Norwich City FC')" ).text(stadiums[11]);
  $( "a:contains('West Bromwich Albion FC')" ).text(stadiums[18]);
  $( "a:contains('Crystal Palace FC')" ).text(stadiums[4]);
  $( "a:contains('Leicester City FC')" ).text(stadiums[6]);
  $( "a:contains('Manchester United FC')" ).text(stadiums[9]);
  $( "a:contains('Watford FC')" ).text(stadiums[17]);
  $( "a:contains('West Ham United FC')" ).text(stadiums[19]);
  $( "a:contains('Everton FC')" ).text(stadiums[5]);
  $( "a:contains('Arsenal FC')" ).text(stadiums[0]);
  $( "a:contains('Swansea City FC')" ).text(stadiums[15]);
  $( "a:contains('Liverpool FC')" ).text(stadiums[7]);
  $( "a:contains('Stoke City FC')" ).text(stadiums[13]);
  $( "a:contains('Tottenham Hotspur FC')" ).text(stadiums[16]);
  $( "a:contains('Newcastle United FC')" ).text(stadiums[10]);
  $( "a:contains('AFC Bournemouth')" ).text(stadiums[2]);
  $( "a:contains('Chelsea FC')" ).text(stadiums[3]);
  $( "a:contains('Manchester City FC')" ).text(stadiums[8]);
  $( "a:contains('Southampton FC')" ).text(stadiums[12]);
  $( "a:contains('Aston Villa FC')" ).text(stadiums[1]);
}

module.exports = stadiumChangeName;
