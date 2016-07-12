---
---
$(function() {
	// fade in hero bg image
	$(function(){
	    var bgimage = new Image();
	    bgimage.src="{{ site.baseurl }}/images/banner_upei.png"
	    $(bgimage).load(function(){
	        $("#banner").css("background-image","url("+$(this).attr("src")+")").css("opacity", "1");
	     });
	});

	// hover intent on main nav
	function slideDown(){
		console.log("make tall");
		$(this).children('ul').slideDown(200);
	}
	function slideUp(){
		console.log("make tall");
		$(this).children('ul').slideUp(200);
	}
	$("li.nested").hoverIntent({
		over: slideDown,
    out: slideUp,
    timeout: 300
   });

	 // prevent the top-level about link from navigating (opens dropdown on hover)
	$('.nested > a[href="/chbmr/about"], .nested > a[href="/about"]').on('click', function(e){
		e.preventDefault();
	});

	// make cards clickable (in grid layout)
  $(".card").on('click', function(){
    window.location = $(this).find('a').attr('href');
  });

	// make people clickable (in grid layout)
  $(".column-list-layout .post").on('click', function(){
    window.location = $(this).find('a').attr('href');
  });

// flex slider for homepage logos
// store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4;
  }

	// search on focus
	$("input.search").on('focus', function(){
		$(this).siblings('.icon-search').addClass('focus');
	});
	$("input.search").on('blur', function(){
		$(this).siblings('.icon-search').removeClass('focus');
	});

	// flexslider
  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 70,
      itemMargin: 120,
			directionNav: false,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: 3 // use function to pull in initial value
    });
  });

  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });

	$(document).ready(function()
	  {
	      $("#publications").tablesorter();
	  }
	);

	// make table rows clickable
  $(".data-table tr").on('click', function(){
    window.location = $(this).find('a').attr('href');
  });

});
