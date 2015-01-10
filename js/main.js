var offset = 80;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
jQuery('.gal').colorbox({
    rel: 'gal',
    href: function () {
        var path = $(this).prop('src').split('/');
        path[path.length-2] = 'big'
        console.log(path)
        return path.join('/');
    },
    maxWidth: '100%',
    maxHeight: '100%',
});
