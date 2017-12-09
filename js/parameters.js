
var AutomaticResponse 	= 0;		// runs alone, for debugging
var Level 		 		= 1;
var DataToSave 			= [];

var sc 					= [];
sc.maxtrials    		= [];		// the maximum number of trials
sc.whichisbigger		= [];		// circle or square
sc.response				= [];		// subject's response (1 to 3)
sc.correct				= [];
sc.trial 		    	= 0;		// global trial counter
sc.nstim        		= [];		// number of items to display
sc.stimvalues   		= [];		// for the area differences to be stored
sc.tomultiply   		= [];		// to multiply stimval for Area3
sc.whichisbigger		= [];		// bigger the square or the circle
var AcumTotal 			= 0;		// accumulated correct responses

var T1 					= 800;		// stimuli onset
var T2 					= 1800;		// hide stimuli
var CT 					= 10; 		// number of correct trials to increase level 

var numberofstimuli     = [2, 3];                 // number of items to display each trial
var bigger              = [1, 2];                 // bigger the square or the circle
var areavalues          = [0.6, 0.7, 0.8, 0.9, 0.95];  // prepilot = [.9, .7, .6, .5] area difference between figures. area2 = area1 * areavalues[i] 
var areaforthethirdone  = [0.1, 0.2, 0.3, 0.4, 0.5 , 0.6];   // prepilot = [0.6, 0.35, 0.1] area difference between figures. area3 = area2 * areavalues[i]