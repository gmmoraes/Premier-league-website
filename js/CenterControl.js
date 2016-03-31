function CenterControl(controlDiv, map) {
controlTextCounter = 0;
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
controlUI.style.marginRight = '10px';
controlDiv.appendChild(controlUI);

// Set CSS for the control interior.
var controlText = document.createElement('div');
controlText.style.color = 'rgb(25,25,25)';
controlText.style.fontFamily = 'Arial,sans-serif';
controlText.style.fontSize = '12px';
controlText.style.lineHeight = '21px';
controlText.style.paddingLeft = '5px';
controlText.style.paddingRight = '5px';
controlText.innerHTML = 'Traffic';
controlUI.appendChild(controlText);

// Setup the click event listeners: simply set the map to Chicago.
controlUI.addEventListener('click', function() {
  toggleTraffic();
  if (controlTextCounter == 0){
    $(controlText).append( '<ul class="extraTraffic">'
             + '<li class="extraTraffic"><span style="background-color: #30ac3e">&nbsp;&nbsp;</span><span style="color: #30ac3e"> &gt; 80 km per hour</span></li>'
             + '<li class="extraTraffic"style="padding-left: 15px"><span style="background-color: #ffcf00">&nbsp;&nbsp;</span><span style="color: #ffcf00"> 40 - 80 km per hour</span></li>'
             + '<li class="extraTraffic"><span style="background-color: #ff0000">&nbsp;&nbsp;</span><span style="color: #ff0000"> &lt; 40 km per hour</span></li>'
             + '<li class="extraTraffic"><span style="background-color: #c0c0c0">&nbsp;&nbsp;</span><span style="color: #c0c0c0"> No data available</span></li>'
             + '</ul>');
    controlText.style.paddingRight = '10px';
    controlTextCounter = controlTextCounter + 1;
  }else{
    $('.extraTraffic').remove();
    controlTextCounter = 0;
  }

});

function toggleTraffic(){
  if(trafficLayer.getMap() == null){
      //traffic layer is disabled.. enable it
      trafficLayer.setMap(map);
  } else {
      //traffic layer is enabled.. disable it
      trafficLayer.setMap(null);
  }
}

}



module.exports = CenterControl;
