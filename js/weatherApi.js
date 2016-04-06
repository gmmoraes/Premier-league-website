function weatherApi(){
  $.ajax({
    url: 'js/stadium.json',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    var name = window.location.hash.substring(1);
    var latlngs = response.stadiums;
    lat1 = latlngs[name].lat;
    long1 = latlngs[name].long;
    var myLatLng = {lat: lat1, lng: long1};
    //var latlngs = response.stadiums;
    //location = latlngs[name].locations;
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + String(name) +',uk&mode=json&appid=9ffdfeacb9ebb3c4fe61ebb58293f6af&units=metric',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      for (i = 0; i < 40; i++) {
        var mapDescription = response.list[0].weather[0].description;
        var mapIcon = response.list[0].weather[0].icon;
        mapMain = response.list[0].weather[0].main;
      }
      console.log(mapDescription);
    window.marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     title: 'weather',
     icon: 'http://openweathermap.org/img/w/' + mapIcon + '.png'
   });
   });
 });

}

module.exports = weatherApi;
