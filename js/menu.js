	$(function(){   
		var menu = $('#menu');
		$(window).scroll(function () { 
			if ($(this).scrollTop() > 120) { 
				menu.addClass("menu-fixo");
				$('body').css('padding-top', 70);
			} else { 
				menu.removeClass("menu-fixo"); 
				$('body').css('padding-top', 0);
			} 
		});  
	});