$('#btne').ready(function(){
	if ($('#ChoixLivraison .mondialRelay')[0] != undefined && $('#ChoixLivraison .mondialRelay')[0].checked) {
		$('.valider #btne').hide();
		$('#frame-mondial-relay').show();
	}

	if ($('#ChoixLivraison').length > 1) {
		if ($('#ChoixLivraison .mondialRelay')[0].checked) 
			$('.valider #btne').slideUp('300', null);
	}

	$('.mode-livr input').click(function(e) {
		if ($(e.currentTarget).hasClass('mondialRelay')) {
			$('.valider #btne').slideUp('300', null);
			$('#frame-mondial-relay').slideDown('300', null);
		}
		else {
			$('#frame-mondial-relay').slideUp('300', null);
			$('.valider #btne').slideDown('300', null);
		}
	});
});