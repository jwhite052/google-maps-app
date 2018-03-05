function initMap() {

  /* Map */

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 40.05, lng: -75.09 },
    mapTypeControl: false,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  });

  /* Locations Data */

  var locations = [
    {
    	"type": "hospital",
    	"region": "montgomery",
    	"name": "Abington Hospital",
    	"address": "1200 Old York Rd.<br>Abington, PA 19001",
    	"phone": "Phone: 215-481-2000",
    	"url": "http://www.abingtonhealth.org/find-a-location/abington-memorial-hospital/",
    	"position": { "lat": 40.119136, "lng": -75.119953 }
    },
    {
    	"type": "hospital",
    	"region": "montgomery",
    	"name": "Abington &ndash; Lansdale Hospital",
    	"address": "100 Medical Campus Dr.<br>Lansdale, PA 19446",
    	"phone": "Phone: 215-368-2100",
    	"url": "http://www.abingtonhealth.org/find-a-location/lansdale-hospital/",
    	"position": { "lat": 40.25115, "lng": -75.271454 }
    },
    {
    	"type": "hospital",
    	"region": "philadelphia",
    	"name": "Thomas Jefferson University Hospital",
    	"address": "111 South 11th Street<br>Philadelphia, PA 19107",
    	"phone": "Main Phone: 215-955-6000<br>Appointment Phone: 1-800-JEFF-NOW (215-533-3669)",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/tjuh-111-south-11th-street.html",
    	"position": { "lat": 39.9498262, "lng": -75.1584227 }
    },
    {
    	"type": "hospital",
    	"region": "philadelphia",
    	"name": "Jefferson Hospital for Neuroscience",
    	"address": "900 Walnut Street<br>Philadelphia, PA 19107",
    	"phone": "Main Phone: 215-955-6000<br>Appointment Phone: 1-800-JEFF-NOW (800-533-3669)",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/jefferson-hospital-for-neuroscience-900-walnut-street.html",
    	"position": { "lat": 39.9480344, "lng": -75.156207 }
    },
    {
    	"type": "hospital",
    	"region": "philadelphia",
    	"name": "Methodist Hospital",
    	"address": "2301 South Broad Street<br>Philadelphia, PA 19148",
    	"phone": "Main Phone: 215-952-9000<br>Appointment Phone: 800-JEFF-NOW (800-533-3669)<br>Radiology Appointments: 215-952-1234<br>Outpatient Rehabilitation Services: 215-339-4280",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/methodist-hospital.html",
    	"position": { "lat": 39.921183, "lng": -75.169701 }
    },
    {
      "type": "hospital",
      "region": "bucks",
      "name": "Jefferson Bucks Hospital",
      "address": "380 North Oxford Valley Road<br>Langhorne, PA 19047",
      "phone": "Phone: 215-949-5000",
      "url": "https://www.ariahealth.org/bucks-county",
      "position": { "lat": 40.1830928, "lng": -74.8725508 }
    },
    {
      "type": "hospital",
      "name": "Jefferson Frankford Hospital",
      "region": "philadelphia",
      "address": "4900 Frankford Avenue<br>Philadelphia, PA 19124",
      "phone": "Phone: 215-831-2000",
      "url": "https://www.ariahealth.org/frankford",
      "position": { "lat": 40.0196895, "lng": -75.0838933 }
    },
    {
      "type": "hospital",
      "name": "Jefferson Torresdale Hospital",
      "region": "philadelphia",
      "address": "10800 Knights Road<br>Philadelphia, PA 19114",
      "phone": "Phone: 215-612-4000",
      "url": "https://www.ariahealth.org/torresdale",
      "position": { "lat": 40.0716736, "lng": -74.9854092 }
    },
    {
    	"type": "hospital",
    	"region": "new jersey",
    	"name": "Jefferson Cherry Hill Hospital",
    	"address": "2201 Chapel Avenue West<br>Cherry Hill, NJ 08002",
    	"phone": "Main phone: 856-488-6500",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/jefferson-cherry-hill.html",
    	"position": { "lat": 39.927982, "lng": -75.015943 }
    },
    {
    	"type": "hospital",
    	"region": "new jersey",
    	"name": "Jefferson Stratford Hospital",
    	"address": "2201 Chapel Avenue West<br>Cherry Hill, NJ 08002",
    	"phone": "Main phone: 856-488-6500",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/jefferson-stratford.html",
    	"position": { "lat": 39.828275, "lng": -75.008195 }
    },
    {
    	"type": "hospital",
    	"region": "new jersey",
    	"name": "Jefferson Washington Township Hospital",
    	"address": "435 Hurffville-Cross Keys Road<br>Turnersville, NJ 08012",
    	"phone": "Main phone: 856-582-2500",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/jefferson-washington-township.html",
    	"position": { "lat": 39.735239, "lng": -75.065340 }
    },
    {
    	"type": "hospital",
    	"region": "bucks",
    	"name": "Rothman Orthopaedic Specialty Hospital &ndash; Bensalem",
    	"address": "3300 Tillman Drive<br>Bensalem, PA 19020",
    	"phone": "Phone: 1-800-JEFF-NOW",
    	"url": "//hospitals.jefferson.edu/content/health/find-a-location/locations/rothman-orthopaedic-specialty-hospital.html",
    	"position": { "lat": 40.1129362, "lng": -74.9627666 }
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
      icon: '/content/dam/jefferson-health/blue-marker-icon.png',
      /* custom */
      location: locations[i],
      id: i
    });
  }

  var locationMarker = new google.maps.Marker({
    map: map,
    icon: '/content/dam/jefferson-health/orange-marker-icon.png',
  });

  /* Info Window */

  var infowindow = new google.maps.InfoWindow();

  /* when marker is clicked, trigger info window */
  for (var i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
      var location = locations[this.id];
      var directionsUrl = 'https://www.google.com/maps/place/' + location.address;
      directionsUrl = directionsUrl.replace(/<br>/g,' ');
      var locationHours = "";
      if (location.hours !== undefined && location.hours !== null) {
        locationHours = '<div class="hours">' + location.hours + '</div>';
      }
      var contentString =
          '<div id="infoWindowContent">' +
          '<div class="name">' + location.name + '</div>'+
          '<div class="address">' + location.address + '</div>' +
          '<div class="phone">' + location.phone + '</div>' +
          locationHours +
          '<div class="links">' +
          '<a href="' + location.url + '" target="blank">Locations Page</a>' + '<span> | </span>' +
          '<a href="' + directionsUrl + '" target="blank">Directions</a>' +
          '</div>';
      infowindow.setContent(contentString);
      infowindow.open(map, this);
    });
  }

  /* Locations List */

  var $listElement = $('#locations-list');

  for (var i = 0; i < markers.length; i++) {

    var directionsUrl = 'https://www.google.com/maps/place/' + markers[i].location.address;
    directionsUrl = directionsUrl.replace(/<br>/g,' ');
    var locationHours = "";
    if (markers[i].location.hours !== undefined && markers[i].location.hours !== null) {
      locationHours = '<div class="hours">' + markers[i].location.hours + '</div>';
    }
    /* create locations list element, one for each marker */
    var $el = $('<li data-id="' + i + '">' +
    '<div class="name">' + markers[i].location.name + '</div>' +
    '<div class="address">' + markers[i].location.address + '</div>' +
    '<div class="distance"></div>' +
    '<div class="phone">' + markers[i].location.phone + '</div>' +
    locationHours +
    '<div class="links">' +
    '<a href="' + markers[i].location.url + '" target="blank">Locations Page</a>' + '<span> | </span>' +
    '<a href="' + directionsUrl + '" target="blank">Directions</a>' +
    '</div>' +
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
      var $listEl = $('li[data-id="' + this.id + '"]');
      $listEl.addClass('is-active');
      $('#locations-list li').not($listEl).removeClass('is-active');
      $("body, html").animate({
          scrollTop: $($listEl).offset().top
      }, 600);
    });
  }

  /* List.js */
  var locationsList = new List('locationsApp', { valueNames: [ 'name' ]});

  /* List Listener */
  locationsList.on('updated', function() {
    // updateMarkers();
    // if ($('.locations-list li:visible')) {
    //   $('.list-message').hide()
    // } else {
    //   $('.list-message').show()
    // }
  });

  function updateMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    $('#locations-list li').each(function() {
      if ($(this).is(':visible')) {
        markers[$(this).attr('data-id')].setMap(map);
      }
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
        } else {
          var distance = response.rows[0].elements[0].distance;
          var distance_value = distance.value;
          var distance_text = distance.text;
          var miles = distance_text.substring(0, distance_text.length - 3);
          location.distance = parseFloat(distance.value / 5280).toFixed(2);
          $('li[data-id="' + location.id + '"]').attr("data-distance", location.distance);
          $('li[data-id="' + location.id + '"]').find(".distance").html("Distance: " + location.distance + " mi");
          updateList();
          updateMarkers();
        }
      }
    }

    function updateList() {
      var $list = $('#locations-list li');
      var radius = $('#filterForm select option:selected').val();
      $list.each(function(index) {
        var $this = $(this);
        if (parseFloat($this.attr("data-distance")) > radius) {
          $this.hide();
        } else {
          $this.show();
        }
      });
    }
  }

  $('#filterForm .submit').on('click', function(e) {
    e.preventDefault();
    var filteredList = [];
    var origin = $('#filterForm input.address').val();
    if (origin === undefined) { origin = ""; }
    for (var i = 0; i < locations.length; i++) {
      filteredList.push(locations[i]);
      calculateDistance(origin, locations[i]);
    }
    centerMap(origin);
    locationsList.search($('.search-input').val());
    updateMarkers();
    if ($('#locations-list li:visible') !== null) {
      $('.list-message').hide();
    } else {
      $('.list-message').show();
    }
  });

  function centerMap(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { "address": address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            var location = results[0].geometry.location,
                lat      = location.lat(),
                lng      = location.lng();
          infowindow.close();
          map.setCenter(location);
          var radius = $('#filterForm select option:selected').val();
          if (radius === '1') {
            map.setZoom(13);
          } else if (radius === '5') {
            map.setZoom(12);
          } else if (radius === '10') {
            map.setZoom(10);
          } else if (radius === '25') {
            map.setZoom(9);
          } else if (radius === '50') {
            map.setZoom(8);
          } else if (radius === '100') {
            map.setZoom(7);
          } else {
            map.setZoom(7);
          }
          locationMarker.setPosition(location);
        }
    });
  }
}
google.maps.event.addDomListener(window, 'load', initMap);
