
$(function(){
	TouchSlide({ slideCell:"#campus1", titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", autoPage:true, autoPlay:true});
	TouchSlide({ slideCell:"#campus2", titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", autoPage:true, autoPlay:true});
	TouchSlide({ slideCell:"#book", titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", autoPage:true, autoPlay:true});

	$('.more').click(function(){
		$(this).parent('p').hide();
		$('.info').show();
	})
	$('.return').click(function(){
		$(this).parent('p').hide();
		$('.substract').show();
	})

    $('.music').click(function(){      
        swap_music();
    });
})
function swap_music() {
    var oAudio = document.getElementById('myaudio');
    if (oAudio.paused) {
		$('.music').addClass('rotate');
        oAudio.play(); 
    }
    else {
		$('.music').removeClass('rotate');
        oAudio.pause(); 
    }
}

