jQuery(window).ready(function($) {

	$('#navigational').hide();
	$('.wp-pagenavi').hide();	
	
	//because we don't need no stinkin' pagination nav.

	var marley = function(event) {

		if ((document.body.scrollHeight) == document.body.scrollTop + window.innerHeight) {

			var current_post_count = $("li.event_list_wrapper").size();
//			var posts_per_page = auto_pager_data.posts_per_page;
			
			var optional = {
				url : auto_pager_data.ajaxurl,
				type : "POST",
				dataType : 'html',
				data : {
					action : "submit_the_formz",
					security : ajax_object.ajax_nonce,
					current_post_count : current_post_count,
					auto_scroller_submit : true,
				},
				beforeSend : function() {
					$('#loadingDiv').show();
				},
				complete : function() {
					$('#loadingDiv').hide();
				},
				success : function(data) {

					if ((data) == '0') {
						document.removeEventListener('scroll', marley); // end of posts, kills listener. 
					}

					if ((data) != '0') {
						$(".event_list_outter_wrapper").append(data);
						
						
					}
				},
				error : function(data) {
					
				}
			};

			$(".paginated_form").ajaxSubmit(optional);
			
		}

	}

	document.addEventListener('scroll', marley);

$('.search_form_wrapper input[type="submit"]').live("click", function(e) {
		
		var optional = {
			url : ajax_object.ajaxurl,
			type : "POST",
			dataType : 'html',
			data : {
				action : "submit_the_formz",
				security : ajax_object.ajax_nonce,
				manual_submit : true,
			},
			beforeSend : function() {
				$('#loadingDiv').show();
			},
			complete : function() {
				$('#loadingDiv').hide();
			},
			success : function(data) {
				
				document.addEventListener('scroll', marley); //re-adds listener for auto-scroller. 
				$(".dummy_loaded").empty();
				$(".dummy_loaded").html(data);
				$('#navigational').hide(); //re-hides nav that is pulled. 
			},
			error : function(data) {
				
			}
		};
		e.preventDefault(); //STOP default action
		$(".paginated_form").ajaxSubmit(optional); //SUBMIT FORM
	});
	
	$('.form_wrapper_bind input[type="submit"]').live("click", function(e) {
		
		var optional = {
			url : ajax_object.ajaxurl,
			type : "POST",
			dataType : 'html',
			data : {
				action : "submit_the_formz",
				security : ajax_object.ajax_nonce,
				manual_submit : true,
			},
			beforeSend : function() {
				$('#loadingDiv').show();
			},
			complete : function() {
				$('#loadingDiv').hide();
			},
			success : function(data) {
				
				document.addEventListener('scroll', marley); //re-adds listener for auto-scroller. 
				$(".dummy_loaded").empty();
				$(".dummy_loaded").html(data);
				$('#navigational').hide(); //re-hides nav that is pulled. 
			},
			error : function(data) {
				
			}
		};
		e.preventDefault(); //STOP default action
		$(".paginated_form").ajaxSubmit(optional); //SUBMIT FORM
	});

});
