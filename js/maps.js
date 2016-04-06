function maps(){
  $.ajax({
    url: 'js/stadium.json',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    var name = window.location.hash.substring(1);
    var latlngs = response.stadiums;
    lat1 = latlngs[name].lat;
    long1 = latlngs[name].long;
    window.myLatLng = {lat: lat1, lng: long1};
    //var lat2 = response.users[1].joined;


  console.log(lat1);


  var counter = (function(){
    var i = 0;
    var a = 0;

    return {
      get: function(){
        return i;
        return a;
      },
      set: function( val, val2 ){
        i = val;
        a = val2;
        var anfield = {
        center:new google.maps.LatLng(i, a),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP};

        map = new google.maps.Map(document.getElementById("map"), anfield);
        trafficLayer = new google.maps.TrafficLayer();
        //google.maps.event.addDomListener(document.getElementById('trafficToggle'), 'click', toggleTraffic);
        var CenterControl  = require('./CenterControl.js');
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        var WeatherControl  = require('./WeatherControl.js');
        var weatherDiv = document.createElement('div');
        var weatherControl = new WeatherControl(weatherDiv, map);


        var restaurantControl  = require('./restaurantControl.js');
        var restaurantDiv = document.createElement('div');
        var restaurantControl = new restaurantControl(restaurantDiv, map);

        restaurantDiv.index = 3;
        centerControlDiv.index = 2;
        weatherDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(weatherDiv);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(restaurantDiv);
        //var trafficLayer = new google.maps.TrafficLayer();
        //trafficLayer.setMap(map);
        //var weatherApi = require('./weatherApi.js');
        //weatherApi();
      }(lat1,long1),
    };
  })();
  });
}

module.exports = maps;
