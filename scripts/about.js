
window.onload = function(){
	var url = document.location.href;
	id = url.split('?')[1].split('=')[1];//containes id of button to be clicked
	press(id);
}

function press(id){
	$('iframe').attr('src', "iframe/about/"+id+".html")
	// changeHeight(document.querySelector('iframe'));
	//for dynamic size of sidebar
	// $('.menu').height($('.content').height() > $('.menu ul').height() ? $('.content').height() : $('.menu ul').height() + $('.menu > div').height() +15 )
	$('.menu li').removeClass('clicked');
	$("#"+id).addClass('clicked');
	$('.content h1').html($("#"+id).html());
	
}

$('.menu li').click(function(event){
	// console.log(this.getAttribute('id'));
	press(this.getAttribute('id'));
});

$('.menu .expnd-btn img').click(function(){
	$('.menu ul').slideToggle();
});


// changing height of iframe to its content
function changeHeight(iframe){
	iframe.height = 0;//it seems like foolish but very necessary
	iframe.height = iframe.contentWindow.document.body.scrollHeight + 10;
}
