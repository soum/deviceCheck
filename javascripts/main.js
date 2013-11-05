//console.log('This would be the main JS file.');
$(function(){
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    if (browserRatio >=1.5) {
        //$container.css('min-height', '360px');
		alert('min-height 360px')
    } else {
        //$container.css('min-height', '555px');
    }
}
alert('test')
});