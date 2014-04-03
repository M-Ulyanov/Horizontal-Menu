$(function(){
	var li = $('ul#index-menu > li');
	$(li).hover(function(){
		clearTimeout($.data(this,'timer'));
		if($(this).children('ul.submenu').length != 0){
			var sub = $(this).children('.submenu');
			$(sub).stop(true, true).slideDown('300');
			$(sub).animate({
				'top' : '67px',
			},300);
			$(this).find('.arrow').stop(true, true).animate({
				'opacity' : 'show',
				'top' : '-18px',
			}, 700);
		}
		else{
			console.log('No Sub-menu')
		}
	},
	function(){
		$.data(this,'timer', setTimeout($.proxy(function() {
	    var sub = $(this).children('.submenu');
		$(sub).slideUp('100');
		$(sub).animate({
			'top' : '87px',
		},0);
		$(this).find('.arrow').stop(true, true).animate({
			'opacity' : 'hide',	
			'top' : '-12px',
		}, 600);
	    }, this), 200));
	});


	$('<div class="over">').css({
		'opacity' : '0.7'
	})
	.appendTo('.submenu');

	$('<span class="arrow">').appendTo('.submenu');

});