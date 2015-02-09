$(document).ready(function(){
	//---------------------------- Menu -----------------------------
	var _timers={
		mouseleave:false
	},
	_ssmenu = $('#ssmenu');
	
	/**
	 * Positionne le menu au bon endroit
	 */
	var setMenuPos = function(){
		var _pos = _ssmenu.offset(),
			_posMenu = $('#menu').offset(),
			_menuRight = $('#menu').outerWidth() + _posMenu.left;

		_ssmenu.css('left',0);
		var _ssMenuRight = _ssmenu.outerWidth() + _pos.left;
		_ssmenu.css('left',_pos.left);
		
		
		if(_ssMenuRight > _menuRight){
			_ssmenu.css('left',(_pos.left-(_ssMenuRight - _menuRight) )+'px');	
		}
	}
	
	var showMenu = function(){
		//Cacher le menu et le panier-pop au cas où il soit ouvert
		$('#panier-pop, #compte-pop').hide();
		$('#mon-panier, #mon-compte').removeClass('over');
		
		var _this = $(this),
			pos = _this.offset();
		_ssmenu.show().css('visibility','hidden');
		replaceMenuContent();
		$('.wizi-cat.over').removeClass('over');
		_this.addClass('over');
		
		$('#div-menu').removeClass('first-over last-over');
		
		if(_this.parents('li').hasClass('first')){
			_this.parents('#div-menu').addClass('first-over over');
		}
		else if(_this.parents('li').hasClass('last')){
			_this.parents('#div-menu').addClass('last-over over');
		}
		else {
			_this.parents('#div-menu').addClass('over');
		}
		
		_ssmenu.css({
			left: pos.left+'px',
			top: (pos.top+_this.height() + 5)+'px'
		});
		//on déplace le ul qui contient le menu dans le div qui affiche le menu
		var _div = $('#ss'+_this.attr('id').replace(/[^0-9]/ig,''));
		if(_div.length == 0) {
			_ssmenu.hide();
			return ;
		}
		
		_ssmenu.html(_div);
		_div.show();
		if (!_div.hasClass('treated')) {
			var _ul = _div.children('ul')
				_li = _ul.children('li'), 
				_nbItems = _li.length,
				ceil = 0,
				text = '',
				cpt = 0;
			if (_nbItems > 5 && _nbItems <= 10) {
				_ul.css('max-width', '200px');
				_div.addClass('double');
				ceil = Math.ceil(_nbItems / 2);
				_li.each(function(){
					if (cpt >= ceil) {
						text += '<li>' + $(this).html() + '</li>';
						$(this).remove();
					}
					cpt++;
				});
				_div.append('<ul class="last">' + text + '</ul>');
				_div.children('ul.last').css('max-width', '200px');
			}
			else 
				if (_nbItems > 10) {
					_ul.css('max-width', '200px');
					_div.addClass('triple');
					
					ceil = Math.ceil(_nbItems / 3);
					_li.each(function(){
						if (cpt >= ceil && cpt < ceil * 2) {
							text += '<li>' + $(this).html() + '</li>';
							$(this).remove();
						}
						else 
							if (cpt >= ceil * 2) {
								if (cpt == ceil * 2) {
									_div.append('<ul class="centre">' + text + '</ul>');
									_div.children('ul.centre').css('max-width', '200px');
									text = '';
								}
								text += '<li>' + $(this).html() + '</li>';
								$(this).remove();
							}
						cpt++;
					});
					_div.append('<ul class="last">' + text + '</ul>');
					_div.children('ul.last').css('max-width', '200px');
				}
			_div.addClass('treated');
			
			
			var _maxWidth=0;
			_div.children('ul').each(function(){
				_maxWidth = Math.max(_maxWidth,$(this).outerWidth());
			})
			_div.children('ul').css('width',_maxWidth);
		}
		//Si le sous-menu est moins large que l'item du menu, on l'égalise
		if(_ssmenu.width() < _this.outerWidth()){
			_ul.css('width', _this.outerWidth());
		}
		setMenuPos();
		if(_info_nav == 'chrome'){
			$('#ssmenu li').css('padding-top','0');
			setTimeout(function(){
				$('#ssmenu li').css('padding-top','3px');
				_ssmenu.css('visibility','visible');
			},100);
		}
		else {
			_ssmenu.css('visibility','visible');
		}
	}
	
	var hideMenu = function(){
		$('.a-cat.over, #div-menu').removeClass('over');
		$('#div-menu').removeClass('first-over last-over');
		replaceMenuContent();
		_ssmenu.hide();
	}
	
	/**
	 * Replace le contenu du menu à son emplacement initial
	 */
	var replaceMenuContent = function(){
		var _div = _ssmenu.children('div');
		if (_div.length > 0) {
			//on replace le ul qui contient le menu là où il était
			$('#li' + _div.attr('id').replace(/[^0-9]/ig, '')).append(_div);
			_div.hide();
		}
	}
	
	$('#menu li a.wizi-cat').mouseenter(function(){
		clearTimeout(_timers.mouseleave);
		showMenu.call(this);
	});
	
	$('#ssmenu').mouseenter(function(){
		clearTimeout(_timers.mouseleave);
	});
	
	$('#menu li a.wizi-cat, #ssmenu').mouseleave(function(){
		_timers.mouseleave = setTimeout(hideMenu,750);
	});
});
