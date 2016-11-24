
var newimages=[];
var ci=0 , jd=0;
var arr=[];

 for (var i=1; i<=30; i++){
	arr.push("https://qq153.github.io/Waterfall/img/m"+i+".jpg");
}

   for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            show();
        }
    }
   

function show(){
	ci++;
	jd = Math.floor(ci/arr.length*100);
    console.log(jd);
    if(jd==100){
    	waterfall();
    }
}

	function waterfall(){
		var liBox = document.getElementsByTagName('li');
		var kk = 0;
		var xin;
		var jj=10;
		var tu = 1;
		
		function suiji(min,max){
			return Math.floor(Math.random()*(max-min)+min);
		}
		
		function jia(){
			kk++;
			jj++;
			tu++;
			if(kk>6){
				kk=1;
			}
			if(tu>30){
				tu=1;
			}
			
			var newDiv = document.createElement('div');
			newDiv.innerHTML = "<img src='img/m"+suiji(1,30)+".jpg' alt='"+jj+"' />";
			newDiv.className = "div"+kk;
			xin = newDiv;
		}
		
		window.onscroll = function() {
			for(var i=0;i<liBox.length;i++){
				if(liBox[i].getBoundingClientRect().bottom<=document.documentElement.clientHeight){
					console.log(liBox[i])
					jia();
					liBox[i].appendChild(xin);
				}
			}
		}
	}
