$(function(){
	function banner(){
		var mySwiper = new Swiper ('.banner', {
		    loop: true, // 循环模式选项
		     autoplay:true,//等同于以下设置
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    
		  })  
	}
	
	banner();
})
