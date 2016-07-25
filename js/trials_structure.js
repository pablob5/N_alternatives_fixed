function trials_structure(){

  TrialStruct = []

  var numberofstimuli     = [2, 3];
  var areavalues          = [0.05, .1, .2, .3];
  var bigger              = [1, 2];
  var areaforthethirdone  = [ 1.2, 1.46, 1.73]

  var NSTIM               = new Array();  														// number of items to display each trial
  var STIMVALUES          = new Array();  														// area difference between figures
  var WHICHISBIGGER       = new Array();															// bigger the square or the circle
  var TOMULTIPLY          = new Array();   														// to multiply stimval for the third option

  cont = 0;
  for (var a = 0; a < numberofstimuli.length; a++){
    for (var b = 0; b < areavalues.length; b++){
      for (var c = 0; c < bigger.length; c++){
        for (var e = 0; e < areaforthethirdone.length; e++){

          NSTIM[cont]          = numberofstimuli[a]
          STIMVALUES[cont]     = areavalues[b]
          WHICHISBIGGER[cont]  = bigger[c]
          TOMULTIPLY[cont]     = areaforthethirdone[e]
          cont = cont + 1
        }
      }
    }
  }

  sc.maxtrials = NSTIM.length;
  console.log(NSTIM.length)

  var indxs = new Array();
  for (var i = 0; i < NSTIM.length;i++) {indxs.push(i);}

  shuffle(indxs)
  for (var i = 0; i < sc.maxtrials; i++){
    sc.nstim[i]      			= NSTIM[indxs[i]]
    sc.stimvalues[i]      = STIMVALUES[indxs[i]]
    sc.whichisbigger[i]  	= WHICHISBIGGER[indxs[i]]
    sc.tomultiply[i]  		= TOMULTIPLY[indxs[i]]}

}
