	$(document).ready(function(){
		$('.online-list').attr('id', 'stat-block-online');
		$('.birthday-list').attr('id', 'stat-block-birthdays');
		$('.statistics').attr('id', 'stat-block-statistics');
		$('.online-list').addClass('panel bg3');
		$('.birthday-list').addClass('panel bg3');
		$('.statistics').addClass('panel bg3');
		$('.whoistabs .tab a').on('click', function(){
			$('#tabs2 li').removeClass('activetab');
			$(this).parent().attr('class', 'tab activetab');
			var hrefer = $(this).attr('href');
			var eacher = $(".whoistabs").find("div").each(function(){
				var the_div = $(this).attr('id');
				if (('#' + the_div) == hrefer){
					$(hrefer).show();
				}
				else{
					$(this).hide();
				}
			});		
		});
	});