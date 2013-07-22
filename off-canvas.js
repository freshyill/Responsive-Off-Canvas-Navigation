// Show the off-canvas navigation
$('#off-canvas-toggle').click(function() {
	$('#nav-primary').toggleClass('off-canvas-show');
});


// Hide the off-canvas nav when clicking a link
$('#nav-primary').find('a').on('click', function(e) {
	$('#nav-primary').removeClass('off-canvas-show');
});