function show_stim(sc)
{
$('#Dial').hide();
if (AutomaticResponse ==1){setTimeout("$('#myCanvas1').click()",1000)}	// to run alone



if (screen.width < 401){						  	var R =  110;}	// responsive diameter
if ((screen.width > 400) && (screen.width < 601)) { var R =  135;}
if ((screen.width > 600) && (screen.width < 901)) { var R =  150;}
if ((screen.width > 900) && (screen.width < 1201)){	var R =  170;}
if (screen.width > 1200){							var R =  170;}

var angle = Math.random() * Math.PI * 2
var stepangle = Math.PI * 2/3 * (Math.round(Math.random()) * 2 -1); //60 deg step, clockwise or anticlockwise for random stimuli location


DataToSave.angle = angle;
DataToSave.stepangle = stepangle;

var Center = screen.width/2 - document.getElementById('myCanvas1').width/2;

X1 = Math.round(Math.cos(angle) * R + Center);								// posicion canvas 1 
Y1 = Math.round(Math.sin(angle) * R);
X2 = Math.round(Math.cos(angle + stepangle) * R + Center);					// posicion canvas 2
Y2 = Math.round(Math.sin(angle + stepangle) * R);
X3 = Math.round(Math.cos(angle + stepangle + stepangle) * R + Center);		// posicion canvas 3
Y3 = Math.round(Math.sin(angle + stepangle + stepangle) * R);
X4 = Center;																// punto de fijacion				


DataToSave.nstim = sc.nstim[sc.trial-1];

$('#myCanvas1').css('left',X1+'px');
$('#myCanvas1').css('top', Y1+'px');
$('#myCanvas2').css('left',X2+'px');
$('#myCanvas2').css('top', Y2+'px');
$('#myCanvas3').css('left',X3+'px');
$('#myCanvas3').css('top', Y3+'px');

$('#myCanvasDot').css('left',X4+'px');

 
var StartTime = +new Date();											//starts the trial
$('#SoundButton').show()
$('#preg').html('¿Cuál es el más grande?');

var T1 = 800;															// stimuli onset
var T2 = 4000;															// hide stimuli
if (sc.trial == 3){$('#preg').html('Comenzamos a ir m&aacute;s r&aacute;pido');}
if (sc.trial < 4){
	
	setTimeout("$('#preg').fadeIn(100);",0);
	}

var myVar1 = setTimeout(function(){

 	$("#myCanvas1").fadeOut(500)
	$("#myCanvas2").fadeOut(500)
  	$("#myCanvas3").fadeOut(500)
  	$("#myCanvasDot").fadeOut(500)
	$('#preg').hide()

	$("#myCanvas1").unbind('click');
	$("#myCanvas2").unbind('click');
	$("#myCanvas3").unbind('click');

	$('#preg').html('Demasiado lento, va de nuevo');
	$('#preg').show()
	$('#preg').fadeOut(1400)
	sc.trial = sc.trial - 1;
	setTimeout("$('#myCanvas1').hide(0,newtrial(sc))",1000);
}, T2);




$('#myCanvasDot').fadeIn(100);											//show and hide stimuli
setTimeout("$('#myCanvas1').show();",T1);
setTimeout("$('#myCanvas2').show();",T1);
if (sc.nstim[sc.trial-1] ==3){ setTimeout("$('#myCanvas3').show();",T1);}


$('.clickresp').click(function(event)									//waits for a click/tap
{
	DataToSave.reactiontime	= +new Date() - StartTime - T1;
	clearTimeout(myVar1);

	if ($(event.target).is('#myCanvas1') ) { //checks which canvas was clicked 
		sc.response[sc.trial-1] = 1;	   
		
		$("#myCanvas").fadeOut(50);
		$("#myCanvas").fadeIn(100)
		$("#myCanvas").fadeOut(150);}
	
	if ($(event.target).is('#myCanvas2') ) { 
		sc.response[sc.trial-1] = 2;
		
		$("#myCanvas").fadeOut(50);
		$("#myCanvas").fadeIn(100)
		$("#myCanvas").fadeOut(150);}
	
	if ($(event.target).is('#myCanvas3') ) { 
		sc.response[sc.trial-1] = 3;
		
		$("#myCanvas").fadeOut(50);
		$("#myCanvas").fadeIn(100)
		$("#myCanvas").fadeOut(150);}

	console.log(sc.response[sc.trial-1])
	sc.correct[sc.trial-1] = sc.response[sc.trial-1] == DataToSave.posbig;    // checks whether response is correct
	

	

	DataToSave.response    = sc.response[sc.trial-1];
	DataToSave.correct 	   = sc.correct[sc.trial-1];

 	$("#myCanvas1").fadeOut(500)
	$("#myCanvas2").fadeOut(500)
  	$("#myCanvas3").fadeOut(500)
  	$("#myCanvasDot").fadeOut(500)
	$('#preg').fadeOut(500)

	$("#myCanvas1").unbind('click');
	$("#myCanvas2").unbind('click');
	$("#myCanvas3").unbind('click');
	$('#SoundButton').unbind('click');
	setTimeout("$('#myCanvasR1').hide(0,introspective_response(DataToSave))",500);


});

}
