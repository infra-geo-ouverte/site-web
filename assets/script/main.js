$(document).ready (function(){
	
	//détecter la version de IE
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
// ie === undefined
// If you're in IE (>=5) then you can determine which version:
// ie === 7; // IE7
// Thus, to detect IE:
// if (ie) {}
// And to detect the version:
// ie === 6 // IE6
// ie > 7 // IE8, IE9, IE10 ...
// ie < 9 // Anything less than IE9
// ----------------------------------------------------------
var ie = (function(){
    var undef,rv = -1; // Return value assumes failure.
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    } else if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rvNum = ua.indexOf('rv:');
        rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
    }

    return ((rv > -1) ? rv : undef);
}());
//Message pour les utilisateurs de IE7 et moins
if (ie < 8){
	alert("Le site a été optimisé pour une utilisation avec IE8 et plus, Chrome et Firefox. Veuillez utiliser un navigateur plus récent.");
};

// FAQ ouvrir le faq sélectionné
    var anchor = window.location.hash.replace("#", "");
    $(".collapse").collapse('hide');
    $("#" + anchor).collapse('show');

//Barre de menu de gauche qui ouvre et ferme
	//$('[data-toggle="tooltip"]').tooltip();
	
	/*Variables */
	var icone = $('#icone-sidebar'),
		footer= $('footer'),
		wrapper = $('#wrapper'),
		headerBouton = $('header button'),
		sidebar = $("#sidebar-wrapper");

  // Changer l'icone quand on ouvre et ferme le sidebar
	$('[data-toggle="offcanvas"]').click(function () {
		
        wrapper.toggleClass('toggled');
			if (wrapper.hasClass('toggled')){  //ouvert
				icone.removeClass('octicon-move-right');
				icone.addClass('octicon-x');
				icone.text("");
				if ( $(window).width() > 739) { 
					footer.css("margin-left", "250px");
				}
			}
			else{
				icone.removeClass('octicon-x'); //fermé
				icone.addClass('octicon-move-right');
				icone.text("");
				if ( $(window).width() > 739) { 
					footer.css("margin-left", "0px");
				}
			}			
	}); 
	
	//Pour faire descendre le bouton quand le menu est ouvert sur un appareil mobile
	headerBouton.click(function(){
		if(headerBouton.hasClass("collapsed")){ //ouvert
			icone.css("top","470px");
			sidebar.css("top","500px");
		}
		else{
			icone.css("top","160px");
			sidebar.css("top","200px");
		}	
	});	
  
  /* scroll ref : http://demo.yoarts.com/liberty/# */
  
    // Smooth Hash Link Scroll top
  $('.smooth-scroll').click(function() {
    //if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    //}
  });
  

// pour les placeholder du formulaire pour tous les browser

if (ie < 10){
  $('input:not(:button,:submit,:reset,:file), textarea').each(function(){
    var tag=$(this),
        hold=$(tag).attr('placeholder'),
        holdId=$(tag).attr('id');
    $(tag).wrap('<div class="holder-box" />')
    $(tag).before('<label for="'+holdId+'" />');
    $(tag).prev().text(hold);
    $(tag).focusin(function() {
      $(tag).prev().hide();
    }).focusout(function(){
      if(this.value==='')$(tag).prev().show();
    });
  });
};

  
 });

  
