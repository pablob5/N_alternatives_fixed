function introspective_response(DataToSave)
{

var LIMMIN = Math.ceil(screen.width/2) - Math.ceil($('#line1').width()/2) - 10;
var LIMMAX = Math.ceil(screen.width/2) + Math.ceil($('#line1').width()/2) - 10;
var range = LIMMAX - LIMMIN;


$('#scale').css('color','#004D00')
if (sc.trial > 1)   													// reset the animation from the previous trial
{
	$("#scale").animate({ right: '-15px',top: '15px', fontSize: '1em',opacity: '1.0'},10);
}

$('#line1').show();
if (sc.trial < 4){$('#preg_segu').show();}

var x = 0;
var StartTime = +new Date();
var percent = 0;

/*------------------mouse ---------*/
if (InputMethod == 'Mouse') (InputMethod == 'Pad')
{	
	if (AutomaticResponse ==1){setTimeout("$('#Dial').click()",1000)}	// to run alone

	$('#scale').hide();
	$(document).mousemove(function(e){									// slides the cursor
		$('#scale').show();
		$('#Dial').show();
		x = e.pageX;
		if (e.pageX >= LIMMAX){x = LIMMAX};
		if (e.pageX <= LIMMIN){x = LIMMIN};

		percen = (100 * (x - LIMMIN)/range).toFixed(0)					// get percentaje 
		$('#scale').html(percen.toString().concat(' %'))
		$('#scale').css({"left": x- Math.ceil(screen.width/2)})
		$('#Dial').css({"left": x});})


	$(document).click(function(ee){										// gets the click
		$(document).unbind('mousemove');
		x = ee.pageX;
		if (ee.pageX >= LIMMAX){x = LIMMAX};
		if (ee.pageX <= LIMMIN){x = LIMMIN};
		$('#Dial').show();
		$('#Dial').css({"left": x})
		DataToSave.confidence		= (x - LIMMIN)/range;
		DataToSave.reactiontimeconf	= +new Date() - StartTime;
																		// animates
		$("#scale").animate({ right: '15px',top: '-15px', fontSize: '2em',opacity: '0.0'},500);

		setTimeout("$('#Dial').css('background','#ff99ce')",100);		// blinks
		setTimeout("$('#Dial').css('background','#99004f')",400);

		$('#Dial').fadeOut(500);
		$('#line1').fadeOut(550);
		$('#preg_segu').fadeOut(550);
		$('#scale').fadeOut(500);
		$(document).unbind('click');
		
		store_data(DataToSave);											// saves whole trial to server
		
		if (sc.trial == sc.maxtrials){
			$('#preg').html('fin del juego, ¡muchas gracias!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		return}

		var total=0;
		for(var i in sc.correct) { total += sc.correct[i];}				// checks how many correct responses so far
		if (total % CT ==0 && !(total ==0) && !(total == AcumTotal)){   // every CT correct responses, next level
			AcumTotal = total;											
			Level = Level + 1;
		//	$('#Letterhead2').html('Nivel: '+ Level.toString());
		//	var sentence = '¡Pasaste al nivel '.concat(Level.toString())
		//	$("#preg").html(sentence.concat('!'));
		//	$("#preg").fadeIn(300);
			setTimeout("$('#preg').fadeOut(200);$('div.linesConf').hide(0,newtrial(sc))",2500)}
		else{
			setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)}

  });
}

/*------------------touchscreen ---------*/
if (InputMethod == 'Touchscreen')
{	$('#scale').hide();
	$('#Dial').hide();

	if (AutomaticResponse ==1){setTimeout("$('#Dial').trigger('touchend')",1000)}	// to run alone

	var Xpos = 0
	$(document).on('touchstart',function (e){										// gets the touch
		e.preventDefault();

		Xpos = e.originalEvent.touches[0].pageX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){Xpos = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){Xpos = LIMMIN};
		percen = (100 * (Xpos - LIMMIN)/range).toFixed(0) 							// get percentaje 
		$('#scale').html(percen.toString().concat(' %'))
		$('#Dial').css({"left": Xpos});
		$('#scale').show()
		$('#Dial').show();
	});

	$(document).on('touchmove',function (ee){										// slides the cursor
		$('#Dial').show();
		$('#scale').show();
		ee.preventDefault();
		Xpos = ee.originalEvent.touches[0].pageX;
		if (ee.originalEvent.touches[0].pageX >= LIMMAX){Xpos = LIMMAX};
		if (ee.originalEvent.touches[0].pageX <= LIMMIN){Xpos = LIMMIN};

		percen = (100 * (Xpos - LIMMIN)/range).toFixed(0) 							// get percentaje 
		$('#scale').html(percen.toString().concat(' %'))
		$('#scale').css({"left": Xpos- Math.ceil(screen.width/2)})
		$('#Dial').css({"left": Xpos});
	})

	$(document).on('touchend',function (eee){										// end of touch, get response
		eee.preventDefault();
		DataToSave.confidence		= (Xpos - LIMMIN)/range;
		DataToSave.reactiontimeconf	= +new Date() - StartTime;

		$(document).unbind('touchstart');
		$(document).unbind('touchmove');
		$(document).unbind('touchend');

		$("#scale").animate({ right: '15px',top: '-15px',
            fontSize: '2em',opacity: '0.0'},500);

		setTimeout("$('#Dial').css('background','#ff99ce')",100);
		setTimeout("$('#Dial').css('background','#99004f')",400);

		$('#Dial').fadeOut(500);
		$('#line1').fadeOut(550);
		$('#preg_segu').fadeOut(550);
		$('#scale').fadeOut(500);
		$(document).unbind('click');

		store_data(DataToSave);											// saves whole trial to server
		
		if (sc.trial == sc.maxtrials){
			$('#preg').html('fin del juego, ¡muchas gracias!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		return}

		var total=0;
		for(var i in sc.correct) { total += sc.correct[i];}				// checks how many correct responses so far
		if (total % CT ==0 && !(total ==0) && !(total == AcumTotal)){   // every CT correct responses, next level
			AcumTotal = total;											
			Level = Level + 1;
		//	$('#Letterhead2').html('Nivel: '+ Level.toString());
		//	var sentence = '¡Pasaste al nivel '.concat(Level.toString())
		//	$("#preg").html(sentence.concat('!'));
		//	$("#preg").fadeIn(300);
			setTimeout("$('#preg').fadeOut(200);$('div.linesConf').hide(0,newtrial(sc))",2500)}
		else{
			setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)}

  })
};
}
