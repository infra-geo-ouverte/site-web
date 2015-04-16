$(document).ready (function(){

animation();  //part l'animation en générale

// départ de l'animation avec la bannière 

	function animation(){
	banniere();
// Animation logo et texte
		function banniere(){

			logo();
			titre();
	
				function logo(){  
					$('.banniere-logo').hide().fadeIn(4000)
				};

				function titre(){ 
					$('.banniere-titre').hide().fadeIn(4000)
				};
		}; 				
 	};
				

});  

