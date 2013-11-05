$(function(){
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf('android') > -1; //&& ua.indexOf("mobile");
var isIos = ua.indexOf('ipad' || 'iphone') > -1;
if(isAndroid) {
  alert('android')
}
if(isIos){
	alert('ios')
}
});