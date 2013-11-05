//console.log('This would be the main JS file.');
$(function(){
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    if (browserRatio >=1.5) {
        //$container.css('min-height', '360px');
		//alert('min-height 360px')
		$('body').css('background', 'green')
    } else {
        //$container.css('min-height', '555px');
		$('body').css('background', 'red')
    }
}

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
  // Do something!
  // Redirect to Android-site?
  alert('android')
}
});