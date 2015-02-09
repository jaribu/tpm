//---------------------------- Configuration ---------------------------
//Panier déroulant
var timeoPan, timeoPan2, premOuverture = true, maxHeight = 0;

//Compte déroulant
var timeoCompte, timeoCompte2;

$(document).ready(function(){
	// ------------- Panier déroulant --------------
	$('#mon-panier').mouseenter(function(){
		if(jQuery.trim($('#c1-panier-pop').html()) != ''){
			//Cacher le menu et le panier-pop au cas où il soit ouvert
			$('#ssmenu, #compte-pop').hide();
			$('#menu li.current .a-cat, #mon-compte').removeClass('over');
			
			clearTimeout(timeoPan);
			clearTimeout(timeoPan2);
			
			$(this).addClass('over');
						
			var pos = $('#mon-panier').offset();
			$('#panier-pop').css('left', pos.left - $('#panier-pop').outerWidth() + $('#mon-panier').outerWidth());
			$('#panier-pop').css('top', pos.top + $('#mon-panier').outerHeight());
			$('#panier-pop').show();
			if(premOuverture){
				$('#diapo-panier ul li .prod').each(function(){
					if(maxHeight < $(this).height()){
						maxHeight = $(this).height();
					}
				});
				$('#diapo-panier ul li .prod').css('height', maxHeight+'px');
				if($('#diapo-panier ul li').length > 1){
					$('#diapo-panier').easySlider({
						auto: false,
						continuous: false, 
						controlsShow: true
					});
					premOuverture = false;
				}
			}
		}
	});
	
	$('#mon-panier').mouseleave(function(){
		timeoPan = setTimeout(function(){
			$('#panier-pop').css('left', '-9000px');
			$('#panier-pop').hide();
			$('#mon-panier').removeClass('over');
		}, 750);
	});

	$('#panier-pop').mouseenter(function(){
		clearTimeout(timeoPan);
	});
	
	$('#panier-pop').mouseleave(function(){
		timeoPan2 = setTimeout(function(){
			$('#panier-pop').css('left', '-9000px');
			$('#panier-pop').hide();
			$('#mon-panier').removeClass('over');
		}, 750);
	});
	
	$('#fermer-panier').live('click', function(){
		$('#panier-pop').css('left', '-9000px');
		$('#panier-pop').hide();
		$('#mon-panier').removeClass('over');
	});
	
	// ------------- Mon compte déroulant --------------
	$('#mon-compte').mouseenter(function(){
		//Cacher le menu et le panier-pop au cas où il soit ouvert
		$('#ssmenu, #panier-pop').hide();
		$('#menu li.current .a-cat, #mon-panier').removeClass('over');
		
		clearTimeout(timeoCompte);
		clearTimeout(timeoCompte2);
		
		$(this).addClass('over');
		
		var pos = $('#mon-compte').offset();
		$('#compte-pop').css('left', pos.left - $('#compte-pop').outerWidth());
		$('#compte-pop').css('top', pos.top);
		$('#compte-pop').show();
	});
	
	$('#mon-compte').mouseleave(function(){
		timeoCompte = setTimeout(function(){
			$('#compte-pop').css('left', '-9000px');
			$('#compte-pop').hide();
			$('#mon-compte').removeClass('over');
		}, 750);
	});
	
	$('#compte-pop').mouseenter(function(){
		clearTimeout(timeoCompte);
	});
	
	$('#compte-pop').mouseleave(function(){
		timeoCompte2 = setTimeout(function(){
			$('#compte-pop').css('left', '-9000px');
			$('#compte-pop').hide();
			$('#mon-compte').removeClass('over');
		}, 750);
	});
	
	//---------------------------- Label dans textbox ----------------------------
	$('.labelIn').each(function(){
		if($(this).val() == ''){
			$(this).val($(this).parent().children('label').html());
		}
	});
	
	$('.labelIn').focus(function(){
		if($(this).val() == $(this).parent().children('label').html()){
			$(this).val('');
		}
	});
	
	$('.labelIn').blur(function(){
		if($(this).val() == ''){
			$(this).val($(this).parent().children('label').html());
		}
	});
});