// this requires bootstrap modules. 
$("label").live({
	
    mouseenter: function () {
	
		var aaa = $(this).parent().parent();
	
  		var text = $(this).parent().clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text();
	
	    $(aaa).popover({
	        trigger: 'manual',
	        placement: 'top',
	        content: function() {
	           
	             return text;
	        }
	    });
	    $(aaa).popover("show");
    
    },
    
    mouseleave: function () {
	
		var aaa = $(this).parent().parent();
	
   		$(aaa).popover("hide");    
        
    }

});