$(function(){
	/* 切换背景 */
	function refreshBg(){
		var main = $('.main');
		var content = $('.content');
		var mainBgArr = new Array("T1ruLjBvd_1RCvBVdK", "T1YRYyBCYT1RCvBVdK");
		var contentBgArr = new Array("#fff1e8", "#5343eb");
		var x = Math.random();
		var xtu = parseInt(x * mainBgArr.length);
		main.css('background','url(../img/jpg/'+mainBgArr[xtu]+'.jpg)');
		content.css('background',contentBgArr[xtu])
	}
	/* tab切换 */
	function tabs(){
		var loginHeadOas=$('.content .main .loginBox .loginHead>a');
		var logins=$('.content .main .loginBox .loginMain .login');
		var userLoginwayOas=$('.content .main .loginBox .loginMain .userLogin .userLoginway>a');
		var userLoginMethods=$('.content .main .loginBox .loginMain .userLogin .userLoginMethod');

		loginHeadOas.bind({
			click:function(){
				$(this).addClass('cur').siblings('a').removeClass('cur');
				logins.eq($(this).index('.content .main .loginBox .loginHead>a')).addClass('show').siblings().removeClass('show');
			}
		})
		userLoginwayOas.bind({
			click:function(){
				$(this).addClass('hide').siblings('a').removeClass('hide');
				userLoginMethods.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLoginway>a')).addClass('hide').siblings().removeClass('hide');
			}
		})
	}
	
	/* 更多登录方式 */
	function moreRestsLogin(){
		var down=$('.content .main .loginBox .restsLogin .down');
		var more=$('.content .main .loginBox .restsLogin li .more');

		var onoff=true;
		more.bind({
			click:function(){
				if(onoff){
					down.removeClass('hide');
					onoff=!onoff;
				}else{
					down.addClass('hide');
					onoff=!onoff;
				}
			}
		})
	}
	
	function UserInputincident(){
		var loginUserNameInput=$('.content .main .loginBox .loginMain .userLogin .userLogins input[type="text"]');
		var loginItemUserErrTip=$('.content .main .loginBox .loginMain .userLogin .userLogins  .errTip');
		var loginItemUserErrTipText=$('.content .main .loginBox .loginMain .userLogin .userLogins  .errTip div p .text');
		var loginItemUserclearBtns=$('.content .main .loginBox .loginMain .userLogin .userLogins  .loginItem .clearBtn');
		var loginItemUserdafaultPlaceholder=$('.content .main .loginBox .loginMain .userLogin .userLogins  .loginItem .dafaultPlaceholder');
		var loginItemUserLoginBtn=$('.content .main .loginBox .loginMain .userLogin .userLogins  .actions input[type="button"]');
		loginUserNameInput.bind({
			focus:function(){
				console.log()
				loginItemUserErrTip.css('visibility','hidden');
				loginItemUserclearBtns.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins input[type="text"]')).show()
				loginItemUserdafaultPlaceholder.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins input[type="text"]')).hide();
			},
			blur:function(){
				if(loginUserNameInput.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins input[type="text"]')).val()==''){
					loginItemUserclearBtns.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins input[type="text"]')).hide()
					loginItemUserdafaultPlaceholder.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins input[type="text"]')).show();
				}
				if(loginUserNameInput.eq(0).val()==''){
					loginItemUserErrTip.css('visibility','visible');
					loginItemUserErrTipText.text('账户不能为空,清重新输入');
				}else{
					loginItemUserErrTip.css('visibility','hidden');
					
					
					if(loginUserNameInput.eq(1).val()==''){
						loginItemUserErrTip.css('visibility','visible');
						loginItemUserErrTipText.text('密码不能为空,清重新输入');
					}else{
						loginItemUserErrTip.css('visibility','hidden');
					}
				}
				
			}
			
		})
		loginItemUserclearBtns.bind({
			click:function(){
				console.log(loginUserNameInput.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins  .loginItem .clearBtn')).val())
				loginUserNameInput.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins  .loginItem .clearBtn')).val('');
				loginUserNameInput.eq($(this).index('.content .main .loginBox .loginMain .userLogin .userLogins  .loginItem .clearBtn')).focus();
			}
		})
		
	
	}
	
	refreshBg()
	tabs()
	moreRestsLogin();
	UserInputincident();
})