	var stop = false;
	var curr = 0;
	$(window).on("load",function(){
		var scenes = $('.scrollmagic-pin-spacer');
		var length = scenes.length;
		window.scrollTo(0, 0);
		scrollScene(curr, scenes);
		$("#bottom").on("click", function(){
			stopScroll();
			window.scrollTo(0,$('#sceneFinal').offset().top);
			setTimeout(function(){
				stopScroll();
				window.scrollTo(0,$('#sceneFinal').offset().top);
			},75);
		});
		$("body").on("mousewheel",function(){
			stopScroll();
		});
	});

	function stopScroll() {
		if(typeof(timeout1)!="undefined")clearTimeout(timeout1);
		if(typeof(timeout2)!="undefined")clearTimeout(timeout2);
		$('html,body').stop(true);
		stop = true;
	}

	var timeout1, timeout2;

	function scrollScene(ind, scenes){

		$('body').addClass('scrolling');

		if(stop|| ind > scenes.length-1){console.log("!!!");return;}
		// console.log('scroll', ind);

		if(ind == 0){
			window.scrollTo(0, 0);
		}
		var n = $(scenes[ind]).parent().children().index($(scenes[ind]))
		var next = $($(scenes[0]).siblings()[n])
		var bottom = next.offset().top ;
		var height = $(window).height();

		// console.log($(scenes[ind]).offset().top,$(scenes[ind]).height() ,height)
		$('html, body').animate({
		        scrollTop: (bottom - height)
		    }, 15000);
		timeout1 = setTimeout(function(){
			console.log('scrolling over', ind)
			changeScene(ind, scenes);
		}, 15000);
	}

	function changeScene(ind, scenes){
		console.log('change', ind);
		if(stop || ind>(scenes.length-1))return;

		var n = $(scenes[ind]).parent().children().index($(scenes[ind]))
		var next = $($(scenes[0]).siblings()[n])
		var bottom = next.offset().top;
		console.log(next, bottom)
		$('html, body').animate({
		        scrollTop: bottom
		    },1);

		timeout2 = setTimeout(function(){

		    		scrollScene(ind+1, scenes);
		    		curr++;
		    		// updateBottom();
		    	},1);

	}



	// $('#bottom').click(()=>{
	// 	scrollToBottom = true;
	// 	var final = $('#sceneFinal');
	// 	$('html, body').stop(true, false);
	// 	window.scrollTo(0,final.offset().top);
	// 	curr = scenes.length ;
	// 	updateBottom();
	// })

	// function updateBottom(){
	// 	if(curr == $('.scrollmagic-pin-spacer').length - 1){
	// 		$('#bottom').hide();
	// 	}else{
	// 		$('#bottom').show();
	// 	}
	// }
