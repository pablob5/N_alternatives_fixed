function validate_send(){
	var NAME 	= document.getElementById("Name").value;
	var GENDER 	= document.getElementById("Gender").value;
	var AGE 	= document.getElementById("Age").value;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			var MOBILE = 1;
	} else{	var MOBILE = 0;}
	var SYSTEM 			= navigator.userAgent;
	var INPUT_TYPE 		= $('input[name="Input"]:checked').val();
	var SCREEN_WIDTH	= screen.width;
	var SCREEN_HEIGHT 	= screen.height;

	InputMethod = INPUT_TYPE;

	var now 	= new Date();
	timestamp 	= now.getTime();

	CODE = hex_md5(NAME + GENDER + AGE + timestamp + Math.floor(Math.random()*1000)); //genera un codigo
	$.ajax({
	type:'POST',
	url:'./php/processform.php',
	data:{Code: CODE, Dat: now, Name: NAME, Gender: GENDER, Age: AGE, System: SYSTEM, Mobile: MOBILE, Input_type: INPUT_TYPE, Screen_width: SCREEN_WIDTH, Screen_height: SCREEN_HEIGHT},
	success:function(r){
		  if(r=="error")
		  alert("ERROR!");}})
	DataToSave.name = NAME;
}


