//---------------------------- Configuration ---------------------------
//Processus de commande
var _heightCur = 0, _heightMax = 0;

$(document).ready(function(){
	//---------------------------- Panier quantités ----------------------------
	$('.plus').click(function(){
		plusQte.call(this);
	});
	$('.moins').click(function(){
		moinsQte.call(this);
	});
	
	//---------------------------- Modes de commande ------------------------
	$('#div-deja input').change(function(){
		var _id = $(this).attr('id').replace('deja-', '');
		$('#div-deja li').removeClass('current');
		$('#div-deja #li-deja-'+_id).addClass('current');
		if($('#deja-oui').attr('checked')){
			$('#form-identification').show();
		}
		else{
			$('#form-identification').hide();
		}
	});
		
	$('#form-cgv label img').click(function(){
		$(this).prev('input').attr('checked', true);
	});
});

var _blocMode;

$(window).load(function(){
	$('.bloc-mode input').click(function(e){
		e.stopPropagation();
		_blocMode = $(this).parent().parent('.bloc-mode');
		_blocMode.parent().children('.bloc-mode').removeClass('selected');
		_blocMode.parent().children('.bloc-mode').children('.picto-selected').remove();
		_blocMode.addClass('selected');
		_blocMode.append('<span class="picto-selected">&nbsp;</span>');
	});
	
	$('.bloc-mode').click(function(){
		$(this).children('label').children('input').click();
	});
	
	$('.bloc-mode').each(function(){
		if($(this).children('label').children('input').attr('checked')){
			$(this).addClass('selected');
			$(this).append('<span class="picto-selected">&nbsp;</span>');
		}
	});
	
	//---------------------------- Modes de livraisons ------------------------
	adjustChildrenHeight.call($('#ChoixLivraison'));
	
	//---------------------------- Modes de paiement ------------------------
	adjustChildrenHeight.call($('#choix-paiement'));
});

//Permet d'ajuster la hauteur des modes de livraison et de paiement
var adjustChildrenHeight = function(){
	//Calcul du plus haut .haut-prod de la ligne
	_heightMax = 0;
	$(this).children('.bloc-mode').each(function(){
		_heightCur = $(this).height();
		if(_heightMax < _heightCur){
			_heightMax = _heightCur;
		}
	});
		
	//On donne la bonne hauteur au produit ainsi qu'un padding-bottom permettant d'accueillir .bas-prod
	$(this).children('.bloc-mode').css({
		height: _heightMax
	});
}

//Augmente la quantité
var plusQte = function(){
	var _val = $(this).prevAll('.quantite-pan').val();
	if(IsNumeric(_val) && parseInt(_val) == _val){
		$(this).prevAll('.quantite-pan').val(parseInt(_val)+1);
		$(this).prevAll('.quantite-pan').change();
	}
	else{
		alert('Valeur incorrecte');
	}
}

//Diminue la quantité
var moinsQte = function(){
	var _val = $(this).prevAll('.quantite-pan').val();
	if(IsNumeric(_val) && parseInt(_val) == _val && (_val-1) >= 0){
		$(this).prevAll('.quantite-pan').val(parseInt(_val)-1);
		$(this).prevAll('.quantite-pan').change();
	}
	else if(!(IsNumeric(_val) && parseInt(_val) == _val && (_val-1) < 0)){
		alert('Valeur incorrecte');
	}
}

//Permet de tester si une variable est un nombre
function IsNumeric(input){
	return (input - 0) == input && input.length > 0;
}