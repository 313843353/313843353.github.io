$(document).ready(function() {
			$(".topnav").accordion({
				accordion:false,
				speed: 500,
				closedSign: '[+]',
				openedSign: '[-]'
			});
		});


$('body a').css('cursor','pointer');
$('body').append('<div class="ifr"><iframe src=""></iframe></div>');
$('.ifr').css({
	'min-width':'78%',
	'height':'100%',
	'position':'fixed',
	'top':'0',
	'left':'20%',
	'border-left':'5px solid #C1C1C1'
});
$('.ifr').find('iframe').css({
	'width':'100%',
	'height':'100%',
	'border-width':'0'
});

$('body a').click(function(){
	$('body a').css('background-color', 'transparent');
	$(this).css('background-color', 'pink');
	$('.ifr').find('iframe').attr('src', $(this).attr('data-link'));
});