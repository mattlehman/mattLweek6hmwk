
$(document).ready(function() {
$('#submit-btn').click(function(){
var type = $("#city-type").val();
event.preventDefault();
			
			//If I enter in new york
			if (type === "nyc" || type === "new york" || type === "ny" | type === "New York") {
				$("body").css("background-image", "url(images/nyc.jpg)")
			
			//If I enter in los angeles
			} else if (type ==="la" || type === "los angeles" || type === "Los Angeles") {
				$("body").css("background-image", "url(images/la.jpg)")
			
			//if I enter in austin
			} else if (type ==="austin" || type === "Austin") {
				$("body").css("background-image", "url(images/austin.jpg)")
			
			//if enter I in san fransico
			}else if (type ==="sf" || type === "san francisco" || type === "san fran" || type === "San Fransisco") {
				$("body").css("background-image", "url(images/sf.jpg)")
			
			//if he enter I in australia
			}else if (type ==="sydney" || type ==="Sydney") {
				$("body").css("background-image", "url(images/sydney.jpg)")

			//if I enter in my own name, You find out my favorite baseball team
			}else if (type ==="matt" || type ==="matt lehman" || type ==="Matt Lehman") {
				$("body").css("background-image", "url(images/indians.jpg)")


			//NONE
			}else {
				$("body").css("background-image", "url(images/citipix_skyline.jpg)")
			}
		
		


		});
	


});
