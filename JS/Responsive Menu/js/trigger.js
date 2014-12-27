// http://coolestguidesontheplanet.com/using-slick-responsive-menus-genesis-child-theme/#disqus_thread
// https://gist.github.com/neilgee/11159048
jQuery(function($) {
			//$('#menu-header-desktop').slicknav();
			
			jQuery('#menu-header-desktop').slicknav({
			prependTo:'#nav', // Nav element to append the new menu to. This should be the PARENT of the menu.
			allowParentLinks: true ,
			});
		
			});
			