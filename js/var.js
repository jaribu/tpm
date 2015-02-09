var _margeInterImage = 50,
_largeurAffiche = 700;
			
tb_Linfo = LANG.INFORMATIONS, 
tb_Lfermer = LANG.CLOSE, 
ini_search = LANG.VOTRERECHERCHE, 
ini_newsletter = LANG.VOTRE_EMAIL;

var form_prenom = "prenom1";
var form_nom = "nom1";
var form_societe = "societe1";
var form_adresse = "adresse1";
var form_cp = "cp1";
var form_ville = "ville1";
var form_tel = "tel1";

$(document).ready(function(){	
	var options = {
		zoomWidth: 540,
		zoomHeight: 400,
		xOffset: 5,
		position: "left" 
	};
	$('#principale a').jqzoom(options);
});
