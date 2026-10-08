function checkSections() {
	var i = $('section:in-viewport:first').attr('id');
	$('.nav li').removeClass('active');
	$('.nav li a[href="#' + i + '"]').parent().addClass('active');
}

$(window).on('DOMContentLoaded load resize scroll', checkSections);
