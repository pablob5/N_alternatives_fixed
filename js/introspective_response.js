function introspective_response(DataToSave)
{
var LIMMIN = Math.ceil(screen.width/2) - Math.ceil($('#line1').width()/2) - 10;
var LIMMAX = Math.ceil(screen.width/2) + Math.ceil($('#line1').width()/2) - 10;
var range = LIMMAX - LIMMIN;

$("#SoundButton").prop('disabled', true);
$("#SoundButton").fadeTo(.1, .4);

$('#scale').css('color','#004D00')
if (sc.trial > 1){
	$("#scale").animate({ right: '-15px',top: '15px', fontSize: '1em',opacity: '1.0'},10);
}

$('#line1').show();
if (sc.trial<4){$('#preg_segu').show();}

var x = 0;
var StartTime = +new Date();
var percent = 0;




/*------------------mouse ---------*/
if (Touchscreen == 'Mouse')
{
		if (AutomaticResponse ==1){setTimeout("$('#Dial').click()",1000)}						// to run alone
		$(document).mousemove(function(e){ 																					// slides the cursor
		$('#scale').show();
		$('#Dial').show();
		x = e.pageX;
		if (e.pageX >= LIMMAX){x = LIMMAX};
		if (e.pageX <= LIMMIN){x = LIMMIN};

		percen = (100 * (x - LIMMIN)/range).toFixed(0)  														// get percentaje online
		$('#scale').html(percen.toString().concat(' %'))
		$('#scale').css({"left": x- Math.ceil(screen.width/2)})

		$('#Dial').css({"left": x});})


	$(document).click(function(ee){																								// gets the click
		$(document).unbind('mousemove');
		x = ee.pageX;
		if (ee.pageX >= LIMMAX){x = LIMMAX};
		if (ee.pageX <= LIMMIN){x = LIMMIN};
		$('#Dial').show();
		$('#Dial').css({"left": x})
		DataToSave.confidence		= (x - LIMMIN)/range;
		DataToSave.reactiontimeconf	= +new Date() - StartTime;


		$("#scale").animate({ right: '15px',top: '-15px',
            fontSize: '2em',opacity: '0.0'},500);

		setTimeout("$('#Dial').css('background','#ff99ce')",100);
		setTimeout("$('#Dial').css('background','#99004f')",400);

		$('#Dial').fadeOut(500);
		$('#line1').fadeOut(550);
		$('#preg_segu').fadeOut(550);
		$('#scale').fadeOut(500);
		$(document).unbind('click');
		store_data(DataToSave);
		if (sc.trial == sc.maxtrials){
			$('#preg').html('fin del juego, ¡muchas gracias!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		return}

		var total=0;
		for(var i in sc.correct) { total += sc.correct[i]; }
		if (total % 10 ==0 && !(total ==0)){
			if(SoundOn){LevelSound.play()}
			Level = Level + 1;
			$('#Letterhead2').html('Nivel: '+ Level.toString());
			var sentence = '¡Pasaste al nivel '.concat(Level.toString())
			$("#preg").html(sentence.concat('!'));
			$("#preg").fadeIn(300);
			setTimeout("$('#preg').fadeOut(200);$('div.linesConf').hide(0,newtrial(sc))",2500)}
		else{
			setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)}

  });
}

/*------------------touchscreen ---------*/
if (Touchscreen == 'Touchscreen')
{
	if (AutomaticResponse ==1){setTimeout("$('#Dial').trigger('touchend')",1000)}						// to run alone
	var Xpos = 0
	$(document).on('touchstart',function (e){																			// gets the touch
		e.preventDefault();
		$('#scale').show();
		$('#Dial').show();
		Xpos = e.originalEvent.touches[0].pageX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){Xpos = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){Xpos = LIMMIN};
		$('#Dial').css({"left": Xpos});
	});

	$(document).on('touchmove',function (e){																				// slides the cursor
		e.preventDefault();
		Xpos = e.originalEvent.touches[0].pageX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){Xpos = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){Xpos = LIMMIN};

		percen = (100 * (Xpos - LIMMIN)/range).toFixed(0) 														// get percentaje online
		$('#scale').html(percen.toString().concat(' %'))
		$('#scale').css({"left": Xpos- Math.ceil(screen.width/2)})
		$('#Dial').css({"left": Xpos});
	})

	$(document).on('touchend',function (e){																				// end of touch, get response
		e.preventDefault();
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
		store_data(DataToSave);
		if (sc.trial == sc.maxtrials){
			$('#preg').html('fin del juego, ¡muchas gracias!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		return}

		var total=0;
		for(var i in sc.correct) { total += sc.correct[i]; }
		if (total % 10 ==0 && !(total ==0)){
			if(SoundOn){LevelSound.play()}
			Level = Level + 1;
			$('#Letterhead2').html('Nivel: '+ Level.toString());
			var sentence = '¡Pasaste al nivel '.concat(Level.toString())
			$("#preg").html(sentence.concat('!'));
			$("#preg").fadeIn(300);
			setTimeout("$('#preg').fadeOut(200);$('div.linesConf').hide(0,newtrial(sc))",2500)}
		else{
			setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)}

  })
};
}
