function mapNav(){
  /**
  function moveMapToBerlin(map){
  map.setCenter({lat:52.5159, lng:13.3777});
  map.setZoom(14);
}
**/
  $('#mapNav').click(function(){
    window.location.href='maps.html?mapTarget=1&that=1&stadium=Anfield';
    //moveMapToBerlin(map);
    //google.maps.event.addDomListener(window, 'load', maps);
    //map.panTo(new google.maps.LatLng( 0, 0 ));

  });
}


module.exports = mapNav;
