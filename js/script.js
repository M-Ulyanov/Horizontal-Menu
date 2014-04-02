$(function(){
	var li = $('ul#index-menu > li');
	$(li).hover(function(){
		clearTimeout($.data(this,'timer'));
		if($(this).children('ul.submenu').length != 0){
			var sub = $(this).children('.submenu');
			$(sub).stop(true, true).slideDown('300');
			$(sub).animate({
				'top' : '60px',
			},300)
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
			'top' : '80px',
		},0)
	    }, this), 100));
	});


	$('<div class="over">').css({
		'opacity' : '0.7'
	})
	.appendTo('.submenu');

});