$(function() {
	function ShowShoppingCart() {

		var ShoppingArr = storage.get('shippingList');
		var cartCenterWrap = $('.cartLists .cartCenterWrap');
		var cartLists = $('.cartLists');
		var container = $('.container');
		if (ShoppingArr.length) {
			cartLists.show();
			container.find('.cartEmptyWrap').hide();
			container.find('.loginTipCart').show();
			container.find('.loginTipCartSelect').show();

			function Fl(obj) {
				var map = {},
					dest = [];
				for (var i = 0; i < obj.length; i++) {
					var ai = obj[i];
					if (!map[ai.facilitator]) {
						dest.push({
							facilitator: ai.facilitator,
							data: [ai]
						});
						map[ai.facilitator] = ai;
					} else {
						for (var j = 0; j < dest.length; j++) {
							var dj = dest[j];
							if (dj.facilitator == ai.facilitator) {
								dj.data.push(ai);
								break;
							}
						}
					}
				}
				return dest;
			}
			var facilitatorArr = Fl(ShoppingArr);

			var str = '';
			var str1 = '';

			var arr = [];

			$.each(facilitatorArr, function(i, el) {

				var cartShopHeaderBoxDiv = $('<div>');
				cartShopHeaderBoxDiv.addClass('cartShopHeaderBox');
				str = '<div class="cartShopHeader">' +
					'<div class="slide1">' +
					'<div class="checkBoxNo">' +
					'<input type="checkbox">' +
					'</div>' +
					'</div>' +
					'<div class="slide2">' +
					'<a href="#" class="cartShopName" target="_blank">' + el.facilitator + '</a>' +
					'<span class="carKf">' +
					'<i class="kficon cI"></i>' +
					'<span class="contactFont">在线客服</span>' +
					'</span>' +
					'</div>' +
					'<div class="couponDesc clearContent">' +
					'<div class="fr box">' +
					'<i class="attention cI"></i>' +
					'<span class="tip">优惠券使用说明</span>' +
					'<div class="tipDesc">' +
					'<div class="whiteArrow">◆</div>' +
					'<div class="txtTip">因可能存在用券规则变化更新不及时等不确定性情况出现，最终该劵是否可用以填写订单页为准</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>';
				cartShopHeaderBoxDiv.html(str);
				cartCenterWrap.append(cartShopHeaderBoxDiv)

				$.each(facilitatorArr[i].data, function(j, el) {
					var cartShopGoodsBoxDiv = $('<div>');
					cartShopGoodsBoxDiv.addClass('cartShopGoodsBox');
					cartShopGoodsBoxDiv.attr('tradeitemid', el.tradeItemId);
					str1 = '<div class="cartShopGoods clearContent">' +
						'<div class="slide1">' +
						'<div class="checkBoxNo">' +
						'<input type="checkbox">' +
						'</div>' +
						'</div>' +
						'<div class="slide2">' +
						'<a href="">' +
						'<img src="' + el.img + '">' +
						'</a>' +
						'</div>' +
						'<div class="shop fl">' +
						'<div class="content clearContent">' +
						'<div class="slide3">' +
						'<div class="goodName">' +
						'<a href="">' +
						el.name +
						'</a>' +
						'</div>' +
						'<div class="supportServer clearContent">' +
						'<i class="serverIcon"></i>' +
						'</div>' +
						'</div>' +
						'<div class="slide4">' +
						'<div class="carGoodPro">' +
						'<div class="carText">' +
						'<div class="cartSalesProItem">' +
						'<span class="cartGoodkey">颜色：</span>' +
						'<span class="cartGoodVal">黄绿色</span>' +
						'</div>' +
						'<div class="cartSalesProItem">' +
						'<span class="cartGoodkey">版本：</span>' +
						'<span class="cartGoodVal">热销</span>' +
						'</div>' +
						'</div>' +
						'<div class="cartCoupon">' +
						'<div class="popup">' +
						'修改' +
						'<i class="cartArrow"></i>' +
						'</div>' +
						'</div>' +
						'<div class="cartCouponDown">' +
						'<div class="salepropsBox">' +
						'<div class="salepropsWarp">' +
						'<div class="salepropsArrow">' +
						'<i>◆</i>' +
						'<i class="cartArrowCover">◆</i>' +
						'</div>' +
						'<i class="salepropsArrowClose"></i>' +
						'<div class="cspBox">' +
						'<dl class="item clearContent">' +
						'<dt>颜色</dt>' +
						'<dd>' +
						'<button class="salepropsVal active" value="黄绿色">' +
						'<span class="text">黄绿色</span>' +
						'<i class="choseIcon"></i>' +
						'</button>' +
						'</dd>' +
						'</dl>' +
						'<dl class="item clearContent">' +
						'<dt>版本</dt>' +
						'<dd>' +
						'<button class="salepropsVal active" value="热销">' +
						'<span class="text">热销</span>' +
						'<i class="choseIcon"></i>' +
						'</button>' +
						'</dd>' +
						'</dl>' +
						'</div>' +
						'<div class="cspBoxBtnGroup">' +
						'<a href="javascript:;" class="cartBtn">取消</a>' +
						'<a href="javascript:;" class="cartBtn cartBtnRed">确认</a>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'<div class="slide5">' +
						'<div class="cartGoodPrice">¥' + el.Price.toFixed(2) + '</div>' +
						'</div>' +
						'<div class="slide6">' +
						'<div class="cartCount">' +
						'<a href="javascript:;" class="guiCountbtn guiCountbtnSub guiDisabled">-</a>' +
						'<a href="javascript:;" class="guiCountbtn guiCountbtnadd">+</a>' +
						'<div class="guiCountInput">' +
						'<input class="dytest" type="text" value="' + parseInt(el.shippingNum) + '">' +
						'</div>' +
						'</div>' +
						'<div class="red">限购' + el.purchaseLimitation + '件</div>' +
						'</div>' +
						'<div class="slide7">' +
						'<div class="cartGoodAmount"> ¥&nbsp;' + (el.Price * parseInt(el.shippingNum)).toFixed(2) + '</div>' +
						'</div>' +
						'<div class="slide8">' +
						'<div class="cartGoodFundel">' +
						'<a href="javascript:;">删除</a>' +
						'</div>' +
						'<div class="cartGoodFun">' +
						'<a href="javascript:;">移入收藏夹</a>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>';
						
					cartShopGoodsBoxDiv.html(str1);
					cartShopHeaderBoxDiv.after(cartShopGoodsBoxDiv);
					arr.push(el.Price * parseInt(el.shippingNum));
					var cartCount = $('.cartCenterWrap .cartShopGoods .content .slide6 .cartCount').eq(i);
					if (cartCount.find('.guiCountInput .dytest').val() < el.purchaseLimitation) {
						cartCount.find('.guiCountbtnadd').removeClass('guiDisabled');
					} else {
						cartCount.find('.guiCountbtnadd').addClass('guiDisabled');
					}
				})


			})


			var checkAllShopGood = $('.cartLists .cartHeadWrap .clearContent .slide1>div');
			var checkAllinput = $('.cartLists input[type="checkbox"]');
			var checkAllShopGoods = $('.cartLists .checkBoxNo');
			var cartSelectGoodSelectNum = $('.cartLists .cartBottomWrap .info .container .slide3 .cartSelectGood .carSelectNum');
			var totalPriceffyh = $('.cartLists .cartBottomWrap .info .container .slide3 .totalPrice .ffyh');
			var settleAccounts = $('.cartLists .cartBottomWrap .info .container .slide4 a');
			var checkAllShopBottomGood = $('.cartLists .cartBottomWrap .info .container  .slide1>div');
			var cartCount = $('.cartCenterWrap .cartShopGoods .content .slide6 .cartCount');
			var RadioshopGoods=$('.cartCenterWrap .cartShopGoodsBox .cartShopGoods .slide1>div');
			var cartShopGoodsBox=$('.cartCenterWrap .cartShopGoodsBox');
			

			cartCount.find('.guiCountbtnSub').addClass('guiDisabled');
			cartCount.find('.guiCountbtnadd').addClass('guiDisabled');
			cartCount.find('.guiCountInput .dytest').addClass('guiDisabled');
			cartCount.find('.guiCountInput .dytest').attr('readonly','readonly')
			function allChecked() {
				
				var zongPrice = 0;
				
				if (checkAllShopGoods.attr('checked')) {
					checkAllShopGoods.removeAttr('checked');
					checkAllinput.prop("checked", false);
					cartShopGoodsBox.css({
						'background':'#fff'
					})
					checkAllShopGoods.removeClass('checkBoxChose');
					checkAllShopGoods.addClass('checkBoxNo');
					cartSelectGoodSelectNum.text(0);
					totalPriceffyh.text('￥' + 0);
					settleAccounts.css({
						'background': '#ccc'
					})
					cartCount.find('.guiCountbtnadd').unbind('click');
					cartCount.find('.guiCountbtnSub').unbind('click');
					cartCount.find('.guiCountbtnSub').addClass('guiDisabled');
					cartCount.find('.guiCountbtnadd').addClass('guiDisabled');
					cartCount.find('.guiCountInput .dytest').addClass('guiDisabled');
					cartCount.find('.guiCountInput .dytest').attr('readonly','readonly')
				} else {
					$.each(arr, function(i, el) {
						zongPrice += el;
					})
					checkAllShopGoods.attr('checked', 'checked');
					checkAllinput.prop("checked", true);
					cartShopGoodsBox.css({
						'background':'#fff5f4'
					})
					checkAllShopGoods.removeClass('checkBoxNo');
					checkAllShopGoods.addClass('checkBoxChose');
					cartSelectGoodSelectNum.text(ShoppingArr.length);
					totalPriceffyh.text('￥' + zongPrice.toFixed(2));
					settleAccounts.css({
						'background': '#e3101e'
					})
					settleAccounts.bind({
						click: function() {
							$(this).find('.Account').hide();
							$(this).find('.btnLoading').show();
							setTimeout(function() {
								window.location.href = '../index.html';
							}, 2000)
						}
					})
					
					
					cartCount.find('.guiCountInput .dytest').removeAttr('readonly');
					cartCount.find('.guiCountInput .dytest').removeClass('guiDisabled');
					cartCount.find('.guiCountInput .dytest').each(function(i,el){
			
						if ($(this).val() >1) {
							$(this).parent().parent().find('.guiCountbtnSub').removeClass('guiDisabled');
							$(this).parent().parent().find('.guiCountbtnadd').removeClass('guiDisabled');
						}
						if ($(this).val() ==1){
							$(this).parent().parent().find('.guiCountbtnSub').addClass('guiDisabled');
							$(this).parent().parent().find('.guiCountbtnadd').removeClass('guiDisabled');
						}
						var id = $(this).parent().parent().parent().parent().parent().parent().parent().attr('tradeitemid');
						
						var Shoppingobj = ShoppingArr.filter(function(data) {
							return data.tradeItemId == id;
						})[0]
						if ($(this).val() >= Shoppingobj.purchaseLimitation) {
							$(this).parent().parent().find('.guiCountbtnadd').addClass('guiDisabled');
						} else {
							$(this).parent().parent().find('.guiCountbtnadd').removeClass('guiDisabled');
						}
						
						
						
					})
					
					
					
					
					
					cartCount.find('.guiCountbtnSub').bind({
						click: function() {
							
							var id = $(this).parent().parent().parent().parent().parent().parent().attr('tradeitemid');
							var Shoppingobj = ShoppingArr.filter(function(data) {
								return data.tradeItemId == id;
							})[0]
					
							if (($(this).siblings('.guiCountInput').find('.dytest').val()) <= Shoppingobj.purchaseLimitation) {
								$(this).siblings('.guiCountbtnadd').removeClass('guiDisabled');
								if (($(this).siblings('.guiCountInput').find('.dytest').val()>1)){
									$(this).siblings('.guiCountInput').find('.dytest').val(parseInt($(this).siblings('.guiCountInput').find(
										'.dytest').val()) - 1);
									Shoppingobj.shippingNum = $(this).siblings('.guiCountInput').find('.dytest').val();
					
									$(this).parent().parent().siblings('.slide7').find('.cartGoodAmount').html('¥&nbsp;' + (parseInt(
										Shoppingobj.shippingNum) * Shoppingobj.Price).toFixed(2));
			
									window.localStorage.setItem('shippingList', JSON.stringify(ShoppingArr));
									arr=[];
									zongPrice=0;
									$.each(ShoppingArr,function(i,el){
										arr.push(parseInt(el.shippingNum)*el.Price)
									})
									console.log(arr)
									$.each(arr, function(i, el) {
										zongPrice += el;
									})
									totalPriceffyh.text('￥' + zongPrice);
								}
								if ($(this).siblings('.guiCountInput').find('.dytest').val() <= 1) {
									$(this).addClass('guiDisabled');
								}
							} else {
								$(this).siblings('.guiCountbtnadd').addClass('guiDisabled');
							}
					
						}
					
					})
					cartCount.find('.guiCountbtnadd').bind('click',function(){
						
						var id = $(this).parent().parent().parent().parent().parent().parent().attr('tradeitemid');
						var Shoppingobj = ShoppingArr.filter(function(data) {
							return data.tradeItemId == id;
						})[0]
						
						if (parseInt($(this).siblings('.guiCountInput').find('.dytest').val()) < Shoppingobj.purchaseLimitation) {
							$(this).removeClass('guiDisabled');
							if ($(this).siblings('.guiCountInput').find('.dytest').val() >= 1) {
								$(this).siblings('.guiCountbtnSub').removeClass('guiDisabled');
							}
						
							$(this).siblings('.guiCountInput').find('.dytest').val(parseInt($(this).siblings('.guiCountInput').find(
								'.dytest').val()) + 1);
								
							if (parseInt($(this).siblings('.guiCountInput').find('.dytest').val()) == Shoppingobj.purchaseLimitation) {
								$(this).addClass('guiDisabled');
							}
							Shoppingobj.shippingNum = $(this).siblings('.guiCountInput').find('.dytest').val();
							$(this).parent().parent().siblings('.slide7').find('.cartGoodAmount').html('¥&nbsp;' + (parseInt(Shoppingobj
								.shippingNum) * Shoppingobj.Price).toFixed(2));
							
							
							window.localStorage.setItem('shippingList', JSON.stringify(ShoppingArr));
							arr=[];
							zongPrice=0;
							$.each(ShoppingArr,function(i,el){
								arr.push(parseInt(el.shippingNum)*el.Price)
							})
							console.log(arr)
							$.each(arr, function(i, el) {
								zongPrice += el;
							})
							totalPriceffyh.text('￥' + zongPrice.toFixed(2));
							
						} else {
							$(this).addClass('guiDisabled');
						}
					})
					
					cartCount.find('.guiCountInput .dytest').bind({
						input: function() {
							if ($(this).val() > 1) {
								$(this).parent().parent().find('.guiCountbtnSub').removeClass('guiDisabled');
							} else {
								cartCount.find('.guiCountbtnSub').addClass('guiDisabled');
							}
							var id = $(this).parent().parent().parent().parent().parent().parent().parent().attr('tradeitemid');
					
							var Shoppingobj = ShoppingArr.filter(function(data) {
								return data.tradeItemId == id;
							})[0]
							if ($(this).val() >= Shoppingobj.purchaseLimitation) {
								$(this).parent().parent().find('.guiCountbtnadd').addClass('guiDisabled');
								$(this).val(Shoppingobj.purchaseLimitation);
							} else {
								$(this).parent().parent().find('.guiCountbtnadd').removeClass('guiDisabled');
							}
							if (/[^\d]/.test($(this).val())) {
								var temp = $(this).val().replace(/[^\d]/g, '');
								$(this).val(temp);
							}
							
							
						},
						blur: function() {
							if ($(this).val() == '' || $(this).val() == 0) {
								$(this).val(1);
							}
							
							var id = $(this).parent().parent().parent().parent().parent().parent().parent().attr('tradeitemid');
							var Shoppingobj = ShoppingArr.filter(function(data) {
								return data.tradeItemId == id;
							})[0]
							
							$(this).parent().parent().parent().siblings('.slide7').find('.cartGoodAmount').html('¥&nbsp;' + ($(this).val()* Shoppingobj.Price).toFixed(2));
							console.log($(this).parent().parent().parent().siblings('.slide7').find('.cartGoodAmount'))
							Shoppingobj.shippingNum = $(this).val();
							window.localStorage.setItem('shippingList', JSON.stringify(ShoppingArr));
							console.log(ShoppingArr,$(this).val())
							arr=[];
							zongPrice=0;
							$.each(ShoppingArr,function(i,el){
								arr.push(parseInt(el.shippingNum)*el.Price)
							})
							
							$.each(arr, function(i, el) {
								zongPrice += el;
							})
							totalPriceffyh.text('￥' + zongPrice);
								
						}
					})
					
					var cartGoodFundel = $('.cartCenterWrap .cartShopGoodsBox .cartShopGoods .shop .content .slide8 .cartGoodFundel>a');
					
					cartGoodFundel.bind({
						click: function() {
							var id = $(this).parent().parent().parent().parent().parent().parent().attr('tradeitemid');
							$(this).parent().parent().parent().parent().parent().parent().remove();
							var index1 = null;
							$.each(facilitatorArr, function(i, el) {
								$.each(facilitatorArr[i].data, function(j, el) {
									if (el.tradeItemId == parseInt(id)) {
										facilitatorArr[i].data.splice(j, 1);
										if (facilitatorArr[i].data == '') {
											$('.cartCenterWrap .cartShopHeaderBox').eq(i).remove();
										}
									}
					
								})
							})
					
					
							var index = null;
							$.each(ShoppingArr, function(i, el) {
								if (el.tradeItemId == parseInt(id)) {
									index = i;
								}
							})
					
					
							ShoppingArr.splice(index, 1);
							storage.set('shippingList', ShoppingArr);
					
							if (ShoppingArr.length) {
								cartLists.show();
								container.find('.cartEmptyWrap').hide();
								container.find('.loginTipCart').show();
								container.find('.loginTipCartSelect').show();
							} else {
								cartLists.hide();
								container.find('.cartEmptyWrap').show();
								container.find('.loginTipCart').hide();
								container.find('.loginTipCartSelect').hide();
							}
						}
					})
				}
				
				
			}
			checkAllShopGood.bind({
				click: function() {
					allChecked();
				}
			})
			checkAllShopBottomGood.bind({
				click: function() {
					allChecked();
				}
			})
			
			
	
			
			
			
			



		} else {
			cartLists.hide();
			container.find('.cartEmptyWrap').show();
			container.find('.loginTipCart').hide();
			container.find('.loginTipCartSelect').hide();
		}

	}


	RenderDataPublic();
	enterList();
	CartSelectPs();
	ShowShoppingCart();

})
