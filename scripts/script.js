//JavaScript

$(window).scroll(function(){
	if($(this).scrollTop()>0){
		$(".up").fadeIn();
	} else {
		$(".up").fadeOut();
	}
});

$(function(){
	$(".up").click(function(){
		$("body, html").animate({
			scrollTop: 0
		}, 500);
	});

	$(".header-menu a").each(function(){
		let location=window.location.href;
		let link=this.href;
		if(location==link){
			$(this).addClass("active");
		}
	});
});
