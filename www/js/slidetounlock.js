$(function() {
	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 200) {
				//console.log(ui.position.left );
				$("#well").fadeOut();
				console.log("UNLOCK" );
				
			} else {
			    // Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
				// $("h2 span").css("opacity", 100 - (ui.position.left / 5))
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 201) {
				$(this).animate({
					left: 0
				})
			}
		}
	});

	$('#slider')[0].addEventListener('touchmove', function(event) {
	    event.preventDefault();
	    var el = event.target;
	    var touch = event.touches[0];
	    curX = touch.pageX - this.offsetLeft - 73;
	    if(curX <= 0) return;
	    if(curX > 200){
	    	$('#well').fadeOut();
	    	console.log("UNLOCK" );
	    	window.location.href = "./home.html";
	    }
	   	el.style.webkitTransform = 'translateX(' + curX + 'px)'; 
	}, false);
	
	$('#slider')[0].addEventListener('touchend', function(event) {	
	    this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
	    this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
	    this.style.webkitTransform = 'translateX(0px)';
	}, false);

});