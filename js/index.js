
$(function() {
	
	var mycookie = {

		// 放置
		set: function(name, value, time) {
			var t = parseInt(time);
			var d = time.substring(('' + t).length);
			var obj = {
				s: 'Seconds',
				min: 'Minutes',
				h: 'Hours',
				day: 'Date',
				year: 'FullYear'
			}
			var exp = new Date();
			exp['set' + obj[d]](exp['get' + obj[d]]() + t);
			document.cookie = name + '=' + value + ';expires=' + exp;
			return exp;
		},

		//获取
		get: function(name, exp) {
			var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
			if (arr != null) return unescape(arr[2]);

			return null;
		},

		//删除
		del: function(name) {
			var exp = new Date();
			exp.setFullYear(exp.getFullYear() - 1);
			var cval = mycookie.get(name);
			if (cval != null) document.cookie = name + "=" + ";expires=" + exp;
		}

	}
	//渲染数据
	function RenderData(){
		
		
		//轮播图
		var focusBox=$('.contain .main .bannelFocus .focusBox');
		var zdyCarouselData=ZDYCarousel_data.ZDYCarousel;
		var str = '';
		$.each(zdyCarouselData,function(i,el){
			var zdyCarouselLi=$('<li>');
			zdyCarouselLi.addClass('swiper-slide');
			zdyCarouselLi.css({
				'background':el.background
			})
			str='<a href="'+el.href+'" target="_blank">'+
						'<img _src="'+el.src+'">'+
					'</a>';
			zdyCarouselLi.html(str)
			focusBox.append(zdyCarouselLi);
		})
		
		
		
		//tao实惠 tao新潮
		var taoBox=$('.contain .feature .featureBox');
		var taoLeftData=tao.left;
		$.each(taoLeftData,function(i,el){
			var str='';
			var taoLeftDiv=$('<div>');
			taoLeftDiv.addClass('box_l');
			str='<div class="title">'+
					'<h2>'+el.title.name+'</h2>'+
					'<span>'+el.title.subname+'</span>'+
				'</div>';
			str+='<div class="content">';
					str+='<a href="'+el.specialSale.link+'" target="_blank">'+
							'<img class="special" _src="'+el.specialSale.img+'" alt="今日特卖">'+
						'</a>';
					$.each(el.dash,function(j,el){
						str+='<a class="dash" href="'+el.link+'" target="_blank">'+
									'<img _src="'+el.img+'" alt="国美抢购">'+
							 '</a>';
					})
			str+='</div>';
			taoLeftDiv.html(str)
			taoBox.append(taoLeftDiv);
		})
		//tao品牌
		var taoRightData=tao.right;
		$.each(taoRightData,function(i,el){
			var str='';
			var taoRightDiv=$('<div>');
			taoRightDiv.addClass('box_r');
			str='<div class="title">'+
					'<h2>'+el.title.name+'</h2>'+
					'<span>'+el.title.subname+'</span>'+
				'</div>';
			str+='<div class="content">';
				str+='<div class="left">';
					$.each(el.dash,function(j,el){
						str+='<a class="dash" href="'+el.link+'" target="_blank">'+
									'<img _src="'+el.img+'" alt="国美抢购">'+
							 '</a>';
					})
				str+='</div>';
				str+='<div class="right">';
					$.each(el.recommendation,function(j,el){
						str+='<a class="dash" href="'+el.link+'" target="_blank">'+
									'<img _src="'+el.img+'" alt="国美抢购">'+
							 '</a>';
					})
				str+='</div>';
			str+='</div>';
			taoRightDiv.html(str)
			taoBox.append(taoRightDiv);
		})
		//领券中心
		var BringStockBox=$('.contain .BringStockCenter .mini .list');
		var BringStockData=BringStock.list;
		$.each(BringStockData,function(i,el){
			var str='';
			var BringStockLi=$('<li>');
			str='<a href="'+el.link+'" target="_blank">'+
					'<img _src="'+el.img+'">'+
				'</a>';
				
			BringStockLi.html(str);
			BringStockBox.append(BringStockLi);
			
		})
		var loveBox=$('.contain .love');
		var lovetitleData=love.title;
		var str='';
		str='<h2>'+lovetitleData.name+'</h2>'+
			'<span>'+lovetitleData.subname+'</span>'+
			'<div class="contentBtn">'+
				'<a href="javascript:;" class="preBtn"></a>'+
				'<a href="javascript:;" class="nextBtn"></a>'+
			'</div>';
		
		loveBox.find('.loveTitle').html(str); 
		
		var str='';
		var lovecontentData=love.content;
		var loveContent=$('<div>');
		loveContent.addClass('swiper-wrapper loveContent');
		$.each(lovecontentData.list,function(i){
			str+='<ul class="swiper-slide">';
					$.each(lovecontentData.list[i].shop,function(j,el){
						str+='<li>'+
								'<a href="view/details.html?id='+el.id+'">'+
										'<img _src="'+el.img+'">'+
										'<p class="title">'+el.name+'</p>'+
										'<p class="price">'+
											'<span class="yuan">¥</span>'+el.price.toFixed(2)+
										'</p>'+
									'</a>'+
							 '</li>';
					})
			str+='</ul>'
			loveContent.html(str)
			
		})
		
		loveBox.find('.loveContentBox').append(loveContent);
		
		
		//楼层商品
		var str='';
		var louBox=$('.contain .lou');
		var productDisplayData=lou.productDisplays;
		$.each(productDisplayData,function(i,el){
			var productDisplayDiv=$('<div>');
			productDisplayDiv.addClass('productDisplay');
			str='<div class="floor wbox clearContent">'+
					'<div class="floorBox">'+
						'<div class="title" style="border-bottom:1px solid'+el.title.color+'">'+
							'<div class="titleLeft">'+
								'<span class="h2_text">'+el.title.tit.floorNum+'F</span>'+
								'<h2>'+el.title.tit.name+'</h2>'+
							'</div>'+
							'<ul class="tab">';
								$.each(el.title.classify,function(j,el){
									if(j==0){
										str+='<li class="cur">'+
												'<a href="javascript:;">'+el.title+'</a>'+
											'</li>';
									}else{
										str+='<li>'+
												'<a href="javascript:;">'+el.title+'</a>'+
											'</li>';
									}
									
								})
								
								
						str+='</ul>'+
						'</div>';
						
						str+='<div class="content">'+
									'<div class="contentLeft" style="background:'+el.content.left.color+';">'+
										'<a href="'+el.content.left.link+'">'+
											'<img _src="'+el.content.left.img+'" alt="'+el.content.left.tit+'">'+
										'</a>';
									
							
							
										str+='<div class="keyAll">'+
													'<div class="channel">'+
														'<div class="channelBg" style="background:'+el.content.left.channelBg+';">'+
															'<ul class="channelList">'+
																'<li>';
																
																	$.each(el.content.left.channel,function(j,el){
																		str+='<a href="#" target="_blank">'+el.channelTitle+'</a>'+
																			'<span>/</span>';
																	})
																	

																str+='</li>'+
															'</ul>'+
														'</div>'+
													'</div>'+
													'<div class="keywords">';
															$.each(el.content.left.keywords,function(j){
																str+='<ul>';
																	$.each(el.content.left.keywords[j].list,function(k,el){
																		str+='<li>'+
																				'<a href="#" target="_blank">'+el.keywordsTitle+'</a>'+
																			'</li>';
																	})
																str+='</ul>';
															})
													str+='</div>'+
											'</div>'+
									'</div>';
									
									str+='<div class="contentRight">'+
												'<div class="contentRightMain">'+
													'<div class="swiper-container contentRightMainLeft">'+
														'<ul class="swiper-wrapper">';
																$.each(el.content.right.defaultWord.contentRightMainLeft.carouselShow,function(j,el){
																	str+='<li class="swiper-slide">'+
																			'<a href="'+el.link+'">'+
																				'<img _src="'+el.img+'">'+
																			'</a>'+
																		'</li>';
																	
																})
													str+='</ul>'+
														'<div class="contentRightMainLeftBtn">'+
															'<p class="contentRightMainLeftPreBtn">'+
																'<a href="javascript:;"></a>'+
																'<span class="prev"></span>'+
															'</p>'+
															'<p class="contentRightMainLeftNextBtn">'+
																'<a href="javascript:;"></a>'+
																'<span class="next"></span>'+
															'</p>'+
														'</div>'+
														'<div class="swiper-pagination switchover"></div>'+
														'<div class="swiper-container brandBoxContainer">'+
															'<div class="swiper-wrapper brand">';
															$.each(el.content.right.defaultWord.contentRightMainLeft.brand,function(j){
																str+='<ul class="swiper-slide">';
																		$.each(el.content.right.defaultWord.contentRightMainLeft.brand[j].brandlist,function(k,el){
																			str+='<li>'+
																					'<a href="#" target="_blank" title="Apple">'+
																						'<img src="'+el.img+'">'+
																					'</a>'+
																				'</li>';
																		})
																str+='</ul>';		
															})
															
														str+='</div>'+
														'</div>'+
													'</div>';
													
												str+='<div class="contentRightMainRight">'+
															'<ul class="inner">';
																$.each(el.content.right.defaultWord.contentRightMainRight.inner,function(j,el){
																	str+='<li>'+
																			'<a href="view/details.html?id='+el.id+'" target="_blank">'+
																				'<img _src="'+el.img+'" alt="'+el.title+'" title="">'+
																			'</a>'+
																		'</li>';
																})
														str+='</ul>'+
													 '</div>';
											str+='</div>';
											
											$.each(el.content.right.shop,function(j){
												str+='<div class="contentRightMain" style="display: none;">'+
															'<ul class="inner">';
																$.each(el.content.right.shop[j].inner,function(k,el){
																	str+='<li>'+
																			'<a href="view/details.html?id='+el.id+'" target="_blank">'+
																				'<img src="'+el.img+'">'+
																				'<p class="commodityName">'+el.commodityName+'</p>'+
																				'<p class="price">'+
																					'<span>¥</span>'+el.price.toFixed(2)+
																				'</p>'+
																			'</a>'+
																		'</li>';
																})
													   str+='</ul>'+
													'</div>';
											})
											
										str+= '</div>'+
									'</div>';
								
								
								
									
										$.each(el.advertising,function(j,el){	
											if(el.img&&el.link){
												str+='<ul class="wbox advertising">';
													str+='<li>'+
															'<a href="'+el.link+'">'+
																'<img _src="'+el.img+'">'+
															'</a>'+
														'</li>';
												str+='</ul>';
											}
										})
										
										
									
						str+='</div>'+
				'</div>'+
			'</div>';
			
				
			productDisplayDiv.html(str)
			louBox.append(productDisplayDiv)
		})
		
		//热销榜
		var str='';
		var hotBox=$('.contain .hot');
		var hotLeftData=ListOfSellLikeHotCakes.ListOfSellLikeLeft;
		var hotLeftDiv=$('<div>');
		hotLeftDiv.addClass('hotLeft');
		str='<div class="title">'+
				'<h2>'+hotLeftData.name+'</h2>'+
				'<span>'+hotLeftData.subname+'</span>'+
				'<a href="'+hotLeftData.more+'" class="more">'+
					'<b>更多好货</b>'+
					'<b class="arrow"></b>'+
				'</a>'+
			'</div>';
		str+='<div class="content">'+
					'<div class="firstStar">'+
						'<a href="view/details.html?id='+hotLeftData.firstStar.id+'">'+
							'<span></span>'+
							'<img _src="'+hotLeftData.firstStar.img+'">'+
							'<p class="starName">'+hotLeftData.firstStar.starName+'</p>'+
							'<p class="starPrice">'+
								'<b>¥</b>'+hotLeftData.firstStar.starPrice.toFixed(2)+
							'</p>'+
						'</a>'+
					'</div>';
					
					str+='<div class="hotList">'+
						'<ul>';
							$.each(hotLeftData.hotList,function(i,el){
								str+='<li>'+
										'<a href="view/details.html?id='+el.id+'">'+
											'<img _src="'+el.img+'">'+
											'<p class="hotName">'+el.hotName+'</p>'+
											'<p class="hotPrice">'+
												'<span>¥</span>'+el.hotPrice.toFixed(2)+
											'</p>'+
											'<b>'+el.ranking+'</b>'+
										'</a>'+
									'</li>';
							})
						
					str+='</ul>'+
					'</div>'+
			  '</div>';
			  
		hotLeftDiv.html(str)
		hotBox.append(hotLeftDiv);
		
		var str='';
		var hotRightData=ListOfSellLikeHotCakes.ListOfSellLikeRight;
		var hotRightDiv=$('<div>');
		hotRightDiv.addClass('hotRight');
		str='<div class="title">'+
				'<h2>'+hotRightData.name+'</h2>'+
				'<span>'+hotRightData.subname+'</span>'+
				'<div class="wrod">';
				
				$.each(hotRightData.wrod,function(i,el){
					str+='<a href="#" class="num">'+el.tit+'</a>';		
				})
			str+='</div>'+
		'</div>';
		str+='<div class="content">'+
				'<ul>';
					$.each(hotRightData.service,function(i,el){
						str+='<li>'+
								'<a href="view/details.html?id='+el.id+'" class="clearContent">'+
									'<div class="goodsLeft">'+
										'<img _src="'+el.img+'" alt="'+el.name+'">'+
										'<div class="houseSer">';
										$.each(hotRightData.service[i].houseSer,function(j,el){
											str+='<div class="lang">'+
													'<span class="point">'+el.point+'</span>'+
												'</div>';
										})
									str+='</div>'+
									'</div>'+
									'<div class="goodsRight">'+
										'<div class="title">'+el.name+
										'</div>'+
										'<div class="price">'+
											'<span>¥</span>'+
											'<span class="priceNumber">'+el.price.toFixed(2)+'</span>起'+
										'</div>'+
										'<div class="des">';
											$.each(hotRightData.service[i].des,function(j,el){
												str+='<span>'+el.tit+'</span>';
											})
									str+='</div>'+
									'</div>'+
								'</a>'+
							'</li>';
					})
			str+='</ul>'+
			'</div>';
		hotRightDiv.html(str)
		hotBox.append(hotRightDiv);
	}
	
	
	
	
	
	
	
	
	
	
	//进入首页时,先间隔3秒关闭遮罩

	function mask() {
		var mask = $('.mask');
		var layer = $('.layer');

		if (mycookie.get('IndexmaskClose') == null) {
			time = mycookie.set('IndexmaskClose', 'isClose', '1day');
			mask.show();
			layer.show();
			console.log(time)
			var timer = setTimeout(function() {
				mask.hide();
				layer.hide();
				clearTimeout(timer);
			}, 3000)
		}
		setTimeout(function() {
			mycookie.del('IndexmaskClose')
		}, 24 * 60 * 60 * 1000)
	}
	
	/* tab切换 */
	function tabs(){
		var productDisplays = $('.contain .productDisplay');
		productDisplays.each(function(i,el){
			
			var productDisplayTabLis=$(el).find('.floor .floorBox .title .tab>li');
			var productcontentRightMains=$(el).find('.floor .floorBox .content .contentRight .contentRightMain');
				productDisplayTabLis.bind({
					mouseenter:function(){
						$(this).addClass('cur').siblings('.floor .floorBox .title .tab>li').removeClass('cur');
						
						productcontentRightMains.eq($(this).index()).show().siblings().hide()
					}
				})
				

			
			
		})
	}
	
	//滚动监听
	function roll() {
		//顶部
		var stickNav = $('.stickNav');
		var searchBox = $('.head .searchBox');
		var sidecategory = $('.contain .sidecategory');
		var lisNav = $('.contain .sidecategory .lisNav');
		var sidecategorytitle = $('.contain .sidecategory>h2');
		var willRob = $('.contain .willRob');
		var searchTpis = $('.header .head .search .searchTpis');
		var willRobTop = willRob.offset().top;
		var onoff = true;
		
		$(window).scroll(function() {
			var scrTop = $(this).scrollTop();
			if (scrTop >= willRobTop) {
				stickNav.fadeIn();
				searchBox.addClass('searchBoxFixed');
				sidecategory.addClass('sidecategoryFixed');
				lisNav.css('top', '38px').hide();
				searchTpis.addClass('searchTpisFiexd');
				if (onoff) {
					sidecategorytitle.prepend('<span></span>');
					console.log()
					onoff = !onoff;
				}
				
				sidecategorytitle.bind('mouseenter',lisNavShow);
				sidecategory.bind('mouseleave',lisNavhide);
				function lisNavShow(){
					lisNav.show();
				}
				function lisNavhide(){
					lisNav.hide();
				}


			} else {
				sidecategorytitle.unbind('mouseenter',lisNavShow);
				sidecategory.unbind('mouseleave',lisNavhide);
				stickNav.fadeOut();
				searchBox.removeClass('searchBoxFixed');
				sidecategory.removeClass('sidecategoryFixed');
				lisNav.css('top', '41px').show();
				sidecategorytitle.find('span').remove();
				searchTpis.removeClass('searchTpisFiexd');
				onoff = true;
			}

		})
		//侧边
		var productDisplays = $('.contain .productDisplay');
		var elevator = $('.elevator');
		var elevatorlis = $('.elevator ul>li.handler');
		var elevatorgotoFllis = $('.elevator .gotoFl>li');
		var hot=$('.contain .hot');
		
		elevatorlis.each(function(){
			$(this).bind({
				click:function(){
					$(this).addClass('current').siblings('.elevator ul>li.handler').removeClass('current');
					 var ot =productDisplays.eq($(this).index()).offset().top - 200;
					 $(window).scrollTop(ot);
				}
			})
		})
		
		elevatorgotoFllis.eq(0).bind({
			click:function(){
				$(window).scrollTop(0)
			}
		})
		
		elevatorgotoFllis.eq(1).bind({
			click:function(){
				$(window).scrollTop($(document).height())
			}
		})
		
		$(window).scroll(function() {
			var iH = $(window).height();
			var footerTop=$('.footer').offset().top-$(document).scrollTop();
			
			var scrTop = $(this).scrollTop();
			
			if (scrTop >= (productDisplays.eq(0).offset().top - 270)&&footerTop>=iH-270) {
				$('.elevator').show();
			} else {
				$('.elevator').hide();
			}
			
			

			productDisplays.each(function(i, el) {

				var ot = $(el).offset().top - 270;

				if (scrTop >= ot) {

					elevatorlis.eq(i).addClass('current').siblings('.elevator ul>li.handler').removeClass('current');

				}
				

			});

		})
	}

	//关闭顶部广告
	function closeTopads() {
		var closeTopad = $('.topadBox .closeTopad');

		closeTopad.bind({
			click: function() {
				$(this).parents('.topadBox').remove();
			},
			mouseenter: function() {
				$(this).attr({
					style: 'background:rgba(109, 121, 129,.7)'
				})
				$(this).children('i').attr({
					style: 'background-position:-72px -466px'
				})
			},
			mouseleave: function() {
				$(this).removeAttr('style');
				$(this).children('i').removeAttr('style');
			}
		})
	}
	
	/* 头部购物车下拉菜单 */
	function headshopingCar(){
		var sideMeunList=$('.header .head .side .sideMeunList');
		sideMeunList.bind({
			mouseenter:function(){
				$(this).find('.shopingCar .carDropdownMenu').show();
			},
			mouseleave:function(){
				$(this).find('.shopingCar .carDropdownMenu').hide();
			}
		})
	}
	
	/* 底部扫一扫 */
	function qrcodeShow(){
		var qrcodes=$('.footer .footerBox .code');
		qrcodes.bind({
			mouseenter:function(){
				$(this).find('div').show();
			},
			mouseleave:function(){
				$(this).find('div').hide();
			}
		})
	}
	
	//美日必抢
	function willRobs(){
		
		
		var willRobcommodityData=willRobData.willRobcommodity;
		var laycontent=$('.contain .willRob .left .willRobMaincontentBox .content');
		
		$.each(willRobcommodityData,function(i){
			var str='';
			
			var willRobcommodityDiv = $('<div>');
			willRobcommodityDiv.addClass('swiper-slide lay');
			
			
			
				$.each(willRobcommodityData[i].shop,function(j,el){
								 str+='<div class="layLi">'+
								 		'<a href="#" target="_blank" title="'+willRobcommodityData[i].shop[j].layName+'">'+
								 			'<img _src="'+el.img+'" alt="'+el.layName+'" title="'+el.layName+'">'+
								 			'<div class="price">'+
								 				'<i>¥'+el.price+'</i>'+
								 				'<i class="del">¥'+el.del+'</i>'+
								 			'</div>'+
								 			'<p class="layName">'+el.layName+'</p>'+
								 		'</a>'+
								 	'</div>';
									willRobcommodityDiv.html(str);
									
									
				})
				laycontent.append(willRobcommodityDiv);
			
		})
		
		var willRobseckillData=willRobData.seckill;
		var seckillcontent=$('.contain .willRob .right');
		$.each(willRobseckillData,function(i){
			var str='';
			var seckillOa = $('<a>');
			seckillOa.attr('src',willRobseckillData[i].link);
			str='<img _src="'+willRobseckillData[i].img+'">';
			seckillOa.html(str)
			seckillcontent.append(seckillOa);
		})
	}
	
	
	//懒加载
	function loadImg(obj,m){
		
		var iH = $(window).height();
			var Tops=obj.offset().top-$(document).scrollTop();
			if(Tops<=iH){
				setTimeout(function(){
					var img=obj.find('img');
					
					img.each(function(i){
						if(!$(this).attr('src')){
							var s=$(this).attr('_src');
							$(this).attr('src',s);
							$(this).removeAttr('_src');
						}
					})
					
				},m)
			}
		
	}
	
	
	//轮播图
	function Carousel() {
		var promotionSide = new Swiper('.promotionSide', {
			direction: 'vertical', // 垂直切换选项
			loop: true, // 循环模式选项
			autoplay: {
				disableOnInteraction: false,
				delay: 3000,
			},
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper  
			navigation: {
				nextEl: '.SideBtnUp',
				prevEl: '.SideBtnDown',
			},
		})
		var willRobMaincontentBox = new Swiper('.willRobMaincontentBox', {
			effect: 'fade',
			loop: true, // 循环模式选项
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper  
			navigation: {
				nextEl: '.willRobMaincontentbtnRight',
				prevEl: '.willRobMaincontentbtnLeft',
				hide: true,
			}
		})

		var loveContentBox = new Swiper('.loveContentBox', {
			effect: 'fade',
			loop: true, // 循环模式选项
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper  
			navigation: {
				nextEl: '.preBtn',
				prevEl: '.nextBtn',
				hide: true,
			}
		})

		var contentRightMainLeft = new Swiper('.contentRightMainLeft', {
			effect: 'fade',
			loop: true, // 循环模式选项
			autoplay: {
				disableOnInteraction: false,
				delay: 3000,
			},
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper  
			navigation: {
				nextEl: '.contentRightMainLeftNextBtn',
				prevEl: '.contentRightMainLeftPreBtn',
				hide: false,
			},
			pagination: {
				el: '.switchover',
				bulletActiveClass: 'cur',
			}
		})

		var brandBoxContainer = new Swiper('.brandBoxContainer', {
			effect: 'fade',
			loop: true, // 循环模式选项
			autoplay: {
				disableOnInteraction: false,
				delay: 4000,
			},
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true //修改swiper的父元素时，自动初始化swiper  
		})
		var bannelFocuss = new Swiper('.bannelFocus', {
			effect: 'fade',
			loop: true, // 循环模式选项
			autoplay: {
				disableOnInteraction: false,
				delay: 3000,
			},
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper  
			navigation: {
				nextEl: '.focusSideBtnNext',
				prevEl: '.focusSideBtnPre',
				hide: false,
			},
			pagination: {
				el: '.bannelFocusmode',
				bulletActiveClass: 'cur',
			},
			
		})

		for(i=0;i<bannelFocuss.pagination.bullets.length;i++){
		  bannelFocuss.pagination.bullets[i].index=i;
		  bannelFocuss.pagination.bullets[i].onmouseenter=function(){
		    bannelFocuss.slideTo(this.index+1);
		  };
		}

	}
	//subNav
	
	RenderData();
	mask();
	tabs();
	roll();
	closeTopads();
	qrcodeShow();
	headshopingCar();
	willRobs();
	Carousel();
	RenderDataPublic();
	enterList();
	search();
	subNavs();
	bar();
	ShowShoppingCart();
	loadImg($('.willRob'),100);
	loadImg($('.main'),100);
	
	$(window).bind({
		scroll:function(){
			loadImg($('.feature'),100);
			loadImg($('.BringStockCenter'),100);
			loadImg($('.love'),100);
			loadImg($('.lou .productDisplay .floor'),100);
			loadImg($('.hot'),100);
		}
	})
})
