//---------------------------- Configuration ---------------------------
//Infos bulles
var _desc_html = '';

//Hauteur des produits
var _hautProdHeightCur = 0,	//hauteur du .haut-prod en cours
	_hautProdHeightMax = 0,	//hauteur du plus haut .haut-prod de la ligne
	_basProdHeightCur = 0,	//hauteur du .bas-prod en cours
	_basProdHeightMax = 0,	//hauteur du plus haut .bas-prod de la ligne
	_hasEtatPrix = false,	//Si le produit à un état (promo/solde/nouveauté)
	_hautInfosMarg = 0,     //Padding du .infos-prod
	_hautInfosHeightMax = 0,//hauteur du .infos-prod en cours
	_hautInfosHeightCur = 0,//hauteur du plus grand .infos-prod de la ligne
	_hautInfosPad = 0;		//hauteur du .infos-prod sans padding

$(document).ready(function(){
	// ------------- Infos bulles --------------
	var tooltipListProd = function(){
		if($(this).children().children('.description').length > 0){
			_desc_html = $(this).children().children('.description').html();
			$(this).qtip({
				content: '<div class="tooltip">' + _desc_html + '</div>', 
				show: 'mouseover', 
				hide: 'mouseout', 
				position: {
					target: 'mouse', 
					corner: {
						tooltip: 'leftBottom'
					}
				}, 
				adjust: {
					mouse: true
				}, 
				style: { 
					width: 300,
					padding: 5,
					background: '#eeeeee',
					color: 'black', 
					border: {
						width: 5,
						radius: 5,
						color: '#666666'
					},
					tip: 'bottomLeft'
				}
			});
		}
	}
	
	$('.list-prod .prod').each(function(){
		tooltipListProd.call(this);
	});
	
	$('.list-prod a').each(function(){
		$(this).removeAttr('title');
	});
	
	$('.list-prod button').each(function(){
		$(this).removeAttr('title');
	});
	
	//--------------------------- Listes produits : clic sur les produits ---------------------------------
	$('.btn-ajpan').click(function(e){
		e.stopPropagation();
	});
	
	$('.prod').click(function(e){
		if (!$(e.originalTarget).hasClass('.btn-ajpan')) { //Si on clique pas sur le bouton ajouter au panier alors on va sur le produit
			$(location).attr('href', $(this).find('a.photo').attr('href'));
		}
	});
	
	$('#sel-tri').comboBox();
	
	$('#sel-tri').change(function(){
		$(location).attr('href', $(this).val());
	});
});

//Permet d'ajuster la hauteur des produits des listes
var adjustInfosHeight = function(){
	_hautInfosHeightMax = 0;
	//Calcul du plus haut .infos-prod de la ligne
	$(this).children('.prod').children('.cont-prod').children('.haut-prod').children('.infos-prod').each(function(){
		_hautInfosHeightCur = $(this).height();
		if(_hautInfosHeightMax < _hautInfosHeightCur){
			_hautInfosHeightMax = _hautInfosHeightCur;
		}
	});
	//Ajustement des hauteurs
	$(this).children('.prod').children('.cont-prod').children('.haut-prod').children('.infos-prod').each(function(){
		//Ajustement du haut, on leur donne tous la même hauteur
		$(this).css({
			height: _hautInfosHeightMax + 'px'
		});
	});
}
/* --------------------------------------- */

$(window).load(function(){
	//Ajustement des tailles	
	$('.ligne-prod').each(function(){
		adjustInfosHeight.call(this);
	});
	
	
	if(_info_nav == 'msie' && parseInt(_info_nav_vers) <= 7){
		var hover = '.prod';
		$(hover).mouseover(function () {
			$(this).addClass('hover');
		});
		$(hover).mouseout(function () {
			$(this).removeClass('hover');
		});
		
		$('.list-prod a').each(function(){
			$(this).children('img').removeAttr('alt');
		});
		
		$('.cross-sell a').each(function(){
			$(this).children('img').removeAttr('alt');
		});
	}
});