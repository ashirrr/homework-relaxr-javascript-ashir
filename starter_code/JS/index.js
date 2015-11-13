$(document).ready(function() {
	$('.readless').hide();
});


$('.readmore').click(showMore);

function showMore(){ 
  $('#show-this-on-click').slideDown("linear");
  $('.readmore').hide();
  $('.readless').show();
 
}

$('.readless').click(showLess);

function showLess(){
	$('.readmore').show();
	$('.hide').hide();
	$('.readless').hide();
}

$('.learnmore').click(sideShow);

function sideShow(){
	$('#learnmoretext').slideDown("linear")
	$('.learnmore').hide();

}

$('.button_blue').submit(function(){
    $('.button_blue').event.preventDefault();

});



