// dynamically create some of the content on the page

// toggle classes/data-attributes, especially for fading and hiding


$('img').click(function() {
    console.log($('this'))
    $('this').attr('id')
});

var skillsBars = $('.skills')

$(skillsBars).mouseover(function(){
    $('this').querySelector().
    $(skillsBars).removeClass('w3-dark-grey')
})

$(skillsBars).mouseout(function(){
    $(skillsBar).addClass('w3-dark-grey')
})

$('.skills').hover(function(){$(this).toggleClass('skills_hover');});


