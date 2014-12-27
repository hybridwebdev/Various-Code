jQuery(document).ready(function($) {
	
// Cheating here and using the script for accordion for comments too. 

	var sticky_navigation_offset_top = '250';
	
	
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); 
		
		
		if (scroll_top > sticky_navigation_offset_top) { 
			
			$('#main-navigation-ico').addClass( 'floatmenu' );
			
		} else {
			
			$('#main-navigation-ico').removeClass( 'floatmenu' );
			 
		}   
	};
	
	
	sticky_navigation();
	
	
	$(window).scroll(function() {
		 sticky_navigation();
	});

 
});




