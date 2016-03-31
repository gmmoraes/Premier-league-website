function WeatherControl(weatherDiv, map) {
window.weatherIconToogle = 0;
// Set CSS for the control border.
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
controlUI.style.marginRight = '150px';
weatherDiv.appendChild(controlUI);

// Set CSS for the control interior.
var controlText = document.createElement('div');
controlText.style.color = 'rgb(25,25,25)';
controlText.style.fontFamily = 'Arial,sans-serif';
controlText.style.fontSize = '12px';
controlText.style.lineHeight = '21px';
controlText.style.paddingLeft = '5px';
controlText.style.paddingRight = '5px';
controlText.innerHTML = 'Weather';
controlUI.appendChild(controlText);


// Setup the click event listeners: simply set the map to Chicago.
controlUI.addEventListener('click', function() {
  var weatherApi = require('./weatherApi.js');
  weatherApi();
  if (weatherIconToogle == 0){
    weatherIconToogle = weatherIconToogle +1;
  }else{
    weatherIconToogle = weatherIconToogle -1;
  }
});



}



module.exports = WeatherControl;
