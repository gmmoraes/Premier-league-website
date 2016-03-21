function maps2(){
  var platform = new H.service.Platform({
  app_id: 'DemoAppId01082013GAL',
  app_code: 'AJKnXv84fjrb0KIHawS0Tg',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map);

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

  /**
  ymaps.ready(init);
  var myMap;
      myPlacemark;

  function init(){
      myMap = new ymaps.Map("map", {
          center: [53.430967, -2.960835],
          zoom: 17
      });

      moscow = new ymaps.Map("map-canvas", {
          center: [55.76, 37.64],
          zoom: 17
      });

      myMap.setType('yandex#publicMapHybrid');
      myPlacemark = new ymaps.Placemark([53.430967, -2.960835], {
          hintContent: 'Anfield',
          balloonContent: 'Stadium of Liverpool'
      });

      myMap.geoObjects.add(myPlacemark);
    }
    **/
  }


module.exports = maps2;
