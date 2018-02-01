function initMap() {

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 39.954365, lng: -75.1608042 }
  });

  var locations = [
    {
      name: 'Location One',
      position: { lat: 39.954365, lng: -75.1608042 }
    },
    {
      name: 'Location Two',
      position: { lat: 39.9619479, lng: -75.1831994 }
    }
  ];

  var markers = [];

  for (var i = 0; i < locations.length; i++) {
    markers[i] = new google.maps.Marker({
      position: locations[i].position,
      map: map,
      location: locations[i]
    });
  }

  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
      infowindow.setContent(this.location.name);
      infowindow.open(map, this);
    });
  }

}
google.maps.event.addDomListener(window, 'load', initMap);
