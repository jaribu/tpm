$(document).ready(function(){
	$('#description-courte .savoir-plus').click(function(e){
		e.preventDefault();
		var posDesc = $($(this).attr('href')).offset();
		$(jQuery.browser.webkit ? 'body': 'html').animate({'scrollTop': parseInt(posDesc.top)}, 800);
		$('#li-description a').click();
	});
	
	//--------------------------- Stock -----------------------------
	setTimeout(function(){
		$('.stock-var').show();
	}, 500);
	
	//--------------------------- Partage Ami -----------------------------
	$('.wizicss-partage-email-btn').click(function(e){
		e.preventDefault();
		$('.wizicss-partage-form').modal({
			onClose: function(dialog) {
				$.modal.close();
			}
		});
	});
	
	if($('.wizicss-erreurs-liste').length > 0 || $('.wizijs-partage-etape2').length > 0){
		$('.wizicss-partage-email-btn').click();
	}
	
	//---------------------------- Onglets Fiche --------------------------
	$('.cont-onglet').hide();
	if($('#cross-sell-fiche').length > 0){
		$('#cross-sell-fiche').show();
	}
	else{
		$('#description').show();
	}

	$('#liste-infos li a').click(function(e){
		e.preventDefault();
		$('#liste-infos li a').removeClass('current');
		$(this).addClass('current');
		var _idInfo = $(this).attr('href');
		$('.cont-onglet').hide();
		$(_idInfo).show();
	});
	
	//---------------------------- Miniatures fiche ---------------------------
	var _urlMiniTmp = '', 
		_nbMini = $('#c1-miniatures ul li').length, //Nombre de miniatures
		_dimImgMini = 50, //Dimension d'une image miniature
		_dimMini = 0, //Dimension d'une miniature (en comptant ses bordures, largeur ou hauteur selon le sens du déplacement)
		_espaceMini = 0, //espace entre deux miniatures
		_deplacement = 0, //Amplitude du déplacement
		_marginListMini = 0, //MarginLeft en cours de la liste des miniatures (on la déplace de horizontalement pour afficher uniquement les miniatures qu'on veut grâce à l'overflow:hidden de #c1-miniatures)
		_marginListMiniMin = 0, //MarginLeft maximum de la liste des miniatures
		_nbMiniAffichees = 6, //Nombre de miniatures affichées à la fois sans slide
		_sensHorizontal = true, //Sens du déplacement des images (Horizontal par défaut, mettre à false pour un déplacement vertical)
		_dureeAnim = 500; //Durée de l'animation
	
	$('.clic-zoom').click(function(e){
		$('.zoomThumbActive').parents('.miniature').find('.lightbox').click();
	});
	
	if($('#miniatures ul li').length <= _nbMiniAffichees){
		$('#miniatures').addClass('no-slide');
	}
	
	if (_nbMini > _nbMiniAffichees) {
		if(_sensHorizontal){
			if($('#c1-miniatures ul li img').innerWidth() != 0){
				_dimMini = $('#c1-miniatures ul li').outerWidth();
			}
			else{
				_dimMini = _dimImgMini + $('#c1-miniatures ul li').outerWidth();
			}
			_espaceMini = parseInt($('#c1-miniatures ul li').not('.first').css('margin-left').replace('px', ''));
		}
		else {
			if($('#c1-miniatures ul li img').innerHeight() != 0){
				_dimMini = $('#c1-miniatures ul li').outerHeight();
			}
			else{
				_dimMini = _dimImgMini + $('#c1-miniatures ul li').outerHeight();
			}
			_espaceMini = parseInt($('#c1-miniatures ul li').not('.first').css('margin-top').replace('px', ''));
		}
		_deplacement = _dimMini + _espaceMini;
		_marginListMiniMin = (_nbMini - _nbMiniAffichees) * -1 * _deplacement;
		
		//Passe à l'image précédente
		$('#prec').click(function(){
			if(_marginListMini < 0){
				_marginListMini += _deplacement;
				if(_sensHorizontal){
					$('#c1-miniatures ul').animate({'marginLeft': _marginListMini+'px'}, _dureeAnim);
				}
				else {
					$('#c1-miniatures ul').animate({'marginTop': _marginListMini+'px'}, _dureeAnim);
				}
				
				if(_marginListMini >= 0){
					$('#prec').addClass('disable');
					if(_marginListMini > _marginListMiniMin){
						$('#suiv').removeClass('disable');
					}
				}
				else{
					$('#prec').removeClass('disable');
					if(_marginListMini > _marginListMiniMin){
						$('#suiv').removeClass('disable');
					}
				}
			}
		});
		//Passe à l'image Suivante
		$('#suiv').click(function(){
			if(_marginListMini > _marginListMiniMin){
				_marginListMini -= _deplacement;
				if(_sensHorizontal){
					$('#c1-miniatures ul').animate({'marginLeft': _marginListMini+'px'}, _dureeAnim);
				}
				else {
					$('#c1-miniatures ul').animate({'marginTop': _marginListMini+'px'}, _dureeAnim);
				}
				
				if(_marginListMini <= _marginListMiniMin){
					$('#suiv').addClass('disable');
					if(_marginListMini < 0){
						$('#prec').removeClass('disable');
					}
				}
				else{
					$('#suiv').removeClass('disable');
					if(_marginListMini < 0){
						$('#prec').removeClass('disable');
					}
				}
			}
		});
	}
	else {
		$('#prec, #suiv').hide();
	}
	
	//---------------------------- DatePicker ----------------------------
	$('.dateForm').datepicker({
		dateFormat: 'dd/mm/yy',
		changeMonth: false,
		changeYear: false, 
		dayNames: [jours[0], jours[1], jours[2], jours[3], jours[4], jours[5], jours[6]], 
		dayNamesMin: [joursAbr[0], joursAbr[1], joursAbr[2], joursAbr[3], joursAbr[4], joursAbr[5], joursAbr[6]], 
		dayNamesShort: [joursAbr[0], joursAbr[1], joursAbr[2], joursAbr[3], joursAbr[4], joursAbr[5], joursAbr[6]],
		currentText: aujourdhui,
		monthNames: [mois[1], mois[2], mois[3], mois[4], mois[5], mois[6], mois[7], mois[8], mois[9], mois[10], mois[11], mois[12]], 
		monthNamesShort: [moisAbr[1], moisAbr[2], moisAbr[3], moisAbr[4], moisAbr[5], moisAbr[6], moisAbr[7], moisAbr[8], moisAbr[9], moisAbr[10], moisAbr[11], moisAbr[12]],
		nextText: tC['suiv2'], 
		prevText: tC['prec2']
	});
});

$(document).live('pageshow', function(){
	//Fiche produit
	//Galerie des photos
	var options = {
		captionAndToolbarAutoHideDelay: 0, 
		backButtonHideEnabled: false 
	};
	$('.ui-page-active .pictures-list a').photoSwipe(options);
});