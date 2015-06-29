$(document).ready(function(){

	$('#map').on( "click", function( event ) {

		var pageX = event.pageX - 5;
		var pageY = event.pageY - 5;
		console.log(pageX, pageY)


		var pin = '<img class="marker" src="https://github.com/RefactorU/exercise-solutions/blob/master/js/JS14-gold-rush/base/images/map_marker.png?raw=true" alt="Map Marker">'
		$('.map-container').prepend(pin);

		$('.marker').first().css ({
			'top' : pageY,
			'left' : pageX,
			'position' : 'absolute',
		})

	});
	
	$('.map-container').on('click', '.marker', function() {
		$('.marker').remove()
	})



});	