$(document).ready(function(){
	$(".slide-one").owlCarousel({
		center: true,
		loop:true, 
		margin: 30, 
		nav:false, 
		autoplay:true,
		startPosition: 1, 
		smartSpeed:1000, 
		autoplayTimeout:2000,
		items: 3, 
		responsive:{ 
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  });
  
	  $(".slide-two").owlCarousel({
		center: true,
		loop:true, 
		margin: 30, 
		nav:false, 
		autoplay:true,
		startPosition: 1, 
		smartSpeed:1000, 
		autoplayTimeout:2500,
		items: 3, 
		responsive:{ 
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$(".slide-three").owlCarousel({
		center: true,
		loop:true, 
		margin: 30, 
		nav:false, 
		autoplay:true,
		startPosition: 1, 
		smartSpeed:1000, 
		autoplayTimeout:2500,
		items: 3, 
		responsive:{ 
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
 		}
}); }); 