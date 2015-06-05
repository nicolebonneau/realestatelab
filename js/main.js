$(document).ready (function() {

///////mobile menu dropdown\\\\\\\\
$('a.menu-icon').click (function() {
	$('#menu-links').slideToggle();
});

////Fix hidden nav bar on resize\\\\
	$(window).resize(function() {
		if ($(window).width() > 815) {
			$('#menu-links').removeAttr('style');
		}
	});
});