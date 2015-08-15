$(document).ready(function()
{
	$('#button').click(function()
	{
	console.log($('#phone').val());
	console.log($('#message').val());

	//$.post("/", {number: $('#phone').val(), message: $('#message').val()});
	$.post('/', {number: $('#phone').val(), message: $('#message').val()});

	});
});