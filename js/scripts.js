$('#list').click( function(){

	$('.portfolio article').removeClass('grid-6');
	$('.portfolio article').addClass('grid-12');

})

//grid view

$('#grid').click( function(){

	$('.portfolio article').removeClass('grid-12');
	$('.portfolio article').addClass('grid-6');

})

$('#contact').click(function(){
	$('.form').removeClass('hide');

})

$('#remove').click(function(){
	$('.form').addClass('hide');

})
