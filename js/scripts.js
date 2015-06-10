$('#list').click( function(){

	$('.portfolio article').removeClass('grid-6');
	$('.portfolio article').addClass('grid-12');

})

//grid view

$('#grid').click( function(){

	$('.portfolio article').removeClass('grid-12');
	$('.portfolio article').addClass('grid-6');


})
new jBox('Modal', {
    width: 300,
    height: 200,
    attach: $('#contact'),
    title: 'Contact Me',
    content: $('#content')
});
