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
		menu: 'nav',
		paddingTop: $('nav').height(),
		scrollOverflow: true,
	});

	$('#wrapper').fadeIn();
	
	responsiveNav();


});
