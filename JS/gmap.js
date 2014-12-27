jQuery(document).ready(function($) {
$(function(){
    $('#googlemapexpand').click(function () {
    	
    var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
    var icons = [
      iconURLPrefix + 'red-dot.png',
    ]
    var icons_length = icons.length;
   
    var map = new google.maps.Map(document.getElementById('map'), {
      center:new google.maps.LatLng(gewgle_maps_geocode.lati,gewgle_maps_geocode.longi),
      Zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      streetViewControl: true,
      panControl: true,
      zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    });

    var marker;
    var markers = new Array();
     
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(gewgle_maps_geocode.lati, gewgle_maps_geocode.longi),
        map: map,
        icon : icons[1],
      });

      markers.push(marker);
    

   $.modal($('#map'), {
   	onClose:function () {
	$.modal.close();
	$("#map").empty();
}
   	
   	
   	
   	
   	
   	});




    
    
    
    
    });
    

});




});
  