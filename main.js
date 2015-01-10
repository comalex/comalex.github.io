var offset = 80;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
jQuery('.gal').colorbox({
    rel: 'gal', href: function () {
        return $(this).prop('src');
    },
    maxWidth: '100%',
    maxHeight: '100%',
    });
