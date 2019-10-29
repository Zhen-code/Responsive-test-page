import $ from 'expose-loader?$!jquery'
import './css/xs.css'
import './css/sm.css'
import './css/md.css'
import './css/lg.css'
$(document).ready(function($) {
	var AlbumImg=$('.thumbnail img')
	for(var i=0;i<AlbumImg.length;i++){
		$(AlbumImg[i]).mouseenter(function(event) {
			$(this).css('transform', 'scale(1)');
		}).mouseleave(function(event) {
			$(this).css('transform', 'scale(0.9)');
		});;
	}
	var a=0;
	var carImg=$("#carousel-example-generic ul li");
	setInterval(function(){
    if(a>2){
    	a=0
    }
    $(carImg[a]).css('opacity', '1').siblings().css('opacity', '0');
     a++;
	},2000)
});

	