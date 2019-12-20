// 封装本地储存
	var storage = {
		set:function(key,value){
			
			/*
			storage.set('list',arr);
			
			*/
			var str = JSON.stringify(value);	
			window.localStorage.setItem(key,str);
			
		},
		get:function(key){	
			var str = window.localStorage.getItem(key);
			if(str){	
				var arr = JSON.parse(str);
				return arr;
			}else{
				return [];
				
			}
		},
		remove:function(key){
			
			window.localStorage.removeItem(key);
		},
		clear:function(){
			window.localStorage.clear();
		}
	}
	