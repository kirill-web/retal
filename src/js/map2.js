function initMap() {

	var mapOptions = {
		scrollwheel: false,
		zoom: 15,
		center: {
			lat: 26.3762759,
			lng: 50.1692722
		},
	}
	var styleArray = [
		{
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#F1EEE0"
      }
    ]
  },
		{
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
      }
    ]
  },
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
      }
    ]
  },
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
      }
    ]
  },
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#D1CFC2"
      }
    ]
  },
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#D1CFC2"
      }
    ]
  },
		{
			"featureType": "poi",
			"stylers": [
				{
					"color": "#D1CFC2"
      }
    ]
  },
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#D1CFC2"
      }
    ]
  },
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
      }
    ]
  },
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#D1CFC2"
      }
    ]
  },
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#D1CFC2"
      }
    ]
  },
		{
			"featureType": "road",
			"stylers": [
				{
					"color": "#fff"
      }
    ]
  },
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
      }
    ]
  },
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#fff"
      }
    ]
  },
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#fff"
      }
    ]
  },
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#fff"
      }
    ]
  },
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#fff"
      }
    ]
  },
		{
			"featureType": "transit",
			"stylers": [
				{
					"color": "#fefdff"
      }
    ]
  },
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
      }
    ]
  },
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
      }
    ]
  },
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#c9c9c9"
      }
    ]
  },
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
      }
    ]
  }
];
	var map = new google.maps.Map(document.getElementById("view-on-map__map"),
		mapOptions);
	map.setOptions({
		styles: styleArray
	});
	var markerImage = new google.maps.MarkerImage(
		'img/map-icon.png',
		new google.maps.Size(50, 61),
		new google.maps.Point(0, 0),
		new google.maps.Point(25, 61)
	);
	var marker1 = new google.maps.Marker({
		icon: markerImage,
		position: {
			lat: 26.3762759,
			lng: 50.1692722
		},
		map: map,

	});
}