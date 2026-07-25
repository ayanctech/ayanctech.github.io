$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$(document).ready(function(){
		var vw;
		function centerBalloons() {
			var windowWidth = $(window).width();
			var balloonWidth = $('.balloons').first().outerWidth() || 100;
			var spacing = Math.min(80, Math.max(20, Math.floor((windowWidth - balloonWidth) / 6)));
			var totalWidth = balloonWidth + 4 * spacing;
			var startLeft = Math.max(10, Math.round((windowWidth - totalWidth) / 2));
			$('#b1,#b2,#b3,#b4,#b5').stop();
			$('#b1').animate({top:240, left: startLeft},500);
			$('#b2').animate({top:240, left: startLeft + spacing},500);
			$('#b3').animate({top:240, left: startLeft + spacing * 2},500);
			$('#b4').animate({top:240, left: startLeft + spacing * 3},500);
			$('#b5').animate({top:240, left: startLeft + spacing * 4},500);
		}

		$(window).resize(centerBalloons);
		centerBalloons();

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow', function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(2500).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function getBalloonBounds() {
		var balloonWidth = 100;
		var balloonHeight = 180;
		var maxLeft = Math.max(0, $(window).width() - balloonWidth - 20);
		var maxBottom = Math.max(0, $(window).height() - balloonHeight - 20);
		return {left: maxLeft, bottom: maxBottom};
	}

	function randomBalloonPosition() {
		var bounds = getBalloonBounds();
		return {
			left: Math.floor(bounds.left * Math.random()),
			bottom: Math.floor(bounds.bottom * Math.random())
		};
	}

	function curtainClose() {
		var audio = $('.song')[0];
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
		$('.curtain').addClass('visible');
	}

	function loopOne() {
		var pos = randomBalloonPosition();
		$('#b1').animate({left:pos.left,bottom:pos.bottom},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var pos = randomBalloonPosition();
		$('#b2').animate({left:pos.left,bottom:pos.bottom},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var pos = randomBalloonPosition();
		$('#b3').animate({left:pos.left,bottom:pos.bottom},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var pos = randomBalloonPosition();
		$('#b4').animate({left:pos.left,bottom:pos.bottom},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var pos = randomBalloonPosition();
		$('#b5').animate({left:pos.left,bottom:pos.bottom},10000,function(){
			loopFive();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloons').fadeIn('slow');
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b3,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();

		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow', function(){
			$('#light_candle').fadeIn('slow');
		});
		$(this).fadeOut('slow');
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow', function(){
			$('#wish_message').fadeIn('slow');
		});
		$(this).fadeOut('slow');
	});

		
	$('#wish_message').click(function(){
		var vw = $(window).width()/2;
		var balloonWidth = $('.balloons').first().outerWidth() || 100;
		var offset = Math.min(90, Math.max(50, vw/6));
		var groupWidth = balloonWidth + 4 * offset;
		var startLeft = Math.max(10, vw - groupWidth / 2);
		var topPosition = Math.min(340, $(window).height() - 260);

		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b11').animate({top:topPosition, left: startLeft},500);
		$('#b22').animate({top:topPosition, left: startLeft + offset},500);
		$('#b33').animate({top:topPosition, left: startLeft + offset*2},500);
		$('#b44').animate({top:topPosition, left: startLeft + offset*3},500);
		$('#b55').animate({top:topPosition, left: startLeft + offset*4},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$('#photo_gallery').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			var $paragraphs = $('.message p');
			$paragraphs.hide();
			$('.message').fadeIn('slow', function() {
				function showParagraph(index) {
					if (index >= $paragraphs.length) {
						curtainClose();
						return;
					}
					$paragraphs.eq(index).fadeIn('slow').delay(3000).fadeOut('slow', function() {
						showParagraph(index + 1);
					});
				}

				showParagraph(0);
			});
		});
	});
});
