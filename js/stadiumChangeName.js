function stadiumChangeName(){
  window.stadiums = ['Emirates Stadium', 'Villa Park', 'Dean Court', 'Stamford Bridge', 'Selhurst Park', 'Goodison Park', 'King Power Stadium', 'Anfield', 'Etihad Stadium', 'Old Trafford',
'St. Jamess Park', 'Carrow Road', 'St Marys Stadium', 'Britannia Stadium', 'Stadium of Light', 'Liberty Stadium', '	White Hart Lane', 'Vicarage Road',
'The Hawthorns', 'Boleyn Ground'];
  $( "a:contains('Sunderland AFC')" ).text(stadiums[14]).click(function(){
    //window.location.href='maps.html?mapTarget=54.914740&that=-1.388371';
    window.location.href='maps.html#anfield';

  });
  $( "a:contains('Norwich City FC')" ).text(stadiums[11]).click(function(){
    //window.location.href='maps.html?mapTarget=52.622205&that=1.309150';
    window.location.href='maps.html#Carrow Road';

  });
  $( "a:contains('West Bromwich Albion FC')" ).text(stadiums[18]).click(function(){
    //window.location.href='maps.html?mapTarget=52.509207&that=-1.963967';
    window.location.href='maps.html#The Hawthorns';

  });
  $( "a:contains('Crystal Palace FC')" ).text(stadiums[4]).click(function(){
    //window.location.href='maps.html?mapTarget=51.398474&that=-0.085485';
    window.location.href='maps.html#Selhurst Park';

  });
  $( "a:contains('Leicester City FC')" ).text(stadiums[6]).click(function(){
    //window.location.href='maps.html?mapTarget=52.620596&that=-1.142220';
    window.location.href='maps.html#King Power Stadium';

  });
  $( "a:contains('Manchester United FC')" ).text(stadiums[9]).click(function(){
    //window.location.href='maps.html?mapTarget=53.463212&that=-2.291254';
    window.location.href='maps.html#Old Trafford';

  });
  $( "a:contains('Watford FC')" ).text(stadiums[17]).click(function(){
    //window.location.href='maps.html?mapTarget=51.650099&that=-0.401566';
    window.location.href='maps.html#Vicarage Road';

  });
  $( "a:contains('West Ham United FC')" ).text(stadiums[19]).click(function(){
    //window.location.href='maps.html?mapTarget=51.532137&that=0.039402';
    window.location.href='maps.html#Boleyn Ground';

  });
  $( "a:contains('Everton FC')" ).text(stadiums[5]).click(function(){
    //window.location.href='maps.html?mapTarget=53.438953&that=-2.966470';
    window.location.href='maps.html#Goodison Park';

  });
  $( "a:contains('Arsenal FC')" ).text(stadiums[0]).click(function(){
    //window.location.href='maps.html?mapTarget=51.555122&that=-0.108459';
    window.location.href='maps.html#Emirates Stadium';

  });
  $( "a:contains('Swansea City FC')" ).text(stadiums[15]).click(function(){
    //window.location.href='maps.html?mapTarget=51.642904&that=-3.935296';
    window.location.href='maps.html#Liberty Stadium';

  });
  $( "a:contains('Liverpool FC')" ).text(stadiums[7]).click(function(){
    //window.location.href='maps.html?mapTarget=53.431015&that=-2.960851';
    window.location.href='maps.html#Anfield';

  });
  $( "a:contains('Stoke City FC')" ).text(stadiums[13]).click(function(){
    //window.location.href='maps.html?mapTarget=52.988413&that=-2.175443';
    window.location.href='maps.html#Britannia Stadium';

  });
  $( "a:contains('Tottenham Hotspur FC')" ).text(stadiums[16]).click(function(){
    //window.location.href='maps.html?mapTarget=51.603379&that=-0.065728';
    window.location.href='maps.html#White Hart Lane';

  });
  $( "a:contains('Newcastle United FC')" ).text(stadiums[10]).click(function(){
    //window.location.href='maps.html?mapTarget=54.975735&that=-1.621742';
    window.location.href='maps.html#St. Jamess Park';

  });
  $( "a:contains('AFC Bournemouth')" ).text(stadiums[2]).click(function(){
    //window.location.href='maps.html?mapTarget=50.735394&that=-1.838293';
    window.location.href='maps.html#Dean Court';

  });
  $( "a:contains('Chelsea FC')" ).text(stadiums[3]).click(function(){
    //window.location.href='maps.html?mapTarget=51.481843&that=-0.190999';
    window.location.href='maps.html#Stamford Bridge';

  });
  $( "a:contains('Manchester City FC')" ).text(stadiums[8]).click(function(){
    //window.location.href='maps.html?mapTarget=53.483368&that=-2.200438';
    window.location.href='maps.html#Etihad Stadium';

  });
  $( "a:contains('Southampton FC')" ).text(stadiums[12]).click(function(){
    //window.location.href='maps.html?mapTarget=50.905548&that=-1.391195';
    window.location.href='maps.html#St Marys Stadium';

  });
  $( "a:contains('Aston Villa FC')" ).text(stadiums[1]).click(function(){
    //window.location.href='maps.html?mapTarget=52.509236&that=-1.884751';
    window.location.href='maps.html#Villa Park';

  });
}

module.exports = stadiumChangeName;
