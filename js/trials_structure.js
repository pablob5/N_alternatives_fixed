function trials_structure(){

  TrialStruct = []

  var numberofstimuli     = [2, 3];                 // number of items to display each trial
  var areavalues          = [0.9, .7, .6, .5];      // area difference between figures. area2 = area1 * areavalues[i] 
  var bigger              = [1, 2];                 // bigger the square or the circle
  var areaforthethirdone  = [0.6, 0.35, 0.1];       // area difference between figures. area3 = area2 * areavalues[i]

  var NSTIM               = new Array();
  var STIMVALUES          = new Array();
  var WHICHISBIGGER       = new Array();
  var TOMULTIPLY          = new Array();

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
