app.controller('contactCtrl', function($scope){
	console.log("contactCtrl");
	initialize();
	function initialize() {
	  var mapProp = {
	    center: new google.maps.LatLng(37.5645557,126.9849151),
	    zoom:12,
	    panControl: false,
	    zoomControl: true,
	    scaleControl: false,
	    mapTypeControl: false,
	    streetViewControl: false,
	    scrollwheel: false,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});