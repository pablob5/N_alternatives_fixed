function trials_structure(){

  TrialStruct = []

  var numberofstimuli     = [2, 3];
  var areavalues          = [0.05, .1, .2, .3, .475 ];
  var bigger              = [1, 2];
  var figure              = [1, 2];
  var areaforthethirdone  = [ 1.2, 1.46, 1.73, 2 ]

  var NSTIM               = new Array();  																			// number of items to display each trial
  var STIMVALUES          = new Array();  																			// number of items to display each trial
  var WHICHISBIGGER       = new Array();																				// bigger the square or the circle
  var CIRCLEORSQUARE      = new Array();   																			// whether the third figure is a square or a circle
  var TOMULTIPLY          = new Array();   																			// to multiply stimval for the third option

  cont = 0;
  for (var a = 0; a < numberofstimuli.length; a++){
    for (var b = 0; b < areavalues.length; b++){
      for (var c = 0; c < bigger.length; c++){
        for (var d = 0; d < figure.length; d++){
          for (var e = 0; e < areaforthethirdone.length; e++){

            NSTIM[cont]          = numberofstimuli[a]
            STIMVALUES[cont]     = areavalues[b]
            WHICHISBIGGER[cont]  = bigger[c]
            CIRCLEORSQUARE[cont] = figure[d]
            TOMULTIPLY[cont]     = areaforthethirdone[e]
            cont = cont + 1
          }
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
    sc.circleorsquare[i]  = CIRCLEORSQUARE[indxs[i]]
    sc.whichisbigger[i]  	= WHICHISBIGGER[indxs[i]]
    sc.tomultiply[i]  		= TOMULTIPLY[indxs[i]]}

}
