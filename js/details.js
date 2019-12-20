$(function(){
	//放大镜
	function jqzoom(){
		var jqzoom=$(".container .jqzoom");
		var jqzoomPup=$(".container .big .jqzoom .jqzoomPup");
		var zoomdiv=$(".container .big .zoomdiv");
		jqzoom.bind({
			mouseenter:function(e){
				jqzoomPup.show();
				zoomdiv.show();
				var l = e.pageX - $(this).offset().left - (jqzoomPup.width() / 2);
				var t = e.pageY - $(this).offset().top - (jqzoomPup.height() / 2);
				if (l <= 0) {
				    l = 0;
				}
				if (l >= $(this).width() - jqzoomPup.width()) {
				    l = $(this).width() - jqzoomPup.width();
				}
				if (t <= 0) {
				    t = 0;
				}
				if (t >= $(this).height() - jqzoomPup.height()) {
				    t = $(this).height() - jqzoomPup.height();
				}
						
				jqzoomPup.css({
				    "left": l,
				    "top": t
				})
		
			},
			mousemove:function(e){
				jqzoomPup.show();
				zoomdiv.show();
				var l = e.pageX - $(this).offset().left - (jqzoomPup.width() / 2);
				var t = e.pageY - $(this).offset().top - (jqzoomPup.height() / 2);
				if (l <= 0) {
				    l = 0;
				}
				if (l >= $(this).width() - jqzoomPup.width()) {
				    l = $(this).width() - jqzoomPup.width();
				}
				if (t <= 0) {
				    t = 0;
				}
				if (t >= $(this).height() - jqzoomPup.height()) {
				    t = $(this).height() - jqzoomPup.height();
				}
						
				jqzoomPup.css({
				    "left": l,
				    "top": t
				})
				var pX = l / ($(this).width() - jqzoomPup.width());
				var pY = t / ($(this).height() - jqzoomPup.height());
				$(".zoomdiv img").css({
				    "left": -pX * ($(".zoomdiv img").width() - zoomdiv.width()),
				    "top": -pY * ($(".zoomdiv img").height() - zoomdiv.height())
				})
			},
			mouseleave:function(){
				jqzoomPup.hide();
				zoomdiv.hide();
			}
		})
		
	}
	
	function AccessStorage(){
		var id = window.location.search.split('=')[1];
		var commodityDetailsData=commodityDetails.docs;
		var obj = commodityDetailsData.filter(function(data){
				return data.tradeItemId == id;
			})[0]

		
		var commodityDetailsImg=$('.contain .container .firstscreenLeft .magnifier .big img');
		var commodityDetailsName=$('.contain .container .firstscreenCenter .hgroup>h1');
		var commodityDetailsdescribe=$('.contain .container .firstscreenCenter .hgroup>h4');
		var commodityDetailsProPrice=$('.contain .container .firstscreenCenter .price .box .right .prdPrice em');
		var commodityDetailsReduce=$('.contain .container .firstscreenCenter .price .box .right .reduce');
		var commodityDetailsfeature=$('.contain .container .firstscreenCenter .properties .prdPropertiesOne .tese .right');
		var commodityDetailshasstock=$('.contain .container .firstscreenCenter .properties .prdPropertiesOne .sendTo .right .hint .hasstock');
		var commodityDetailsfreeShipping=$('.contain .container .firstscreenCenter .properties .prdPropertiesOne .sendTo .right .hint .zhichi>a');
		var commodityDetailsfacilitator=$('.contain .container .firstscreenCenter .properties .prdPropertiesOne .service .right .serviceBable .facilitator');
		var commodityDetailsaddCar=$('.contain .container .firstscreenCenter .buttons .addShoppingCartBtn');
		var commodityDetailstagesBtn=$('.contain .container .firstscreenCenter .buttons .stagesBtn');
		var commodityDetailsmobtn=$('.contain .container .firstscreenCenter .buttons .mobtn');
		var commodityDetailsquantityWrapper=$('.contain .container .firstscreenCenter .buttons .wrapper');
		commodityDetailsImg.each(function(i,el){
			el.src=obj.img;
		})
		commodityDetailsName.text(obj.name);
		commodityDetailsdescribe.text(obj.describe);
		commodityDetailsProPrice.before(obj.Price.toFixed(2))
		commodityDetailsHaocnt=$('#haocnt');
		commodityDetailsHaocnt.text(obj.degreePraise);
		commodityDetailsPincnt=$('#pincnt');
		commodityDetailsPincnt.text(obj.pincntNum);
		commodityDetailsfacilitator.text(obj.facilitator);
		commodityDetailsquantityWrapper.find('.quantity').val(obj.shippingNum);
		if(obj.isReducedPrice==true){
			commodityDetailsReduce.text('降价通知')
		}
		if(obj.yijiuhuanxin==true){
			commodityDetailsfeature.find('.yijiuhuanxin').show();
		}else{
			commodityDetailsfeature.find('.yijiuhuanxin').hide();
		}
		if(obj.baina==true){
			commodityDetailsfeature.find('.baina').show();
		}else{
			commodityDetailsfeature.find('.baina').hide();
		}
		if(obj.steward==true){
			commodityDetailsfeature.find('.steward').show();
		}else{
			commodityDetailsfeature.find('.steward').hide();
		}
		if(obj.ishasstock==true){
			commodityDetailshasstock.text('有货');
			commodityDetailsquantityWrapper.find('.puls').bind({
				click:function(){
					commodityDetailsquantityWrapper.find('.quantity').val(parseInt(commodityDetailsquantityWrapper.find('.quantity').val())+1);
					if(commodityDetailsquantityWrapper.find('.quantity').val()>1){
						commodityDetailsquantityWrapper.find('.minus').removeClass('disable');
					}
				}
			})
			commodityDetailsquantityWrapper.find('.minus').bind({
				click:function(){
					if((commodityDetailsquantityWrapper.find('.quantity').val()-1)>=1){
						commodityDetailsquantityWrapper.find('.quantity').val(parseInt(commodityDetailsquantityWrapper.find('.quantity').val())-1)
					}else{
						commodityDetailsquantityWrapper.find('.minus').addClass('disable');
					}
				}
			})
			commodityDetailsquantityWrapper.find('.quantity').bind({
				input:function(){
					if($(this).val()>1){
						commodityDetailsquantityWrapper.find('.minus').removeClass('disable');
					}else{
						commodityDetailsquantityWrapper.find('.minus').addClass('disable');
					}
					if(/[^\d]/.test($(this).val())){
						var temp=$(this).val().replace(/[^\d]/g,'');
						$(this).val(temp);
					}
				},
				blur:function(){
					if($(this).val()==''||$(this).val()==0){
						$(this).val(1);
					}
				},
				focus:function(){
					$(this).val('');
				}
			})
			commodityDetailsaddCar.bind({
				click:function(){
					obj.shippingNum=commodityDetailsquantityWrapper.find('.quantity').val();
					var shippingListArr = storage.get('shippingList');
					if(shippingListArr.length){
						var newShippingListArr=	JSON.parse(localStorage.getItem('shippingList'));
						var onoff = newShippingListArr.some(function(data){
							
							return data.tradeItemId == obj.tradeItemId;
						})
						if(onoff){
							var index=null;
							for(var i=0;i<newShippingListArr.length;i++){
								if(newShippingListArr[i].tradeItemId == obj.tradeItemId){
									index = i;
								}
							}
							newShippingListArr[index].shippingNum = parseInt(newShippingListArr[index].shippingNum)+parseInt(obj.shippingNum);
						}else{
							newShippingListArr.push(obj);
						}
						
						window.localStorage.setItem('shippingList',JSON.stringify(newShippingListArr));
						window.location.href='shoppingCart.html';
						
					}else{
						shippingListArr.push(obj);
						storage.set('shippingList',shippingListArr);
						window.location.href='shoppingCart.html';
					}
				}
			})
			
		}else{
			commodityDetailshasstock.text('无货');
			commodityDetailsaddCar.css({
				'background':'#ccc',
				 'cursor':'not-allowed'
			})
			commodityDetailsquantityWrapper.find('.quantity').attr('disabled','disabled');
			commodityDetailsquantityWrapper.find('.puls').css({
				'color':'#ccc',
				 'cursor':'not-allowed'
			})
			commodityDetailstagesBtn.hide();
			commodityDetailsmobtn.hide();
		}
		if(obj.isfreeShipping==true){
			commodityDetailsfreeShipping.before('支持');
		}else{
			commodityDetailsfreeShipping.before('不支持');
		}
	}
	AccessStorage();
	//轮播图
	function Carousel(){
		var carousel = new Swiper('.carousel', {
			pagination: {
			    el: '.carouselPager',
				bulletActiveClass: 'active'
			}
		})
		
		var andBuyOut = new Swiper('.andBuyOut', {
			loop: true, // 循环模式选项
			navigation: {
				nextEl: '.refreshBtn',
			}
		})
		var cont = new Swiper('.OtherSimilarcont', {
			loop: true, // 循环模式选项
			navigation: {
				nextEl: '.infopreBtn',
				prevEl: '.infonextBtn',
			}
		})
		for(i=0;i<carousel.pagination.bullets.length;i++){
		  carousel.pagination.bullets[i].index=i
		  carousel.pagination.bullets[i].onmouseover=function(){
		    carousel.slideTo(this.index);
		  };
		}

	}
	
	function pullDown(){
		var sidecategory = $('.contain .sidecategory');
		var sidecategorytitle = $('.contain .sidecategory>h2');
		var lisNav = $('.contain .sidecategory .lisNav');
		sidecategorytitle.bind('mouseenter',function(){
			lisNav.show();
		});
		sidecategory.bind('mouseleave',function(){
			lisNav.hide();
		});
	}

	/* tab切换 */
	function tabs(){
		var prdtitLi=$('.contain .info .main .pdtlTab .prdtitbox>li');
		var prdtitLiContent=$('.contain .info .main .pdMainBox>li');
		var proApprobated=$('.contain .info .main .proApprobated');
		var appraiseDetailBox=$('.contain .info .main .appraiseDetailBox');
		var praiseGoodslis=$('.contain .info .main .praiseGoods .praiseGoodsLists .waterfall .waterfallUl>li');
		var pdtlTab=$('.contain .info .main .proDesc .pdtlTab');
		var pdtlTabTop=pdtlTab.offset().top;
		$.each(praiseGoodslis,function(i){
			if(i%4==0){
				praiseGoodslis.eq(i).css({
					'marginLeft':'0px'
				})
			}
		})
		
		prdtitLi.bind({
			click:function(){
				$(this).addClass('cur').siblings('.contain .info .main .pdtlTab .prdtitbox>li').removeClass('cur');
				prdtitLiContent.eq($(this).index('.contain .info .main .pdtlTab .prdtitbox>li')).show().siblings().hide();
				$(window).scrollTop(pdtlTabTop)
			}
		})
		prdtitLi.eq(0).bind({
			click:function(){
				proApprobated.show();
				appraiseDetailBox.show();
			}
		})
		prdtitLi.eq(1).bind({
			click:function(){
				proApprobated.show();
				appraiseDetailBox.show();
			}
		})
		prdtitLi.eq(2).bind({
			click:function(){
				proApprobated.hide();
				appraiseDetailBox.show();
			}
		})
		prdtitLi.eq(3).bind({
			click:function(){
				proApprobated.show();
				appraiseDetailBox.show();
			}
		})
		prdtitLi.eq(4).bind({
			click:function(){
				proApprobated.show();
				appraiseDetailBox.show();
			}
		})
		prdtitLi.eq(5).bind({
			click:function(){
				proApprobated.hide();
				appraiseDetailBox.hide();
			}
		})
	}
	
	
	/* 滚动监听 */
	function roll() {
		var storesTitle=$('.contain .info .stores>h2');
		var pdtlTab=$('.contain .info .main .proDesc .pdtlTab');
		var minichart=$('.contain .info .main .proDesc .pdtlTab .minichart');
		var pdtlTabTop=pdtlTab.offset().top;
		$(window).scroll(function() {
			var scrTop = $(this).scrollTop();
			if (scrTop >= pdtlTabTop) {
				pdtlTab.addClass('pdtlTabFixed').addClass('fiexStyle');
				storesTitle.addClass('pdtlTabFixed').addClass('fiexStyle');
				minichart.show();
			} else {
				pdtlTab.removeClass('pdtlTabFixed').removeClass('fiexStyle');
				storesTitle.removeClass('pdtlTabFixed').removeClass('fiexStyle');
				minichart.hide();
			}
		})
	}
	roll();
	jqzoom();
	Carousel();
	pullDown();
	tabs();
	RenderDataPublic();
	enterList();
	search();
	subNavs();
	bar();
	ShowShoppingCart();
	CartSelectPs();
})