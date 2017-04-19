$("document").ready(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$submit       = $('.submit');
	$titlebutton = $('#titlebutton');

	$mouseover.on('mouseover', function() {
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$(this).html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});

	$titlebutton.on('click', function() {
		$.ajax({
			type: "GET",
			url: "http://www.mattbowytz.com/simple_api.json"
			$(data).find('quizData')
		});
	});

	setTimeout(function() {
		$('.timeout').fadeOut('slow');
	}, 1000);

}(jQuery));
