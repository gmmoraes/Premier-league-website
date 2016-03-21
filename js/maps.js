function maps(){
  var anfield = {
    center:new google.maps.LatLng(53.430967, -2.960835),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var stadiumOfLight = {
    center:new google.maps.LatLng(1, 1),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), anfield);
  map1 = new google.maps.Map(document.getElementById("map-canvas"), stadiumOfLight);
}


module.exports = maps;
