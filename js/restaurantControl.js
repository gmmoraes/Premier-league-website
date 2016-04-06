function restaurantControl(restaurantDiv,map){
  restaurantToogle = 0;
  markers = [];
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '4px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Get the current traffic';
  controlUI.style.marginTop = '11px';
  controlUI.style.marginRight = '180px';
  restaurantDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '21px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Restaurants and Bars';
  controlUI.appendChild(controlText);


  controlUI.addEventListener('click', function() {
    if (restaurantToogle == 0){
      restaurantsMarks();
    }

    restaurantToogle = 1;
    toogleRestaurant();
  });


function restaurantsMarks(){
  infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: myLatLng,
      radius: 500,
      types: ['restaurant', 'bar']
    }, callback);
  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        markers.push(marker);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    window.marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    console.log(place.rating);

    google.maps.event.addListener(marker, 'click', function() {
      /**
      photo = place.photos[0].getUrl({ 'maxWidth': 35, 'maxHeight': 35 });

      infowindow.setContent(place.name + " " + place.rating + " " + place.vicinity +
          " " + String(place.website) + " " + '<img  height="42" width="42" src="' + photo + '"</img>' );
     **/
      if (place.rating && place.vicinity){
        infowindow.setContent('<span style="padding: 0px; text-align:left" align="left"><h5>' + "Name:" + " " + place.name + '&nbsp; &nbsp; ' + '</br>' + "Address:" + " " + place.vicinity + '</br>' + "Rating:" + " " + place.rating + '</h5></span>');
      }else if (place.rating){
          infowindow.setContent('<span style="padding: 0px; text-align:left" align="left"><h5>' + "Name:" + " " + place.name + '&nbsp; &nbsp; ' + '</br>' + "Rating:" + " " + place.rating + '</h5></span>');
      }else{
        infowindow.setContent('<span style="padding: 0px; text-align:left" align="left"><h5>' + "Name:" + " " + place.name + '&nbsp; &nbsp; ' + '</h5></span>');
      }


      infowindow.open(map, this);
    });
  }

  function toogleRestaurant(){
    if(marker.getMap() == null){
        setMapOnAll(map);
    } else {
        setMapOnAll(null);
    }
  }

  function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

}

module.exports = restaurantControl;
