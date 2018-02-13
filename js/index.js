$(document).ready(function() {
	var windowHeight, windowScrollPosTop, windowScrollPosBottom = 0;
	function calcScrollValues() {
		windowHeight = $(window).height();
		windowScrollPosTop = $(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
	}
	$.fn.revealOnScroll = function(direction, speed) {
		return this.each(function() {
			
			var objectOffset = $(this).offset();
			var objectOffsetTop = objectOffset.top;
			if (!$(this).hasClass("hidden")) {
				if (direction == "right") {
					$(this).css({
						"opacity"	: "0",
						"right"		: "900px",
						"position"	: "relative"
					});
				} else {
					$(this).css({
						"opacity"	: "1",
						"right"		: "-900px",
						"position"	: "relative"
					});		
				} 
				$(this).addClass("hidden");	
			} 

			if (!$(this).hasClass("animation-complete")) {	
				if (windowScrollPosBottom > objectOffsetTop) {
					$(this).animate({"opacity" : 1, "right" : 0}, speed).addClass("animation-complete");
				}
			}
		});
	}
	function revealCommands() {
		$(".slideLeft").revealOnScroll("left", 1000);
		$(".slideRight").revealOnScroll("right", 1000);
	}
	calcScrollValues();
	revealCommands();
	$(window).scroll(function() {
		calcScrollValues()
		revealCommands();
	});
	
});
                   