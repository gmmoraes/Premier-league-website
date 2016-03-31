function maps2(){
  function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
  }
  var lat1 = gup('mapTarget');
  var long1 = gup('that');

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
      }(lat1,long1),
      increment: function() {
        return ++i;
      }
    };
  })();

}



  /**
  lat = 52.509207;
  long = -1.963967;
  var stadium = window.location.hash.substring(1);
  console.log("centering map on: ",stadium);
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: new google.maps.LatLng(lat, long),
    radius:500,
    name: stadium,
  }, function(results) {
    var result = results[0]
    var stadium_lat = result.geometry.location.lat()
    var stadium_lng = result.geometry.location.lng()
    console.log("got result",stadium_lat,stadium_lng);

    var mapFocus = {
      center:new google.maps.LatLng(stadium_lat, stadium_lng),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapFocus);
  });
}

////////////////

/**
function searchAddress() {

  var addressInput = document.getElementById('address-input').value;

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({address: addressInput}, function(results, status) {
// addressInput e o valor de texto no exemplo, tentar usar o valor do link com a variavel stadium
  }
}**/


module.exports = maps2;
