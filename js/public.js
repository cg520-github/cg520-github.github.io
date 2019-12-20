
	function RenderDataPublic(){
		//nav 国美会员
		var str='';
		var gomeiUser=$('.header .nav .content .leftList .gomeiUser');
		var gomeiUserData = navData.gomeiUser;
		var gomeiUserDropdown=$('<div>');
		gomeiUserDropdown.addClass('dropdown');	
		str='<div class="userName">' +
				'<i></i>' +
				'<div>' +
					'<p class="userNameLogin">' + gomeiUserData.title + '，<a href="">' + gomeiUserData.loginTitle +'</a></p>' +
				'</div>'+
			'</div>';
			
		str+='<div class="userIcon">' +
				'<p>' +
					'<a href="' + gomeiUserData.privilege.clubTileLink + '" target="_blank">' + gomeiUserData.privilege.clubTile +'</a>' +
					'<span></span>我的特权' +
				'</p>' +
				'<a class="userIconPrev"></a>' +
				'<a class="userIconNext"></a>';
			str+='<div>' +
					'<ul>';
						$.each(gomeiUserData.privilege.list,function(i,el){
							str += '<li>' +
										'<a href="#" target="_blank">' +
										'<i class="gm-icon">' + el.gmIcon + '</i>' + el.gmIconTitle +
										'</a>' +
								   '</li>';
						})
						
			str+='</ul>' +
				'</div>'+
			'</div>';
			
		gomeiUserDropdown.html(str);
		gomeiUser.append(gomeiUserDropdown);
		
		//nav 我的国美
		var myGome = $('.header .nav .content .rightList .myGome');
		var myGomeData = navData.myGome;
		var myGomeDropdown=$('<div>');
		myGomeDropdown.addClass('dropdown');	
		var str='';
		str='<strong>' + myGomeData.title + 
				'，<a href="' + myGomeData.loginLink + '">' + myGomeData.loginTitle +'</a>'+
			'</strong>';
			
		str+='<ul class="order">';
				$.each(navData.myGome.order,function(i,el){
					str += '<li><a href="' + el.link + '" >' + el.name + '</a></li>';
				})
		str += '</ul>';
			
		str += '<ul class="coupon">' +
					'<li>'+
						'<a href="#">' + myGomeData.discountCoupon.name + '</a>'+
						'<span>-</span>'+
					'</li>' +
				'</ul>';
		
		str += '<p>' + navData.myGome.footprint.name + '</p>';
		str += '<ul class="track">';
					$.each(navData.myGome.footprint.list,function(i,el){
						str += '<li style="background:' + el.url + '"></li>';
					})
		str += '</ul>';
		
		
		myGomeDropdown.html(str);
		myGome.append(myGomeDropdown);
		
		//nav 服务中心
		var serviceCentre=$('.header .nav .content .rightList .serviceCentre');
		var serviceCentreData = navData.call;
		var serviceCentreDropdown=$('<div>');
		serviceCentreDropdown.addClass('dropdown');
		var str = '';
		$.each(serviceCentreData,function(i,el){
			str += '<p><a href="#">' + el.name + '</a></p>';
			str += '<ul>';
			for (var j = 0; j < el.Service.length; j++) {
			
				str += '<li>'+
							'<a href="' + el.Service[j].link + '">' + el.Service[j].serviceName + '</a>'+
						'</li>';
			
			}
			str += '</ul>';
		})
		serviceCentreDropdown.html(str)
		serviceCentre.append(serviceCentreDropdown);
		
		//nav 网站导航
		var siteMap=$('.header .nav .content .rightList .siteMap');
		var siteMapData = navData.siteMap;;
		var siteMapDataDropdown=$('<div>');
		siteMapDataDropdown.addClass('dropdown');
		var str = '';
		$.each(siteMapData,function(i,el){
			str += '<dl>';
				str += '<dt>' + el.name + '</dt>';
					str += '<dd>';
						for (var j = 0; j < el.content.length; j++) {
							str += '<ul>';
								for (var k = 0; k < el.content[j].list.length; k++) {
									str += '<li>' +
										'<a href="">' + el.content[j].list[k].title + '</a>';
									if (el.content[j].list[k].hot) {
										str += '<i class="' + el.content[j].list[k].hot + '"></i>'
									}
									if (el.content[j].list[k].news) {
										str += '<i class="' + el.content[j].list[k].news + '"></i>'
									}
									str += '</li>';
								}
							str += '</ul>';
						}
					str += '</dd>';
			str += '</dl>';
		})
		
		siteMapDataDropdown.html(str)
		siteMap.append(siteMapDataDropdown);
		
		//搜索组合框
		var searchDropdown=$('.header .head .searchBox .searchDropdown');
		var searchTypeList=$('.header .head .searchBox .searchTypeList');
		var searchTypeDate = headData.search.list;
		var str = '';
		$.each(searchTypeDate,function(i,el){
			str += '<li class="searchTypeItem" data-type="' + el.type + '">' + el.text + '</li>'
		})
		searchTypeList.html(str);
		
		
		//商品分类
		var categorynavUl=$('.contain .category .categoryBox .sidecategory .lisNav .lisnavUl');
		var str = '';
		$.each(categoryData,function(i){
			var categorynavUlLis=$('<li>');
			str='<h3>';
			$.each(categoryData[i].title.Maxtype,function(j){
				str+='<a href="'+categoryData[i].title.Maxtype[j].link+'" target="_blank">'+categoryData[i].title.Maxtype[j].name+'</a>';
			})
			str+='</h3>';
			categorynavUlLis.html(str)
			categorynavUl.append(categorynavUlLis);
		})
		var categorynavUlLis=categorynavUl.find('>li');
		var syncItemLeft=$('.contain .category .categoryBox .sidecategory .lisNav .subNav .sync .syncItemBox .syncItemLeft');
		var syncItemRight=$('.contain .category .categoryBox .sidecategory .lisNav .subNav .sync .syncItemBox .syncItemRight');
		var syncItemRightbrandBox=$('.contain .category .categoryBox .sidecategory .lisNav .subNav .sync .syncItemBox .syncItemRight .brandBox');
		var categoryLisNavMinTitle=$('<div>');
		categoryLisNavMinTitle.addClass('title');
		var categoryLisNavContentBox=$('<div>');
		categoryLisNavContentBox.addClass('contentBox');
		var categoryLisNavbrandBox=$('<div>');
		categoryLisNavbrandBox.addClass('brand');
		var categoryImg=$('<a>');
		categoryImg.addClass('categoryImg');
		categorynavUlLis.each(function(i,el){
			$(this).bind({
				mouseenter:function(){
					var categoryLisNavData=categoryData[i].content;
					//subnav
					var str='';
					$.each(categoryLisNavData.minTitle,function(j,el){
						
						str+='<a href="#" target="_blank" title="'+el.name+'">'+
								el.name+
								'<i></i>'+
							'</a>';
						
					})
					categoryLisNavMinTitle.html(str);
		
					//左侧
					var str2='';
					$.each(categoryLisNavData.type,function(k,el){
						str2+='<div class="content">'+
									'<div class="contentList">'+
										'<div class="contentTitle">'+
											el.name+
										'</div>'+
										'<div class="list">';
										
										$.each(el.typeInfo,function(o){
												if(el.typeInfo[o].hot){
													str2+='<a href="'+el.typeInfo[o].link+'" target="_blank" title="'+el.typeInfo[o].name+'" class="hot">'+el.typeInfo[o].name+'</a>';
												}else{
													str2+='<a href="'+el.typeInfo[o].link+'" target="_blank" title="'+el.typeInfo[o].name+'">'+el.typeInfo[o].name+'</a>';
												}
												
										})
											
						str2+='</div>'+
								'</div>';
						
					})
					categoryLisNavContentBox.html(str2)
					
					//右侧
					var str3='';
					$.each(categoryLisNavData.brand,function(f,el){
						str3+='<a href="#" target="_blank" title="'+el.title+'">'+
								'<img src="'+el.img+'">'+
							 '</a>';
					})
					categoryLisNavbrandBox.html(str3);
					
					
					var str4='';
					str4+='<img src="'+categoryLisNavData.categoryImg+'">';
					categoryImg.html(str4);
				}
			})
			
			syncItemLeft.append(categoryLisNavMinTitle);
			syncItemLeft.append(categoryLisNavContentBox);
			syncItemRightbrandBox.append(categoryLisNavbrandBox);
			syncItemRightbrandBox.append(categoryImg);
		})
	}
	
	//nav 下拉列表
	function enterList(){
		
		function ListDropdown(obj){
			obj.children('li').each(function(i){
				var ListDropdown=$(this).find('.dropdown');
				var ListB=$(this).find('b');
				if (!ListDropdown) {
					return;
				}
				$(this).bind({
					mouseenter:function(){
						ListB.css({
							'border':'1px solid #ccc',
							'background':'#fff',
							'borderBottom':'1px solid #fff'
						})
						ListDropdown.css({
							'height':'auto',
							'border':'1px solid #ccc'
						})
					},
					mouseleave:function(){
						ListB.css({
							'border':'1px solid #f8f8f8',
							'background':'',
							'borderBottom':'none'
						})
						ListDropdown.css({
							'height':'0px',
							'border':'none'
						})
					}
				})
			})
		}
		var leftList=$('.header .nav .content .leftList');
		var rightList=$('.header .nav .content .rightList');
		ListDropdown(leftList);
		ListDropdown(rightList);
	}
	//搜索框
	function search(index){
		var searchDropdown=$('.header .head .search .searchBox .searchDropdown');
		var searchType=$('.header .head .search .searchBox .searchType');
		var searchTypeList=$('.header .head .search .searchBox .searchTypeList');
		var searchTpis = $('.header .head .search .searchTpis');
		var selected = searchType.find('.selected');
		var keyLabel = $('.header .head .search .searchBox .keyLabel');
		var text = $('.header .head .search .searchBox .searchInput');
		var searchTypeListContent=$('.header .head .search .searchTpis .searchTpisList');
		var closeSearch = $('.header .head .search .searchTpis .closeSearch');
		var search=$('.header .head .search');
		function seachTypes(textType){
			if (text.val() == '') {
				searchTpis.hide()
			}
			var serachData =  headData.search[textType].list[text.val()];
			if(!serachData){
				searchTpis.hide();
				closeSearch.eq(0).hide();
				return;
			}
			searchTpis.show();
			closeSearch.eq(0).show();
			str='';
			$.each(serachData,function(i,el){
				str += '<li>' +
						'<a class="akeyword" href="javascript:void(0);">' +
						'<span class="fl spName">' + el.title + '</span>' +
						'<span class="fr">约' + el.total + '条</span>' +
						'</a>' +
						'</li>';
			})
			str += '<li>' +
							'<a href="javascript:void(0);">' +
							'<i></i>' +
							'<span class="lookFor">找“' + text.val() + '</span>' +
							'<em class="keyword"></em>' +
							'<span class="spCorrelation">”相关'+headData.search[textType].types+'</span>' +
							'</a>' +
							'</li>';
				
			
			searchTypeListContent.html(str);
			var akeyword=searchTypeListContent.find('.akeyword');
			akeyword.bind({
				click:function(){
					text.val($(this).find('.spName').text());
					searchTpis.hide();
				}
			})
			
		
		}
		searchType.bind({
			mouseenter:function(){
				searchTypeList.show();
				searchTpis.hide();
			}
		})
		searchDropdown.bind({
			mouseleave:function(){
				searchTypeList.hide();
			}
		});
		
		var selectedSelect='commodity';
		text.bind({
			focus:function(){
				keyLabel.hide();
				seachTypes(selectedSelect);
			},
			input:function(){
				seachTypes(selectedSelect);
			},
			blur:function(){
				if($(this).val()==''){
					keyLabel.show();
				}
				
			}
		
		})
		
		search.bind({
			mouseleave:function(){
				searchTpis.hide();
				text.blur();
			}
		})
		
		searchTypeList.children('li').each(function(i){
			$(this).bind({
				click:function(){
					text.val('');
					selected.text($(this).text());
					selectedSelect=$(this).attr('data-type');
					searchTypeList.hide();
				}
			})
		})
		
		
			
		
	}
	
	//subnav
	function subNavs(){
		var categorySubNavs=$('.contain .category .categoryBox .sidecategory .lisNav .subNav');
		var categorynavLis=$('.contain .category .categoryBox .sidecategory .lisNav .lisnavUl>li');
		var categoryLisNav=$('.contain .category .categoryBox .sidecategory .lisNav');
		
		
		categorynavLis.bind({
			mouseenter:function(){
				$(this).css('background','#fbfbfb').siblings('.contain .category .categoryBox .sidecategory .lisNav .lisnavUl>li').css('background','');
				$(this).find('>h3>a').css('color','#212121');
				$(this).siblings('.contain .category .categoryBox .sidecategory .lisNav .lisnavUl>li').find('>h3>a').css('color','');
			}
		})
		categorynavLis.find('>h3>a').bind({
			mouseenter:function(){
				$(this).css('color','#E3101E')
			},
			mouseleave:function(){
				$(this).css('color','#212121')
			}
		})
		
		categoryLisNav.bind({
			mouseenter:function(){
				categorySubNavs.show();
			},
			mouseleave:function(){
				categorySubNavs.hide();
				categorynavLis.css('background','');
				categorynavLis.find('>h3>a').css('color','');
			}
		})
		
		
	}
	
	function bar(){
		var barAsideLis=$('.bar .aside ul>li');
		barAsideLis.bind({
			mouseenter:function(){
				$(this).find('>div').css({
					'right':'35px',
					'transform':' translate(0px, 0px)',
					'transition': 'all 0.2s ease-out 0s'
				})
				$(this).find('>b').show();
			},
			mouseleave:function(){
				$(this).find('>div').css({
					'right':'0px',
					'transform':' translate(110%, 0px)',
					'transition': 'all 0.2s ease-out 0s'
				})
				$(this).find('>b').hide();
			}
			
		})


		var barBorderLis=$('.bar .barBorder ul>li:not(.cart)');
		barBorderLis.bind({
			mouseenter:function(){
				$(this).find('.tip').css({
					'right':'35px',
					'transform':' translate(0px, 0px)',
					'transition': 'all 0.2s ease-out 0s'
				})
				$(this).find('>b').show();
			},
			mouseleave:function(){
				$(this).find('.tip').css({
					'right':'0px',
					'transform':' translate(110%, 0px)',
					'transition': 'all 0.2s ease-out 0s'
				})
				$(this).find('>b').hide();
			}
		})
		var Storeshoppingclose=$('.shoppingCartContent .member>h3>.close');
		Storeshoppingclose.bind({
			click:function(){
				shoppingCartContent.animate({
					width: 'toggle',
				})
				barBorderCar.find('>b').eq(0).hide()
			}
		})
		var barBorderCar=$('.bar .barBorder ul .cart');
		var shoppingCartContent=$('.shoppingCartContent');
		barBorderCar.bind({
			click:function(){
				$(this).find('>b').eq(0).toggle();
				shoppingCartContent.animate({
					width: 'toggle',
				})
			}
		})
	}
	
	function ShowShoppingCart(){
		var huod=$('.shoppingCartContent .member .carContent .miniProducts .miniProductList .miniProductLi .huod');
		var hdrcartitle=$('.shoppingCartContent .member .carContent .miniProducts .hdrcartitle');
		var StoreFooter=$('.shoppingCartContent .member .carContent .miniProducts .StoreFooter');
		var addshoppingArr= storage.get('shippingList');
		var barCarNum=$('.bar .barBorder ul>.cart .carNum');
		if(addshoppingArr.length){
			StoreFooter.show();
			hdrcartitle.text('最近加入的商品：');
			var str='';
			var num = 0;
			var arrNum=[];
			
			$.each(addshoppingArr,function(i,el){
				var huodDd=$('<dd>');
				huodDd.attr('tradeitemid',el.tradeItemId);
				huodDd.addClass('miniHuodList clearContent');
				str='<div class="miniProductInfo clearContent">'+
							'<div class="miniPColImg">'+
								'<a href="#">'+
									'<img alt="" src="'+el.img+'">'+
								'</a>'+
							'</div>'+
							'<div class="miniPColName">'+
								'<p>'+
									'<a class="nMinCartBlue" href="#">'+el.name+'</a>'+
								'</p>'+
							'</div>'+
							'<div class="miniPColRow">'+
								'<span class="yuan">'+
									'<b>¥'+el.Price+'</b>'+
								'</span>'+
								'<span class="quantity">'+el.shippingNum+'</span>'+
								'<span class="mcartCount">'+
									'<a href="javascript:;" class="countBtn countSub countDisabled">-</a>'+
									'<a href="javascript:;" class="countBtn countAdd">+</a>'+
									'<div class="countInput">'+
										'<input  name="num" type="text" value="'+el.shippingNum+'">'+
									'</div>'+
								'</span>'+
								'<a href="javascript:;" class="delBtn">删除</a>'+
							'</div>'+
			
						'</div>';
				arrNum.push(el.Price*el.shippingNum);	
				huodDd.html(str);
				huod.append(huodDd);
				
			})
			
			var delShoppingBtn=huod.find('.miniProductInfo .miniPColRow .delBtn');
			delShoppingBtn.bind({
				click:function(){
					num=0;
					var id=$(this).parent().parent().parent().attr('tradeItemId');
					$(this).parent().parent().parent().remove();

					var index=null;
					$.each(addshoppingArr,function(i,el){
						if(el.tradeItemId==parseInt(id)){
							index=i;
						}
					})
					
					arrNum.splice(index,1);
					
					$.each(arrNum,function(j,el){
						num +=el;
					})
					addshoppingArr.splice(index,1);
					storage.set('shippingList',addshoppingArr);
					StoreFooter.find('.csSubtotal').text('¥'+num);
					barCarNum.find('s').text(addshoppingArr.length);
					StoreFooter.find('.csQuantity').text(addshoppingArr.length);
					if(addshoppingArr.length){
						StoreFooter.show();
						barCarNum.css({
							'background':'#E3101E'
						})
						barCarNum.find('.point').css({
							'backgroundPosition':'0 -1095px'
						})
						hdrcartitle.text('最近加入的商品：');
					}else{
						barCarNum.css({
							'background':'rgb(165, 165, 165)'
						})
						barCarNum.find('.point').css({
							'backgroundPosition':'0 -1087px'
						})
						hdrcartitle.html('<a href="../../gome/view/shoppingCart.html" title="去购物车">购物车</a> 中还没有商品，赶紧选购吧！');
						StoreFooter.hide();
					}
				}
			})
			$.each(arrNum,function(i,el){
				num +=el;
			})
			StoreFooter.find('.csSubtotal').text('¥'+num);
			StoreFooter.find('.csQuantity').text(addshoppingArr.length);
			barCarNum.find('s').text(addshoppingArr.length);
			barCarNum.css({
				'background':'#E3101E'
			})
			barCarNum.find('.point').css({
				'backgroundPosition':'0 -1095px'
			})
		}else{
			hdrcartitle.html('<a href="../../gome/view/shoppingCart.html" title="去购物车">购物车</a> 中还没有商品，赶紧选购吧！');
			StoreFooter.hide();
			
		}
		
		
	}
	
//配送至..
	function CartSelectPs(){
		var regon=$('.city .regon');
		var selectoA=$('.city .regon .gCity .select a');
		var codeS=null;
		var country=null;
		regon.find('.stockaddress').bind({
			click:function(){
				$('.gCity').toggle();
			}
		})
		var bctBox=regon.find('.gCity .cityMBox .bctBox');
		selectoA.each(function(i,el){
			if(i==0){
				$(el).bind({
					click:function(){
						bctBox.eq(0).show().siblings('.bctBox').hide();
						selectoA.eq(0).addClass('cur').siblings('a').removeClass('cur');
					}
				})
				var str='';
				var sheng=ChineseDistricts[86];
				for(var attr in sheng){
					for(var k in sheng[attr]){
						str+='<span class="'+sheng[attr][k].code+'">'+
								'<a href="javascript:;">'+sheng[attr][k].address+'</a>'+
							'</span>';
					}
				}
				bctBox.eq(0).html(str);
				
				var shengOspan=bctBox.eq(0).find('span');
				
				shengOspan.bind({
					click:function(){
						selectoA.eq(i).find('>b').text($(this).find('a').text());
						bctBox.eq(0).hide();
						
						selectoA.eq(0).removeClass('cur');
						selectoA.eq(1).addClass('cur');
						codeS=$(this).attr('class');
						setCity();
					}
				})
			}
			if(i==1){
				$(el).bind({
					click:function(){
						bctBox.eq(1).show().siblings('.bctBox').hide();
						selectoA.eq(1).addClass('cur').siblings('a').removeClass('cur');
					}
				})
				
			}
			if(i==2){
				$(el).bind({
					click:function(){
						bctBox.eq(2).show().siblings('.bctBox').hide();
						selectoA.eq(2).addClass('cur').siblings('a').removeClass('cur');
					}
				})
			}
			
		})
		
		function setCity(){
			bctBox.eq(1).show();
			var cityAll=ChineseDistricts[codeS];
			var str='';
			var num=0;
			for(var attr in cityAll){
				num++;
				//console.log(cityAll[attr])
				str+='<span class="'+attr+'">'+
						'<a href="javascript:;">'+cityAll[attr]+'</a>'+
					'</span>';
				if(num==1){
					selectoA.eq(1).find('>b').text(cityAll[attr]);
				}
			}
			bctBox.eq(1).html(str);
			var CitylisOspan=bctBox.eq(1).find('span');
			
			CitylisOspan.bind({
				click:function(){

					selectoA.eq(1).find('>b').text($(this).find('a').text());
					bctBox.eq(1).hide();
					
					selectoA.eq(1).removeClass('cur');
					selectoA.eq(2).addClass('cur');
					country=$(this).attr('class');
					setCountry();
				}
			})
		}
		
		function setCountry(){
			bctBox.eq(2).show();
			var countryAll=ChineseDistricts[country]
			var str='';
			var num=0;
			for(var attr in countryAll){
				num++;
				//console.log(cityAll[attr])
				str+='<span class="'+attr+'">'+
						'<a href="javascript:;">'+countryAll[attr]+'</a>'+
					'</span>';
				if(num==1){
					selectoA.eq(2).find('>b').text(countryAll[attr]);
				}
			}
			bctBox.eq(2).html(str);
			var countryOspan=bctBox.eq(2).find('span');
			countryOspan.bind({
				click:function(){
					selectoA.eq(2).find('>b').text($(this).find('a').text());
					regon.find('.stockaddress').text($(this).find('a').text())
					regon.find('.gCity').css({
						'display':'none'
					})
				}
			})
		}
	}