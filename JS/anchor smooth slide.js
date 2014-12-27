Binds on .anchors_away <A class=""> Navigates to <A Name =""> of same anchor tag. Top-110 can be changed to offset where the anchor jumps to.

<script>
jQuery(document).ready(function($) {
 
	$('.anchors_away').click(function(event){		
				event.preventDefault();
		jQuery('html,body').animate({scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-110}, 1000, 'swing');
	    
	});
});

</script>