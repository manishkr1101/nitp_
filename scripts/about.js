
window.onload = function(){
	var url = document.location.href;
	id = url.split('?')[1].split('=')[1];//containes id of button to be clicked
	press(id);
}

function press(id){
	$('iframe').attr('src', "iframe/about/"+id+".html")
	$('.menu li').removeClass('clicked');
	$("#"+id).addClass('clicked');
	$('.content h1').html($("#"+id).html());
	
}

$('.menu li').click(function(event){
	// console.log(this.getAttribute('id'));
	press(this.getAttribute('id'));
});

