// Home page hide
//---------------------------------------------
/*
$(document).ready(function(){
	if (jQuery(window).width() > 1000) {
		var home_page = $(".home-page");
		var inside_pages = $(".inside-pages");
		var win_height = $(window).height();
		$(window).resize(function(){
			win_height = $(window).height();
		});
		var delay = 700;
		var timeout = null;
		$(window).bind('scroll', function(){
			var scroll = $(window).scrollTop();
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				if ((home_page.is(":visible")) && (scroll > 1) && (scroll < win_height / 2)) {
					$("html, body").animate({
						scrollTop: 0
					}, "slow", "easeInOutExpo");
				}
				else 
					if ((home_page.is(":visible")) && (scroll > win_height / 2) && (scroll < win_height)) {
						$("html, body").animate({
							scrollTop: win_height + "px"
						}, 1500, "easeInOutQuad");
					}
			}, delay);
		});
	}
});
*/

// Navigation
//---------------------------------------------

$(document).ready(function(){
    var sections = $(".pg-item");
    var menu_links = $(".side-menu ul li a");
    
    $(window).scroll(function(){
        if (sections.filter(":in-viewport:last").attr("id") == sections.last().attr("id")) {
            menu_links.removeClass("active");
            menu_links.last().addClass("active");
        }
        else {
            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.side-menu ul li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });
        }
    });
    $(window).trigger('scroll');
});




// Local scroll
//---------------------------------------------

$(document).ready(function(){
    $('.main-menu, .go-works, .side-logo-wrap, .side-menu').localScroll({
        target: 'body',
        hash: true,
        //margin: true,
        duration: 1230,
        easing: "easeInOutExpo"
    });
});

// Mobile menu
//---------------------------------------------

$(document).ready(function(){

    $(".ps-icon-menu, .ps-menu-toggle").click(function(){
        if ($(".sidebar").hasClass("opened")) {
        
            $(".sidebar").animate({
                left: "-350px"
            }, "easeOutCirc");
            $(".ps-icon-menu").removeClass("actived");
            $(".ps-icon-menu b").animate({
                right: "50%",
                marginRight: "-17px"
            });
            $(".white-overlay").fadeOut();
            $(".sidebar").removeClass("opened");
            
        }
        else {
        
            $(".white-overlay").fadeIn();
            $(".sidebar").animate({
                left: 0
            }, 300, "easeOutCirc");
            $(".ps-icon-menu").addClass("actived");
            $(".ps-icon-menu b").animate({
                right: "10px",
                marginRight: 0
            });
            $(".sidebar").addClass("opened");
            
        }
    });
    
    $(window).scroll(function(){
        if ($(".sidebar").hasClass("opened")) {
        
            $(".sidebar").animate({
                left: "-350px"
            }, "easeOutCirc");
            $(".ps-icon-menu").removeClass("actived");
            $(".ps-icon-menu b").animate({
                right: "50%",
                marginRight: "-17px"
            });
            $(".white-overlay").fadeOut();
            $(".sidebar").removeClass("opened");
            
        }
    });
    
});


