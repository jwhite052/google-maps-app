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

  /* Map */

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 39.954365, lng: -75.1608042 }
  });

  /* Locations Data */

  var locations = [
    {
      name: 'Location One',
      position: { lat: 39.954365, lng: -75.1608042 }
    },
    {
      name: 'Location Two',
      position: { lat: 39.9619479, lng: -75.1831994 }
    },
    {
      name: 'Location Three',
      position: { lat: 39.9719479, lng: -75.2031994 }
    }
  ];

  /* Markers */

  var markers = [];

  for (var i = 0; i < locations.length; i++) {
    markers[i] = new google.maps.Marker({
      position: locations[i].position,
      map: map,
      location: locations[i]
    });
  }

  /* Info Window */

  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
      infowindow.setContent(this.location.name);
      infowindow.open(map, this);
    });
  }

  /* Locations List */

  var $listElement = $('#locations-list');

  for (var i = 0; i < markers.length; i++) {
    var $el = $('<li data-id="' + i + '">' + markers[i].location.name + '</li>');
    var locationName = markers[i].location.name;
    $el.on('click', function() {
      var marker = markers[$(this).attr('data-id')];
      new google.maps.event.trigger(marker, 'click');
      map.setCenter(marker.position);
    });
    $listElement.append($el);
  }

  /* Event Handlers */

  $listElement.child
}
google.maps.event.addDomListener(window, 'load', initMap);
