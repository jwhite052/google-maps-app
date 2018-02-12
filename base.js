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
      address: '2918 Poplar Street #3 Philadelphia, PA 19130',
      position: { lat: 39.954365, lng: -75.1608042 }
    },
    {
      name: 'Location Two',
      address: '833 Chestnut Street Philadelphia, PA 19107',
      position: { lat: 39.9819479, lng: -75.2131994 }
    }
  ];

  // set id for each location
  for (var i = 0; i < locations.length; i++) {
    locations[i].id = i;
  }

  /* Markers */

  var markers = [];

  for (var i = 0; i < locations.length; i++) {
    markers[i] = new google.maps.Marker({
      position: locations[i].position,
      map: map,
      /* custom */
      location: locations[i],
      id: i
    });
  }

  /* Info Window */

  var infowindow = new google.maps.InfoWindow();

  /* when marker is clicked, trigger info window */
  for (var i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
      infowindow.setContent(this.location.name);
      infowindow.open(map, this);
    });
  }

  /* Locations List */

  var $listElement = $('#locations-list');

  for (var i = 0; i < markers.length; i++) {

    /* create locations list element, one for each marker */
    var $el = $('<li data-id="' + i + '">' +
    '<h3 class="name">' + markers[i].location.name + '</h3>' +
    '<p>' + markers[i].location.address + '</p>' +
    '</li>');
    $listElement.append($el);

    /* Event Handlers */

    /* when list item is clicked, trigger corresponding map marker */
    $el.on('click', function() {
      var marker = markers[$(this).attr('data-id')];
      new google.maps.event.trigger(marker, 'click');
      // map.setCenter(marker.position);
    });

    /* when map marker is clicked, trigger corresponding list item */
    markers[i].addListener('click', function() {
      $('li[data-id="' + this.id + '"]').css('color', 'red');
      console.log('li[data-id="' + this.id + '"]');
    });
  }

  /* List.js */
  var locationsList = new List('locationsApp', { valueNames: [ 'name' ]});

  /* List Listener */
  locationsList.on('updated', function() {
    updateMarkers();
  });

  function updateMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    $('#locations-list li').each(function() {
      markers[$(this).attr('data-id')].setMap(map);
    });
  }

  function calculateDistance(origin, location) {
    var destination = location.address;
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, calculateDistanceCallback);

    function calculateDistanceCallback(response, status) {
      if (status != google.maps.DistanceMatrixStatus.OK) {
        console.log(err);
      } else {
        var origin = response.originAddresses[0];
        var destination = response.destinationAddresses[0];
        if (response.rows[0].elements[0].status === "ZERO_RESULTS" ||
            response.rows[0].elements[0].status === "NOT_FOUND") {
          console.log("Better get on a plane. There are no roads between "
                            + origin + " and " + destination);
        } else {
          var distance = response.rows[0].elements[0].distance;
          var distance_value = distance.value;
          var distance_text = distance.text;
          var miles = distance_text.substring(0, distance_text.length - 3);
          console.log("Distance value is " + distance.value);
          console.log("Distance text is " + distance.text);
          location.distance = distance.value;
          console.log("locations distance " + location.distance);
          $('li[data-id="' + location.id + '"]').append("Distance: " + location.distance);
        }
      }
    }
  }

  $('#filterForm .submit').on('click', function(e) {
    e.preventDefault();
    var filteredList = [];
    console.log("Submit");
    var origin = $('#filterForm input.address').val();
    if (origin === undefined) { origin = ""; }
    for (var i = 0; i < locations.length; i++) {
      filteredList.push(locations[i]);
      calculateDistance(origin, locations[i]);
    }
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
