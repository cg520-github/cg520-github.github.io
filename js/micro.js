function micro(){
	var spechBtn=$('.spechBtn');
	var bounce=$('.bounce');
	var closeBtn=$('.closeBtn');
	
	spechBtn.bind({
		mousedown:function(){
			bounce.removeClass('hide');
		}
	})
	$(document).bind({
		mouseup:function(){
			bounce.addClass('hide');
		},
	})
	
	closeBtn.bind({
		click:function(){
			var userAgent = navigator.userAgent;
			    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
			        location.href = "../index.html";
			    } else {
			        window.opener = null;
			        window.open('', '_self');
			    }
			    window.close();
		}
	})
	
}
micro();