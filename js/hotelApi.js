function hotelApi(){
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


  $.ajax({
    url: 'http://terminal2.expedia.com/x/hotels?location=' + lat1 + "," + long1 + '&radius=5km&dates=2016-05-19,2016-05-22&apikey=dCIb9HK2YxDrcRdNfGZGRIHPNkmNYYJz',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    var hotelMatchingCount = parseInt(response.MatchingHotelCount);
    console.log(hotelMatchingCount);
    for (i = 0; i < hotelMatchingCount; i++) {
      console.log(response.HotelInfoList.HotelInfo[i].Name);
      //$('#accomodationContainer').append('  <ul id="accomodationUl"> <li>' + response.HotelInfoList.HotelInfo[i].Name + '</li></ul>');
      var hotelPrice = response.HotelInfoList.HotelInfo[0].Price.TotalRate.Value;
      var hotelPriceCurrency = response.HotelInfoList.HotelInfo[0].Price.TotalRate.Currency;
      var hotelUrl = response.HotelInfoList.HotelInfo[0].DetailsUrl;
      var hotelGuestRating = response.HotelInfoList.HotelInfo[0].GuestRating;

    }
  });
});
$('#accomodationContainer').append('<input type="button" value="a"/>');
}

module.exports = hotelApi;
