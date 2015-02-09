var tb_pathToImage = tb_pathImage+'loadingAnimation.gif';

var optionVar = new Object(); 
optionVar['img'] = new Object();
optionVar['class'] = new Object();
optionVar['id'] = new Object();
optionVar['img']['taille'] = 100;
optionVar['class']['prix'] = 'lePrix';

optionVar['class']['prix_hpromo'] = 'lePrixHpromo';

optionVar['class']['promo_phrase'] = 'promoPhrase';
optionVar['class']['promo_type'] = 'promoType';
optionVar['class']['promo_date_debut'] = 'promoDateDebut';
optionVar['class']['promo_date_fin'] = 'promoDateFin';

optionVar['class']['promo_phrase_pourc'] = 'promoPhrasePourc';
optionVar['class']['promo_pourc'] = 'promoPourc';

optionVar['class']['promo_phrase_reduc'] = 'promoPhraseReduc';
optionVar['class']['promo_reduc'] = 'promoReduc';
	
optionVar['class']['stock'] = 'leStock';
optionVar['id']['nbprod'] = 'quantite';
optionVar['class']['change'] = { 
	leStock: { 
		ok: 'StockOK',
		ko: 'StockKO' 
	} 
};

var tC = new Array();
tC['prec'] = LANG.PREC;
tC['prec2'] = LANG.PREC2;
tC['suiv'] = LANG.SUIV;
tC['suiv2'] = LANG.SUIV2;

var aujourdhui = LANG.AUJOURDHUI;
var dateformat = 'dd/mm/yy';

var jours = new Array();
jours[0] = LANG.DIMANCHE;
jours[1] = LANG.LUNDI;
jours[2] = LANG.MARDI;
jours[3] = LANG.MERCREDI;
jours[4] = LANG.JEUDI;
jours[5] = LANG.VENDREDI;
jours[6] = LANG.SAMEDI;

var joursAbr = new Array();
joursAbr[0] = LANG.DI;
joursAbr[1] = LANG.LU;
joursAbr[2] = LANG.MA;
joursAbr[3] = LANG.ME;
joursAbr[4] = LANG.JE;
joursAbr[5] = LANG.VE;
joursAbr[6] = LANG.SA;

var mois = new Array();
mois[1] = LANG.JANVIER;
mois[2] = LANG.FEVRIER;
mois[3] = LANG.MARS;
mois[4] = LANG.AVRIL;
mois[5] = LANG.MAI;
mois[6] = LANG.JUIN;
mois[7] = LANG.JUILLET;
mois[8] = LANG.AOUT;
mois[9] = LANG.SEPTEMBRE;
mois[10] = LANG.OCTOBRE;
mois[11] = LANG.NOVEMBRE;
mois[12] = LANG.DECEMBRE;

var moisAbr = new Array();
moisAbr[1] = LANG.JAN;
moisAbr[2] = LANG.DEV;
moisAbr[3] = LANG.MAR;
moisAbr[4] = LANG.AVR;
moisAbr[5] = LANG.MAIABR;
moisAbr[6] = LANG.JUI;
moisAbr[7] = LANG.JUL;
moisAbr[8] = LANG.AOU;
moisAbr[9] = LANG.SEP;
moisAbr[10] = LANG.OCT;
moisAbr[11] = LANG.NOV;
moisAbr[12] = LANG.DEC;

var _l_nb_articles = LANG.NB_ARTICLES;
var _l_continuer_achat = LANG.CONTINUER_ACHAT;
var _l_aller_panier = LANG.ALLER_PANIER;
var _l_produit_ajout = LANG.PRODUIT_AJOUT;