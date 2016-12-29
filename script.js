// some really hacked together responsive navigation
function responsiveNav() {
	
	if ($(window).width() <= 700) {
		// show hamburger navigation
		$('.navToggle').show();
		$('nav').addClass('responsiveNav');
		$('nav').addClass('closed');
	
		$('.navToggle').click(function() {	
			if ($('nav').hasClass('open')) {
				$('nav').removeClass('open');
				$('nav').addClass('closed');
			} else if ($('nav').hasClass('closed')) {
				$('nav').removeClass('closed');
				$('nav').addClass('open');
			}
		});
		
	} else {
		$('nav').removeClass('responsiveNav');
		$('nav').removeClass('open');
		$('nav').removeClass('closed');
		$('.navToggle').hide();
	}
	
}

// responsive navigation on resize event
$(window).resize(responsiveNav);


// fullPage.js functionality
$(document).ready(function() {

	$('#fullpage').fullpage({
		verticalCentered: true,
		anchors: ['home', 'work', 'about', 'contact'],
		sectionsColor: ['#fdb7b7', '#fff', '#313131', '#fdb7b7'],
		slidesNavigation: true,
		menu: 'nav',
		paddingTop: $('nav').height(),
		paddingBottom: $('nav').height(),
		scrollOverflow: true,
		recordHistory: false,
		
		onLeave: function(index, nextIndex, direction) {
			// change navigation text to black on white pages
			if (index != 2 && nextIndex == 2) {
				$('nav').addClass('black');
			}
		
			// change back to white on non-white pages
			if ((index == 2) && (nextIndex == 1 || nextIndex == 3 || nextIndex == 4)) {
				$('nav').removeClass('black');
			}
		}
		
	});
	
	responsiveNav();


});