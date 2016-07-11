var mSwiper;
$(function() {
	// 初始化轮播图片
	mSwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplay:3000,
		loop: true
	});
	
	new Swiper('.limit-goods', {
        slidesPerView: 3,
        spaceBetween: 15
    });
	
//	setInterval("mySwiper.slidePrev()", 2000);

	// 初始化下拉刷新布局
	/*mui.init({
		pullRefresh: {
			container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
			down: {
				contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				contentrefresh: "正在刷新,请稍后", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				callback: pullfreshFunction //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			},
			up: {
				contentrefresh: "正在加载,请稍候", //可选，正在加载状态时，上拉加载控件上显示的标题内容
				contentnomore: '--没有更多数据了--', //可选，请求完毕若没有更多数据时显示的提醒内容；
				callback: loadMoreFunction //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}
		}
	});*/

	// 下拉刷新回调
	function pullfreshFunction() {
		//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		setTimeout(function() {
			mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
		}, 1000);
	}

	// 加载更多回调
	function loadMoreFunction() {
		//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		var _this = this;
		setTimeout(function() {
			_this.endPullupToRefresh(true);
		}, 1000);
	}
	var contentWebview = null;
	
	
	// 回到顶部设定
	$("#pt-gotop").bind("click", function(e) {
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	
	$(window).scroll(function(){  
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;  
		if (scrollTop > 1000) {
			$("#pt-gotop").show("normal");
		} else {
			$("#pt-gotop").hide("normal");
		}
    })  
	/*document.getElementById("htmlbody").addEventListener('scroll', function(e) {
		console.log(e.detail.lastY);
		if (e.detail.lastY < -1000) {
			$("#pt-gotop").show("normal");
		} else {
			$("#pt-gotop").hide("normal");
		}
	});*/
	
	/*document.getElementById("refreshContainer").addEventListener('scroll', function(e) {
		if (e.detail.lastY < -1500) {
			$("#pt-gotop").show("normal");
		} else {
			$("#pt-gotop").hide("normal");
		}
	});*/
	
	// 绑定本地跳转事件
	bindNativeLink();
	
	// 启动倒计时 new Date("2016-05-06 23:50").getTime()
	var endTime = $("#seckill_time").attr("p-time-end");
	var endTimestamp =  new Date(endTime).getTime();
	if(isNaN(endTimestamp) || endTimestamp <= new Date().getTime()){
		$("#limit-sale-box").remove();
		return;
	}
	var hourEle = $("#limit-hour");
	var minuteEle = $("#limit-minute");
	var secondsEle = $("#limit-seconds");
	var intervalHolder;
	var timeDown = function(){
		var curTime = new Date().getTime();
		if(endTimestamp <= curTime)
		{
			$("#limit-sale-box").remove();
			clearInterval(intervalHolder);
			return;
		}
		
		// 换算成秒
		var timeOffset = (endTimestamp - curTime) / 1000;
		
		var hour = Math.floor(timeOffset / 3600);
		var minute = Math.floor(timeOffset % 3600 / 60);
		var seconds = Math.floor(timeOffset % 60);
		hourEle.text(pad(hour,2));
		minuteEle.text(pad(minute,2));
		secondsEle.text(pad(seconds,2));
		
	}
	intervalHolder = setInterval(timeDown,1000)
	
});

function bindNativeLink(selector){
	if(!selector)
	{
		selector = "body";
	}
	
	mui(selector).on("tap","[p-type]",function(){
		var $this = $(this);
		var type = $this.attr("p-type");
		var data = $this.attr("p-data");
		var title = $this.attr("p-title");
		openNative({type:type,data:data,title:title});
	});
}

function openNative(params){
	if(!params)
	{
		return;
	}
	$("#native_open").remove();
	var paramPath = "";
	var i = 0,sign = "";
	for(key in params){
		if(!params[key])
		{
			continue;
		}
		sign = i > 0 ? "&" : "?";
		paramPath += (sign+key+"="+params[key]);
		i++;
	}
	$("body").append("<iframe id='native_open' src='purcotton://mobile"+paramPath+"' height=0;width=0;scroll='none'></iframe>");
}

function pad(num, n) {  
    var len = num.toString().length;  
    while(len < n) {  
        num = "0" + num;  
        len++;  
    }  
    return num+"";  
}  