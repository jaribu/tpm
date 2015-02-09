$(document).ready(function(){
	//--------------------------------------------------- Mise en forme du footer --------------------------------------------------
	//On regarde quels sont les blocs qui sont dans le footer
	var _principal = $('#bloc-menu-princ').length;
	var _secondaire = $('#bloc-menu-sec').length;
	var _comments = $('#bloc-dern-com').length;
	var _billets = $('#bloc-dern-billets').length;
	var i = 0;
	
	var _tabBoolBlocs = new Array(_principal, _secondaire, _comments, _billets);
	var _tabIdBlocs = new Array('#bloc-menu-princ', '#bloc-menu-sec', '#bloc-dern-com', '#bloc-dern-billets');
	var _nbBlocsPossible = _tabBoolBlocs.length;
	var _nbBlocFoot = 0;
	for (i = 0; i < _nbBlocsPossible; i++) {
		if (_tabBoolBlocs[i]) {
			_nbBlocFoot++;
		}
	}
	
	switch(_nbBlocFoot){
		case 3://Il y a 3 blocs dans le footer, chacun prendra le tiers du footer
			if (_principal){
				$('#bloc-menu-princ').addClass('tiers');
			}
			if (_secondaire){
				$('#bloc-menu-sec').addClass('tiers');
			}
			if (_comments){
				$('#bloc-dern-com').addClass('tiers');
			}
			if (_billets){
				$('#bloc-dern-billets').addClass('tiers');
			}
		break;
		case 2://Il y a 2 blocs dans le footer
			var _cptF = 0;
			var _ul2 = '';
			var _ul3 = '';
			for(i = 0; i < _nbBlocsPossible; i++){
				if(_tabBoolBlocs[i]){//Pour chacun des blocs affichés
					_cptF = 0;
					_ul2 = '';
					_ul3 = '';
					$(_tabIdBlocs[i]).addClass('demi');//Chaque bloc prendra la moitié du footer
					if($(_tabIdBlocs[i]+' ul li').length > 1){//On sépare le contenu des menu en deux pour avoir deux listes par bloc
						$(_tabIdBlocs[i]+' ul li').each(function(){
							if(_cptF % 2 == 1){
								_ul3 += '<li>'+$(this).html()+'</li>';
								$(this).remove();
							}
							_cptF++;
						});
						$(_tabIdBlocs[i]+' ul').addClass('divise');
						$(_tabIdBlocs[i]+' .c1-bloc-foot').append('<ul class="menu-foot divise last">'+_ul3+'</ul><div class="clear1px"></div>');
					}
				}
			}
		break;
		case 1://Il y a 1 bloc dans le footer
			var _cptF = 0;
			var _ul2 = '';
			var _ul3 = '';
			for(i = 0; i < _nbBlocsPossible; i++){
				if(_tabBoolBlocs[i]){//Pour chacun des blocs affichés
					_cptF = 0;
					_ul2 = '';
					_ul3 = '';
					$(_tabIdBlocs[i]).addClass('full');//Il n'y a qu'un bloc, il prend donc toute la largeur
					if($(_tabIdBlocs[i]+' ul li').length > 2){//Si le contenu du menu a plus de 3 items, on peut le séparer en 3 colonnes
						$(_tabIdBlocs[i]+' ul li').each(function(){
							if(_cptF % 3 == 1){
								_ul2 += '<li>'+$(this).html()+'</li>';
								$(this).remove();
							}
							if(_cptF % 3 == 2){
								_ul3 += '<li>'+$(this).html()+'</li>';
								$(this).remove();
							}
							_cptF++;
						});
						$(_tabIdBlocs[i]+' ul').addClass('divise');
						$(_tabIdBlocs[i]+' .c1-bloc-foot').append('<ul class="menu-foot divise">'+_ul2+'</ul><ul class="menu-foot divise last">'+_ul3+'</ul><div class="clear1px"></div>');
					}
					else if($(_tabIdBlocs[i]+' ul li').length == 2){//S'il n'en a que 2, on peut le séparer en 2 colonnes
						$(_tabIdBlocs[i]+' ul li').each(function(){
							if(_cptF % 3 == 1){
								_ul2 += '<li>'+$(this).html()+'</li>';
								$(this).remove();
							}
							if(_cptF % 3 == 2){
								_ul3 += '<li>'+$(this).html()+'</li>';
								$(this).remove();
							}
							_cptF++;
						});
						$(_tabIdBlocs[i]+' ul').addClass('divise2');
						$(_tabIdBlocs[i]+' .c1-bloc-foot').append('<ul class="menu-foot divise2 last">'+_ul2+'</ul><div class="clear1px"></div>');
					}
				}
			}
		break;
		default:
			$('#c1-footer').hide();
		break;
	}
	$('.bloc-foot').css('height', ($('#c1-footer').height() - $('#menu-footer').outerHeight() - 24/*margin-bottom des blocs du footer*/));
});