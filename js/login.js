//var ke=document.getElementsByClassName("ke");
//var up=document.getElementById("up");
//alert("555");
//ke[0].onmouseover=function (){
//	document.getElementsByClassName("kehu")[0].style.display="block";
//	up.className="icon-chevron-down";
//}
$(document).ready(function() {
	$(".ke").hover(
		function() {
			var $div = $(".ke");
			t = setInterval(function() {
				$(".kehu").slideDown(500)
			}, 200);
			up.className = "icon-chevron-down";
		},
		function() {
			clearInterval(t);
			$(".kehu").slideUp(500),
				up.className = "icon-chevron-up";
		}
	);

	$("#app").hover(
		function() {
			var $div = $("#app");
			t = setInterval(function() {
				$(".app").fadeIn(500)
			}, 200);
		},
		function() {
			clearInterval(t);
			$(".app").fadeOut(500);
		}

	);

	$("#fk1").click(function() {
		$(".tan").fadeIn(800);
	});
	$("#off").click(function() {
		$(".tan").fadeOut(800);
	});

	$(".bit").click(function() {
		$.message({
			message: '警告提示',
			type: 'warning'
		});
	});

	//	$(".ju1").hover(
	//		function(){
	//		var $div = $(".ju1");
	//		t=setInterval(function(){$(".jb1").fadeIn(300)},250);
	//		},
	//		function(){
	//			clearInterval(t);
	//			$(".jb1").fadeOut(300);
	//		} 
	//	);
	//	$(".ju2").hover(
	//		function(){
	//		var $div = $(".ju2");
	//		t=setInterval(function(){$(".jb2").fadeIn(300)},250);
	//		},
	//		function(){
	//			clearInterval(t);
	//			$(".jb2").fadeOut(300);
	//		} 
	//	);

	//	$(".ju").hover(
	//		function(){$(".ju_box").fadeIn(300)},
	//		function(){$(".ju_box").fadeOut(200)}
	//		);
});

$('.lunbo').Marquee({
	distance: 36, //一次滚动的距离
	// 		duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
	time: 3, //停顿时间，单位为秒
	direction: 'up', //滚动方向，'left','right','up','down'
});

//ke[0].onmouseout=function (){
//	document.getElementsByClassName("kehu")[0].style.display="none";
//	up.className="icon-chevron-up";
//}

//var ju=document.getElementsByClassName("ju");
//for(var i=0;i<ju.length;i++){
//	
//ju[i].onmouseover=function show(){
//	this.getElementsByTagName("ul")[0].style.display="block";
//}
//ju[i].onmouseout=function hide(){
//	this.getElementsByTagName("ul")[0].style.display="none";
//}
//}

//注册登录
//var use=document.getElementById("user");
//var pwd=document.getElementById("pwd");
//var pp=document.getElementById("pp");
//var img=document.getElementById("!");
//var user=document.getElementsByClassName("user")[0];
//var pass=document.getElementsByClassName("password")[0];
//var isUse=false;
//var isPwd=false;
//var sum=document.getElementById("sum");
//
//use.onblur=function(){
//	if(use.value.length==0)
//	{
//		user.style.border="1px solid red";
//		pp.innerHTML="<img id='!' src='img/！.png' style='display: inline-block;'/>"+"请输入账号!";
//		isUse=false;
//		sum.style.cursor="not-allowed";
//	}
//	else{
//		user.style.border="1px solid #CCCCCC";
//		pp.innerHTML="";
//		isUse=true;
//		sum.style.cursor="pointer";
//	}
//}
//sum.style.cursor="not-allowed";

var ju = document.getElementsByClassName("ju");
for(var i = 0; i < ju.length; i++) {
	ju[i].onmouseover = function() {
		this.getElementsByClassName("ju_box")[0].style.display = "block";
	}
}
for(var i = 0; i < ju.length; i++) {
	ju[i].onmouseout = function() {
		this.getElementsByClassName("ju_box")[0].style.display = "none";
	}
}
var sou = document.getElementById("sou");
var more = document.getElementsByClassName("search_more")[0];
sou.onclick = function() {
	more.style.display = "block";
}
sou.onblur = function() {
	more.style.display = "none";
}