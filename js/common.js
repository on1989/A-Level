//START SLIDERS
$(document).ready(function() {

    $(".aboutSchoolCont").niceScroll({
        cursorcolor:"#e7662b",
        cursorminheight:20

    });
    if($('.slider').length) {
    $('.slider').owlCarousel({
			loop:true,
			merge:true,
			margin:0,
			touchDrag: false,
			singleItem: true,
			callbacks:true,
			mouseDrag: false,
			autoplay: true,
			responsiveClass:true,
			animateOut: 'fadeOutRight',
			animateIn: 'fadeInRight',
			// autoplaySpeed: 200,
			autoplayTimeout:2300,
			nav: false,
			items:1

		});
}


  $(".slider-partners").owlCarousel({

//        autoPlay: 3000, //Set AutoPlay to 3 seconds
        loop:true,
        items : 4,
        dots:false,
        nav:true,
        navText:false,
        autoplay: false,
//        itemsDesktop : [1199,3],
//        itemsDesktopSmall : [979,3]
      responsive : {
     320 : {
       items : 1,
    },

      460 : {
       items : 2,
    },
     600 : {
       items : 3,
    },

    767 : {
       items : 3,
    },

    1199 : {
       items : 4,
    }
}
  });



    $(".news-slider").owlCarousel({

        loop:true,
        items : 2,
        dots:true,
        nav:false,
        navText:false,
        autoplay: false,
         responsive : {
         320 : {
           items : 1,
        },
        992 : {
           items : 2,
        }
}

});
 $(".slider-news").owlCarousel({
    items : 1,
    loop:true,
    navText:false,
    autoplay: false,
    dots:false,
    nav:true,
 });




    $(".reviews-slider").owlCarousel({

        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1,
        loop:true,
        dots:false,
        singleItem:true,
//        animateOut: 'fadeOutRight',
//        animateIn: 'fadeInRight',
        autoplay: false,
        autoplayTimeout:2300,
        touchDrag: false,
        mouseDrag: false,
        nav:true,
        navText:false

      });
});
//END SLIDERS


//START MAPS
if (jQuery('#contact_map').length ) {
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		/*map latitude and longitude*/
		var contactLatlng = {lat: 50.006382, lng: 36.235880};

		/*map style*/
		var styleMap = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#f7a50b"},{"visibility":"on"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f7a50b"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#f7a50b"},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"color":"#ff0000"},{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#da8900"}]},{"featureType":"landscape.natural","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ff8a00"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#f2ba40"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];
		/*map options*/
		var zoomMap;
		if($(window).width()>1200) {
			zoomMap = 17;
		} else {
			zoomMap = 17;
		}
		/*map options*/
		var contactOptions = {
			zoom: zoomMap,
			center: contactLatlng,
			styles: styleMap,
			scrollwheel: false,
			mapTypeControl: false,
			draggable: false,
            center: {lat: 50.007382, lng: 36.235880},
		}

		var x;
		var y;
		if($(window).width()>1200) {
			x = 150;
			y = 100;
		} else if ($(window).width()<=1200 && $(window).width()>500) {
			x = -50;
			y = 100;
		} else {
			x = -50;
			y=20;
		}
		if( $('#contact_map').length ){
			var contact = document.getElementById('contact_map');
			var contact_map = new google.maps.Map(contact, contactOptions);
			var markerContact = new google.maps.Marker({
				position: contactLatlng,
				map: contact_map,
				title: 'ALevel',
				icon:   'images/markerMap.png'
			});
			contact_map.panBy(x, y);
		}



	}
}
//END MAPS





//START SCROLL ADD CLASS
$(document).on("scroll",function(){
	if($(document).scrollTop()>0){
		$("header").addClass("scroll-header");
	}
	else{
		$("header").removeClass("scroll-header");
	}
});
if($(document).scrollTop()>0){
		$("header").addClass("scroll-header");
	}
	else{
		$("header").removeClass("scroll-header");
	}
//END SCROLL ADD CLASS


//START TEACHER HOVER
var teacherHover = 0
$('.hover').hover(function(){

    if(teacherHover){
        $(this).parent().removeClass('active');
        teacherHover = 0
    }else
    {
        $(this).parent().addClass('active');
        teacherHover = 1
    }
});
//END TEACHER HOVER

//START SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//END SCROLL

//START LIKE
var like = 1
$('.like i').each(function(){
    $(this).click(function(){
       if(like){
           $(this).addClass('ic-like');
           $(this).removeClass('ic-like-active');
           like = 0
       }else{
           $(this).addClass('ic-like-active');
           $(this).removeClass('ic-like');
           like = 1
       }
    });
});
//END LIKE

 //START CUSTOM SELECT
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function(event) {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
//END CUSTOM SELECT




//START PRELOADER
loader();

function loader(_success) {
	var obj 	= document.querySelector('.preloader'),
	line 	= document.querySelector('.preloader_line'),
	num 	= document.querySelector('.preloader_num');

	var w = 0,
	t = setInterval(function () {
		w = w + 1;
		line.style.width = w + '%';
		num.textContent = w + '%';
		if (w === 100) {
			obj.style.display = 'none';
			clearInterval(t);
			w = 0;
			if (_success) {
				return _success();
			}
		}
	}, 20);
};
//END PRELOADER


$(document).ready(function(){
    $('.mnu').click(function(){
        $('.submenu').toggleClass('active');
        $('.mnu .hamburger').addClass('is-active')
    });
    $('.search i').click(function(){
        $('.search').toggleClass('active')

    });
    $('.submenu .is-active').click(function(){
        $('.submenu').removeClass('active');
        $('.mnu .hamburger').removeClass('is-active')
    });
    $('.modal').click(function(){
        $('.modal-container').addClass('active');
    });
    $('.modal-container .hamburger').click(function(){
        $('.modal-container').removeClass('active');
    });


});
